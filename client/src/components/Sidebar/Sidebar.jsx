import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./Sidebar.css";

import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const { user } = useAuth();



const isActive = (path) =>
  location.pathname.startsWith(path);

  return (

    <div className="sidebar">

      <h2>
        ATM Bank
      </h2>



      <ul>

        {/* 👤 USER SIDEBAR */}

        {

          user?.role === "user" && (

            <>

              <li
                className={
                  isActive("/dashboard")
                    ? "active"
                    : ""
                }

                onClick={() =>
                  navigate("/dashboard")
                }
              >
                Dashboard
              </li>





              <li
                className={
                  isActive("/deposit")
                    ? "active"
                    : ""
                }

                onClick={() =>
                  navigate("/deposit")
                }
              >
                Deposit
              </li>





              <li
                className={
                  isActive("/withdraw")
                    ? "active"
                    : ""
                }

                onClick={() =>
                  navigate("/withdraw")
                }
              >
                Withdraw
              </li>





              <li
                className={
                  isActive("/transfer")
                    ? "active"
                    : ""
                }

                onClick={() =>
                  navigate("/transfer")
                }
              >
                Transfer
              </li>





              <li
                className={
                  isActive("/statement")
                    ? "active"
                    : ""
                }

                onClick={() =>
                  navigate("/statement")
                }
              >
                Transactions
              </li>





              <li
                className={
                  isActive("/profile")
                    ? "active"
                    : ""
                }

                onClick={() =>
                  navigate("/profile")
                }
              >
                Profile
              </li>

            </>

          )

        }




        {/* 👑 ADMIN SIDEBAR */}

        {

          user?.role === "admin" && (

            <>

              <li
                className={
                  isActive("/admin")
                    ? "active"
                    : ""
                }

                onClick={() =>
                  navigate("/admin")
                }
              >
                Admin Dashboard
              </li>





              <li
                className={
                  isActive("/admin/users")
                    ? "active"
                    : ""
                }

                onClick={() =>
                  navigate("/admin/users")
                }
              >
                Users
              </li>





              <li
                className={
                  isActive("/admin/transactions")
                    ? "active"
                    : ""
                }

                onClick={() =>
                  navigate("/admin/transactions")
                }
              >
                Transactions
              </li>

            </>

          )

        }

      </ul>

    </div>
  );
};

export default Sidebar;