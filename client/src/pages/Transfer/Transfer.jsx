import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Transfer.css";

const Transfer = () => {

  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = (e) => {

    e.preventDefault();

    alert("Money Transferred Successfully!");
  };

  return (

    <div className="transfer-dashboard">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}

      <div className="transfer-content">

        {/* TOP */}

        <div className="transfer-top">

          <div>
            <h1>Transfer Money 🔁</h1>

            <p>
              Send money securely to another account
            </p>
          </div>

        </div>

        {/* CARD */}

        <div className="transfer-box">

          <h2>Transfer Details</h2>

          <form onSubmit={handleTransfer}>

            <input
              type="text"
              placeholder="Receiver Account Number"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />

            <input
              type="number"
              placeholder="₹ Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button type="submit">
              Transfer Now
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Transfer;