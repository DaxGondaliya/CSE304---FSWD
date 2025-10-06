import { useState } from "react";
import axios from "axios";
import { Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      setStatus({ success: res.data.success, msg: res.data.msg });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ success: false, msg: err.response?.data?.msg || "Something went wrong" });
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white/40 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-2xl p-10 transition hover:shadow-indigo-200">
      <h2 className="text-3xl font-extrabold text-indigo-700 text-center mb-8 tracking-wide">
         Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <User className="absolute top-3 left-3 text-indigo-500" size={20} />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-10 border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            required
          />
        </div>
        <div className="relative">
          <Mail className="absolute top-3 left-3 text-indigo-500" size={20} />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            required
          />
        </div>
        <div className="relative">
          <MessageSquare className="absolute top-3 left-3 text-indigo-500" size={20} />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full pl-10 border border-gray-300 p-3 rounded-xl h-32 resize-none focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
        >
          Send Message 🚀
        </button>
      </form>
      {status && (
        <p
          className={`mt-6 text-center text-lg font-semibold ${
            status.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.msg}
        </p>
      )}
    </div>
  );
}
