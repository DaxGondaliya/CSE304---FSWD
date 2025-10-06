import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react"; // profile icon

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/profile", { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => navigate("/"));
  }, [navigate]);

  const handleLogout = async () => {
    await axios.post("http://localhost:5000/api/logout", {}, { withCredentials: true });
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-[100vh] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 max-w-lg w-full rounded-3xl shadow-2xl p-10 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-6 drop-shadow-md">
          👤 User Profile
        </h2>

        {user ? (
          <div className="space-y-6">
            {/* Profile Avatar */}
            <div className="flex justify-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 shadow-lg">
                <User className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* User Info */}
            <div className="bg-white/20 border border-white/40 p-6 rounded-2xl shadow-inner text-white/90 text-lg space-y-3">
              <p>
                <span className="font-semibold text-white">Name:</span> {user.name}
              </p>
              <p>
                <span className="font-semibold text-white">Login Time:</span>{" "}
                {new Date(user.loginTime).toLocaleString()}
              </p>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-red-500/50 hover:scale-105 active:scale-95 transition-transform"
            >
              🔒 Logout
            </button>
          </div>
        ) : (
          <p className="text-white/80">Loading session...</p>
        )}
      </div>
    </div>
  );
}
