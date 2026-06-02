import "./Card.css";

const TransactionCard = ({ title, date, amount }) => {
  return (
    <div className="transaction-card">

      <div>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>

      <h1 className={amount > 0 ? "green" : "red"}>
        {amount > 0 ? "+" : ""} ₹{amount}
      </h1>

    </div>
  );
};

export default TransactionCard;