import "./Admin.css";

import Sidebar from "../../components/Sidebar/Sidebar";

import { useEffect, useState } from "react";

import axios from "axios";

const AdminDashboard = () => {

  const [stats, setStats] = useState({

    totalUsers: 0,

    totalTransactions: 0,

    totalBalance: 0,

    recent: [],

  });



  useEffect(() => {

    const fetchStats = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const res = await axios.get(

          "http://localhost:5000/api/admin/stats",

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStats(res.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchStats();

  }, []);




  return (

    <div className="admin-dashboard">

      <Sidebar />



      <div className="admin-content">

        {/* TOP */}

        <div className="admin-top">

          <div>

            <h1>
              Admin Dashboard 👑
            </h1>

            <p>
              Monitor banking system activities
            </p>

          </div>

        </div>



        {/* STATS */}

        <div className="admin-stats">

          <div className="admin-card">

            <h2>Total Users</h2>

            <h1>
              {stats.totalUsers}
            </h1>

          </div>



          <div className="admin-card">

            <h2>Total Transactions</h2>

            <h1>
              {stats.totalTransactions}
            </h1>

          </div>



          <div className="admin-card">

            <h2>Total Bank Balance</h2>

            <h1>
              ₹ {stats.totalBalance}
            </h1>

          </div>

        </div>



        {/* RECENT ACTIVITIES */}

        <div className="admin-table">

          <h2>
            Recent Activities
          </h2>

          <table>

            <thead>

              <tr>

                <th>User</th>

                <th>Activity</th>

                <th>Amount</th>

                <th>Date</th>

              </tr>

            </thead>
<tbody>
  {(stats.recent || []).map((tx, index) => (
    <tr key={index}>
      <td>{tx.name}</td>
      <td>{tx.type}</td>
      <td>₹{tx.amount}</td>
      <td>
        {new Date(tx.created_at).toLocaleDateString()}
      </td>
    </tr>
    
  ))}
  
</tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;