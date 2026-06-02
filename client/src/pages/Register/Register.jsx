import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        account,
        password,
      });

      alert("Account Created Successfully!");
      console.log(res.data);

      navigate("/login");

    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="register-page">

      <div className="register-left">
        <div className="register-box">

          <h2>Create Account</h2>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

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

            <button type="submit">Register Now</button>

          </form>

        </div>
      </div>

      <div className="register-right">
        <h1>Join The Future Of Banking</h1>
       
        <p>
          Create your secure ATM banking account
          and experience next-generation digital transactions.
        </p>

      </div>

    </div>
  );
};

export default Register;