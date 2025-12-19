import React, { useState } from "react";
import { useAuth } from "@/data/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login({ email, password });
      navigate("/"); // Chuyển hướng về trang chủ sau khi đăng nhập thành công
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Khung chứa: max-w-md là đủ rộng cho login vì ít trường hơn */}
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header: Giữ nguyên thiết kế có nút Back */}
        <div className="bg-black px-6 py-4 relative">
          <h2 className="text-2xl font-bold text-white text-center">Login</h2>
        </div>

        {/* Nội dung Form */}
        <div className="p-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
                id="email"
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Mật khẩu */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Nút Đăng nhập */}
            <button
              className="w-full bg-black hover:bg-cyan-700 text-white font-bold py-2.5 px-4 rounded-lg shadow hover:shadow-md transition duration-200 disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Link sang Đăng ký */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?
              <Link
                to="/register"
                className="font-medium text-cyan-600 hover:text-cyan-500 hover:underline ml-1"
              >
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
