import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  const navigate = useNavigate();
  
  return (
    <nav className="navbar">

      <div className="logo">
        ATM<span>Bank</span>
      </div>

      <div className="nav-links">

        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>

      </div>

       <button
        className="nav-btn"
        onClick={() => navigate("/login")}
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;