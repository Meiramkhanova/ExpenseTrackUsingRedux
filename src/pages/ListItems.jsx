import { useEffect, useState } from "react";
import Expense from "../components/Expense";
import { useNavigate } from "react-router-dom";

export default function ListItems() {
  const [editingItemId, setEditingItemId] = useState(null);
  const [data, setData] = useState([]);
  const navigateTo = useNavigate();

  const handleClickBack = () => {
    navigateTo("/");
  };

  useEffect(() => {
    let list = sessionStorage.getItem("list");
    if (!list) {
      list = [];
    } else {
      list = JSON.parse(list);
    }
    setData(list);
  }, []);

  const onDelete = (id) => {
    setData((prevList) => {
      const updatedList = prevList.filter((expense) => expense.id !== id);
      sessionStorage.setItem("list", JSON.stringify(updatedList));
      return updatedList;
    });
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
    setData((prevList) => {
      const updatedList = prevList.map((expense) =>
        expense.id === id
          ? {
              ...expense,
              name: editedName,
              amount: editedAmount,
              date: editedDate,
            }
          : expense
      );
      sessionStorage.setItem("list", JSON.stringify(updatedList));
      return updatedList;
    });
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
