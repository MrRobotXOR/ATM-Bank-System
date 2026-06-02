import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../../components/Sidebar/Sidebar";

import "./Statement.css";

const Statement = () => {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

    const fetchTransactions = async () => {

      try {

        const token = localStorage.getItem("token");

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

        console.log(error);

      }
    };

    fetchTransactions();

  }, []);

  return (

    <div className="statement-dashboard">

      <Sidebar />

      <div className="statement-content">

        <h1>Transaction History 📄</h1>

        <div className="statement-box">

          {transactions.map((tx) => (

            <div className="statement-card" key={tx.id}>

              <div>

                <h3>{tx.type}</h3>

                <p>
                  {new Date(tx.created_at).toLocaleDateString()}
                </p>

              </div>

              <h2
                className={
                  tx.type === "withdraw"
                    ? "red"
                    : "green"
                }
              >

                {tx.type === "withdraw" ? "-" : "+"}

                ₹{tx.amount}

              </h2>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Statement;