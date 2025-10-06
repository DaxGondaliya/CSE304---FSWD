import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = 5000;

// Enable CORS for your frontend
app.use(cors({
  origin: "http://localhost:5173", // change to your frontend URL
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// POST route for sending email
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, msg: "All fields are required" });
  }

  try {
    // ✅ Configure Nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,                  // Gmail works best with 587 (STARTTLS)
      secure: false,              // TLS will be used
      auth: {
        user: "fairshare69@gmail.com",        // ✅ your Gmail
        pass: "xxx xxx xxx xxx"              // ✅ your Gmail App Password (no spaces)
      }
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log("✅ SMTP Server is ready");

    // Mail options
    const mailOptions = {
      from: "fairshare69@gmail.com",          // must match authenticated Gmail
      to: "tirth5105gondaliya@gmail.com",            // send to yourself (can be another address)
      replyTo: email,                         // sender's email
      subject: `New Contact from ${name}`,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Success response
    res.json({ success: true, msg: "Message sent successfully!" });

  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, msg: "Failed to send message" });
  }
});

// Start server
app.listen(PORT, () => console.log("✅ Backend running on http://localhost:${PORT}"));