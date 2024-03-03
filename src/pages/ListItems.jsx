import { useState } from "react";
import Expense from "../components/Expense";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "../redux/actions";

export default function ListItems() {
  const [editingItemId, setEditingItemId] = useState(null);
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items.list);
  const navigateTo = useNavigate();
  const handleClickBack = () => {
    navigateTo("/");
  };

  const onDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const totalAmount = () => {
    return data.reduce((acc, current) => acc + parseFloat(current.amount), 0);
  };

  const handleEdit = (id) => {
    setEditingItemId(id);
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
  };

  const onSaveEdit = (id, editedName, editedAmount, editedDate) => {
    dispatch(editItem(id, editedName, editedAmount, editedDate));
    setEditingItemId(null);
  };

  return (
    <div>
      {data.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
          onSaveEdit={onSaveEdit}
          isEditing={editingItemId === expense.id}
          onEdit={handleEdit}
          onCancelEdit={handleCancelEdit}
        />
      ))}
      <button onClick={handleClickBack}>Main Page</button>
      <div>
        <strong>Total Amount: ${totalAmount()}</strong>
      </div>
    </div>
  );
}
