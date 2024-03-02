import { useState } from "react";

export default function EditForm({ expense, onSaveEdit, onCancelEdit }) {
  const [editedName, setEditedName] = useState(expense.name);
  const [editedAmount, setEditedAmount] = useState(expense.amount);
  const [editedDate, setEditedDate] = useState(expense.date);

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setEditedAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setEditedDate(e.target.value);
  };

  const handleClickEdit = () => {
    onSaveEdit(expense.id, editedName, editedAmount, editedDate);
  };

  return (
    <div>
      <input
        onChange={handleNameChange}
        value={editedName}
        type="text"
        name="name"
      />
      <input
        onChange={handleAmountChange}
        value={editedAmount}
        type="text"
        name="amount"
      />
      <input
        onChange={handleDateChange}
        value={editedDate}
        type="date"
        name="date"
      />
      <button onClick={handleClickEdit}>Save</button>
      <button onClick={onCancelEdit}>Cancel</button>
    </div>
  );
}
