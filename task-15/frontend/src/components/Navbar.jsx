import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="backdrop-blur-md bg-white/20 border-b border-white/30 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-extrabold tracking-wide cursor-pointer 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                     bg-clip-text text-transparent hover:opacity-80 transition"
        >
          📚 Library Portal
        </h1>

        {/* Nav Links */}
        <div className="flex space-x-8 text-lg font-medium">
          <Link
            to="/"
            className="relative group"
          >
            <span className="text-white/90 hover:text-white transition">
              Login
            </span>
            {/* Underline hover effect */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-indigo-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="/profile"
            className="relative group"
          >
            <span className="text-white/90 hover:text-white transition">
              Profile
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-indigo-500 transition-all group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
