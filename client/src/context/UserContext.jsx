import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  // load saved data
  useEffect(() => {
    const savedBalance = localStorage.getItem("balance");
    const savedTx = localStorage.getItem("transactions");

    if (savedBalance) setBalance(JSON.parse(savedBalance));
    if (savedTx) setTransactions(JSON.parse(savedTx));
  }, []);

  // save data
  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [balance, transactions]);

  return (
    <UserContext.Provider
      value={{ balance, setBalance, transactions, setTransactions }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useBank = () => useContext(UserContext);