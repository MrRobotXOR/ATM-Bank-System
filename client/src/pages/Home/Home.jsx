import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  return (

    <div className="home">

      <Navbar />

      <section className="hero">

        <div className="hero-left">

          <p className="tag">
            Smart Digital Banking
          </p>

          <h1>
            Modern Web-Based
            <span> ATM Banking </span>
            Experiences
          </h1>

          <p className="desc">
            Secure, powerful and next-generation online
            banking system with modern UI and seamless
            transaction experience.
          </p>

          <div className="hero-buttons">

            <button
           className="primary-btn"
            onClick={() => navigate("/register")}
            >
            Open Account
            </button>

            <button className="secondary-btn">
              Explore More
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="atm-card">

            <div className="card-top">

              <h3>ATM Bank</h3>

              <p>Premium</p>

            </div>

            <div className="chip"></div>

            <h1>₹ 2,45,000</h1>

            <div className="card-bottom">

              <p>**** **** **** 4589</p>

              <p>12/28</p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;