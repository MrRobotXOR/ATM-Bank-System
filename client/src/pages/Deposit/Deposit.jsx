import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";

import "./Deposit.css";

const Deposit = () => {

  const [amount, setAmount] = useState("");



  // 💰 DEPOSIT FUNCTION
  const handleDeposit = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.post(

        "http://localhost:5000/api/transaction/deposit",

        {
          amount,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      setAmount("");

    } catch (error) {

      alert(
        error.response?.data?.message
        || "Deposit Failed"
      );
    }
  };



  return (

    <div className="deposit-dashboard">

      {/* SIDEBAR */}
      <Sidebar />



      {/* MAIN CONTENT */}
      <div className="deposit-content">

        <div className="deposit-top">

          <div>

            <h1>
              Deposit Money 💰
            </h1>

            <p>
              Securely add money into your bank account
            </p>

          </div>

        </div>



        {/* CARD */}
        <div className="deposit-box">

          <h2>
            Enter Deposit Amount
          </h2>

          <form onSubmit={handleDeposit}>

            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
              placeholder="₹ Enter amount"
            />

            <button type="submit">
              Deposit Now
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Deposit;