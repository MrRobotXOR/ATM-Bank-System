import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";

import "./Withdraw.css";

const Withdraw = () => {

  const [amount, setAmount] = useState("");



  // 💸 WITHDRAW FUNCTION
  const handleWithdraw = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.post(

        "http://localhost:5000/api/transaction/withdraw",

        {
          amount: Number(amount),
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
        || "Withdraw Failed"
      );
    }
  };



  return (

    <div className="withdraw-dashboard">

      <Sidebar />



      <div className="withdraw-content">

        <div className="withdraw-top">

          <div>

            <h1>
              Withdraw Money 💸
            </h1>

            <p>
              Securely withdraw money
            </p>

          </div>

        </div>



        <div className="withdraw-box">

          <h2>
            Enter Withdraw Amount
          </h2>

          <form onSubmit={handleWithdraw}>

            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
              placeholder="₹ Enter amount"
            />

            <button type="submit">
              Withdraw Now
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Withdraw;