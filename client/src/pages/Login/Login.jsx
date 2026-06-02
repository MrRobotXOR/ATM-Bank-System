import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        account,
        password,
        role,
      });

      login(res.data.user);
      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-page">

      <div className="login-left">
        <h1>Welcome Back</h1>
        <p>Secure login with backend authentication.</p>
      </div>

      <div className="login-right">

        <div className="login-box">

          <h2>Login</h2>

          <div className="role-select">
            <button
              type="button"
              className={role === "user" ? "active-role" : ""}
              onClick={() => setRole("user")}
            >
              User Login
            </button>

            <button
              type="button"
              className={role === "admin" ? "active-role" : ""}
              onClick={() => setRole("admin")}
            >
              Admin Login 👑
            </button>
          </div>

          <form onSubmit={handleLogin}>

            <input
              type="text"
              placeholder="Account Number"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login Now</button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;