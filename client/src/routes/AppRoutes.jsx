import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useAuth } from "../context/AuthContext";
import Deposit from "../pages/Deposit/Deposit";
import Withdraw from "../pages/Withdraw/Withdraw";
import Transfer from "../pages/Transfer/Transfer";
import Statement from "../pages/Statement/Statement";
import Profile from "../pages/Profile/Profile";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Users from "../pages/Admin/Users";
import Transactions from "../pages/Admin/Transactions";


// Protected Route (inside same file)
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
        <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/transfer" element={<Transfer />} />
     <Route path="/statement" element={<Statement />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/admin" element={<AdminDashboard />} />

<Route path="/admin/users" element={<Users />} />

<Route path="/admin/transactions" element={<Transactions />} />
     

      {/* IMPORTANT FLOW FIXED 👇 */}
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default AppRoutes;