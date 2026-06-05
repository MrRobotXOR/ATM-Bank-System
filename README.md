# 🏦 Bank Management System

A modern full-stack Bank Management System built with React.js, Vite, Node.js, Express.js, and MySQL. This application provides secure banking operations including user authentication, account management, deposits, withdrawals, transaction tracking, and an admin dashboard for managing users and system activities.

![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![MySQL](https://img.shields.io/badge/Database-MySQL-orange)
![JWT](https://img.shields.io/badge/Auth-JWT-red)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

# ✨ Features

### 👤 User Features

* Secure User Registration & Login
* JWT Authentication & Authorization
* Personal Dashboard
* View Account Information
* Deposit Money
* Withdraw Money
* Check Current Balance
* Transaction History
* Responsive User Interface

### 🛡️ Admin Features

* Admin Login
* Manage Users
* View All Accounts
* Monitor Transactions
* Delete User Accounts
* Dashboard Analytics

### 🔒 Security Features

* JWT Token Authentication
* Password Hashing with bcrypt
* Protected Routes
* Role-Based Access Control
* Secure API Communication
* Input Validation

---

# 🛠 Tech Stack

| Layer           | Technology          |
| --------------- | ------------------- |
| Frontend        | React.js, Vite      |
| Styling         | CSS3, Tailwind CSS  |
| Routing         | React Router DOM    |
| API Calls       | Axios               |
| Backend         | Node.js, Express.js |
| Database        | MySQL               |
| Authentication  | JWT, bcrypt         |
| Version Control | Git & GitHub        |

---

# 📁 Project Structure

```text
bank-management-system/
│
├── cl/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── transactionController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── transactionRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/bank-management-system.git
cd bank-management-system
```

## 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## 3. Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```text
http://localhost:5000
```

---

# ⚙️ Environment Variables

Create a `.env` file inside backend folder:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=bank_management

JWT_SECRET=your_secret_key
```

---

# 🔑 API Endpoints

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | /api/auth/register    | Register User       |
| POST   | /api/auth/login       | Login User          |
| GET    | /api/user/profile     | Get User Profile    |
| POST   | /api/account/deposit  | Deposit Money       |
| POST   | /api/account/withdraw | Withdraw Money      |
| GET    | /api/account/balance  | Check Balance       |
| GET    | /api/transactions     | Transaction History |
| GET    | /api/admin/users      | Get All Users       |
| DELETE | /api/admin/user/:id   | Delete User         |

---

# 💰 Banking Operations

### Deposit Money

Users can securely deposit funds into their account.

### Withdraw Money

Users can withdraw available balance with validation.

### Transaction Tracking

Every transaction is recorded and displayed in history.

### Balance Management

Real-time balance updates after every transaction.

---

# 📱 Responsive Design

| Device  | Support |
| ------- | ------- |
| Desktop | ✅       |
| Laptop  | ✅       |
| Tablet  | ✅       |
| Mobile  | ✅       |

---

# 🎯 Learning Outcomes

This project helped in learning:

* React.js Fundamentals
* State Management
* REST API Integration
* JWT Authentication
* Backend Development with Express
* MySQL Database Operations
* Full-Stack Application Development
* Secure User Authentication


