import "./Card.css";

const BalanceCard = ({ balance }) => {
  return (
    <div className="balance-card">
      <p>Current Balance</p>
      <h1>₹ {balance}</h1>
      <span>Updated Just Now</span>
    </div>
  );
};

export default BalanceCard;