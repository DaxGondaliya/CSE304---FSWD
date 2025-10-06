import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react"; // for input icon

export default function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!name) return alert("Please enter your name");
    try {
      await axios.post("http://localhost:5000/api/login", { name }, { withCredentials: true });
      navigate("/profile");
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[100vh] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
      {/* Glassmorphism card */}
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 w-full max-w-md rounded-3xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-white mb-4 text-center drop-shadow-md">
          📚 Library Portal
        </h2>
        <p className="text-white/80 text-center mb-8">
          Enter your name to continue
        </p>

        {/* Input with icon */}
        <div className="flex items-center bg-white/20 border border-white/40 rounded-xl px-4 py-3 mb-6 focus-within:ring-2 focus-within:ring-pink-400 transition">
          <User className="text-white/70 mr-3" />
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full bg-transparent text-white placeholder-white/60 outline-none"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          🚀 Login
        </button>
      </div>
    </div>
  );
}
