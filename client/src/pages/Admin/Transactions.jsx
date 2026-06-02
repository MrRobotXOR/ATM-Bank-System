import "./Admin.css";

import Sidebar from "../../components/Sidebar/Sidebar";

import { useEffect, useState } from "react";

import axios from "axios";

const Transactions = () => {

  const [transactions, setTransactions] =
    useState([]);




  useEffect(() => {

    const fetchTransactions = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const res = await axios.get(

          "http://localhost:5000/api/admin/transactions",

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

    <div className="admin-dashboard">

      <Sidebar />



      <div className="admin-content">

        <div className="admin-top">

          <div>

            <h1>
              Transactions 💳
            </h1>

            <p>
              Track all banking activities
            </p>

          </div>

        </div>




        <div className="admin-table">

          <table>

            <thead>

              <tr>

                <th>User</th>

                <th>Account</th>

                <th>Transaction</th>

                <th>Amount</th>

                <th>Date</th>

              </tr>

            </thead>





            <tbody>

              {

                transactions.map((tx) => (

                  <tr key={tx.id}>

                    <td>
                      {tx.name}
                    </td>

                    <td>
                      {tx.account}
                    </td>

                    <td>
                      {tx.type}
                    </td>

                    <td
                      className={
                        tx.type === "withdraw"
                          ? "red"
                          : "green"
                      }
                    >

                      {
                        tx.type === "withdraw"
                          ? "-"
                          : "+"
                      }

                      ₹{tx.amount}

                    </td>

                    <td>

                      {
                        new Date(
                          tx.created_at
                        ).toLocaleDateString()
                      }

                    </td>

                  </tr>
                ))
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Transactions;