export default function Expense(props) {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <h1> Name: {props.expense.name}</h1>
      <h1> Amount: {props.expense.amount}</h1>
      <h1> Date: {props.expense.date}</h1>
    </div>
  );
}
