import EditForm from "./EditForm";

export default function Expense(props) {
  const handleDelete = () => {
    props.onDelete(props.expense.id);
  };

  const handleEdit = () => {
    props.onEdit(props.expense.id);
  };

  const handleCancelEdit = () => {
    props.onCancelEdit();
  };

  return (
    <div style={{ backgroundColor: "pink" }}>
      {props.isEditing ? (
        <EditForm
          expense={props.expense}
          onSaveEdit={props.onSaveEdit}
          onCancelEdit={handleCancelEdit}
        />
      ) : (
        <div>
          <h1> Name: {props.expense.name}</h1>
          <h1> Amount: {props.expense.amount}</h1>
          <h1> Date: {props.expense.date}</h1>

          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
