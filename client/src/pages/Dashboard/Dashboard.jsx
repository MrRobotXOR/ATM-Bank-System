import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../../components/Sidebar/Sidebar";
import BalanceCard from "../../components/Card/BalanceCard";
import TransactionCard from "../../components/Card/TransactionCard";
import "../../components/Card/Card.css";

import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {

  const [transactions, setTransactions] = useState([]);
  const [profile, setProfile] = useState(null);

  const { logout } = useAuth();

  const navigate = useNavigate();

  /* FETCH DATA */

  useEffect(() => {

    /* PROFILE */

    const fetchProfile = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProfile(res.data);

      } catch (error) {

        console.log(
          "Profile fetch error:",
          error
        );

      }

    };

    /* TRANSACTIONS */

    const fetchTransactions = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/transaction/history",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setTransactions(res.data);

      } catch (error) {

        console.log(
          "Transaction fetch error:",
          error
        );

      }

    };

    fetchProfile();

    fetchTransactions();

  }, []);

  return (

    <div className="user-dashboard">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <div className="user-main-content">

        {/* TOP NAVBAR */}

        <div className="top-navbar">

          <div>

            <h1>
              Welcome Back 👋 {profile?.name}
            </h1>

            <p>
              Manage your banking activities
            </p>

          </div>

          <div className="navbar-right">

            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
            />

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>

          </div>

        </div>

        {/* BALANCE CARD */}

        <BalanceCard
          balance={profile?.balance || 0}
        />

        {/* ACTIONS */}

        <div className="actions">

          <div
            className="action-card"
            onClick={() => navigate("/deposit")}
          >
            💰 Deposit
          </div>

          <div
            className="action-card"
            onClick={() => navigate("/withdraw")}
          >
            💸 Withdraw
          </div>

          <div
            className="action-card"
            onClick={() => navigate("/transfer")}
          >
            🔁 Transfer
          </div>

        </div>

        {/* TRANSACTIONS */}

        <div className="transactions">

          <h2>
            Recent Transactions
          </h2>

          {

            transactions
              .slice(0, 5)
              .map((tx) => (

                <TransactionCard
                  key={tx.id}
                  title={tx.type}
                  date={
                    new Date(
                      tx.created_at
                    ).toLocaleDateString()
                  }
                  amount={
                    tx.type === "withdraw"
                      ? -tx.amount
                      : tx.amount
                  }
                />

              ))

          }

        </div>

      </div>

    </div>

  );

};

export default Dashboard;