import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";

// ------------------- Setup -------------------
const app = express();
const PORT = 5000;

// MongoDB connection (adjust DB name if needed)
mongoose.connect("mongodb://127.0.0.1:27017/task15", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ------------------- Schema -------------------
const userLoginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  loginTime: { type: Date, default: Date.now },
});

const UserLogin = mongoose.model("UserLogin", userLoginSchema);

// ------------------- Middleware -------------------
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(session({
  secret: "mysecretkey123",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }, // true only with HTTPS
}));

// ------------------- Routes -------------------

// Login
app.post("/api/login", async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ msg: "Name is required" });

  // Save to session
  req.session.user = { name, loginTime: new Date() };

  // Save to MongoDB
  try {
    const userLogin = new UserLogin({ name });
    await userLogin.save();
    res.json({ msg: "Login successful", user: req.session.user });
  } catch (err) {
    console.error("❌ Error saving login details:", err);
    res.status(500).json({ msg: "Error saving login details" });
  }
});

// Profile
app.get("/api/profile", (req, res) => {
  if (!req.session.user) return res.status(401).json({ msg: "Not logged in" });
  res.json(req.session.user);
});

// Logout
app.post("/api/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ msg: "Error logging out" });
    res.clearCookie("connect.sid");
    res.json({ msg: "Logged out successfully" });
  });
});

// ------------------- Start -------------------
app.listen(PORT, () => console.log("✅ Backend running on http://localhost:${PORT}"));