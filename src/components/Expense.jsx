export default function Expense(props) {
  const handleDelete = () => {
    props.onDelete(props.expense.id);
  };

  return (
    <div style={{ backgroundColor: "pink" }}>
      <h1> Name: {props.expense.name}</h1>
      <h1> Amount: {props.expense.amount}</h1>
      <h1> Date: {props.expense.date}</h1>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
