import "./Admin.css";

import Sidebar from "../../components/Sidebar/Sidebar";

import { useEffect, useState } from "react";

import axios from "axios";

const Users = () => {

  const [users, setUsers] = useState([]);




  // 👥 FETCH USERS
  const fetchUsers = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const res = await axios.get(

        "http://localhost:5000/api/admin/users",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(res.data);

    } catch (error) {

      console.log(error);

    }
  };




  // ❌ DELETE USER
  const deleteUser = async (id) => {

    try {

      const token =
        localStorage.getItem("token");

     await axios.delete(
  `http://localhost:5000/api/admin/user/${id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      alert("User Deleted");

      fetchUsers();

    } catch (error) {

      console.log(error);

    }
  };




  useEffect(() => {

    fetchUsers();

  }, []);




  return (

    <div className="admin-dashboard">

      <Sidebar />

      <div className="admin-content">

        <div className="admin-top">

          <div>

            <h1>
              Users Management 👥
            </h1>

            <p>
              All registered banking users
            </p>

          </div>

        </div>




        <div className="admin-table">

          <table>

            <thead>

              <tr>

                <th>Name</th>

                <th>Email</th>

                <th>Account</th>

                <th>Role</th>

                <th>Balance</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {

                users.map((user) => (

                  <tr key={user.id}>

                    <td>
                      {user.name}
                    </td>

                    <td>
                      {user.email}
                    </td>

                    <td>
                      {user.account}
                    </td>

                    <td>
                      {user.role}
                    </td>

                    <td>
                      ₹{user.balance}
                    </td>

                    <td>

                      {

                        user.role !== "admin" && (

                          <button
                            className="delete-btn"

                            onClick={() =>
                              deleteUser(user.id)
                            }
                          >
                            Delete
                          </button>

                        )

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

export default Users;