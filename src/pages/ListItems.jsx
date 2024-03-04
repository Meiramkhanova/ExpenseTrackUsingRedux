import { useState } from "react";
import Expense from "../components/Expense";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "../redux/actions";
import styled from "styled-components";

export default function ListItems() {
  const [editingItemId, setEditingItemId] = useState(null);
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items.list);
  const navigateTo = useNavigate();
  const handleClickMainPage = () => {
    navigateTo("/");
  };

  const handleClickToAddPage = () => {
    navigateTo("/add");
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
    <Wrapper>
      <h1 style={{ textAlign: "center" }}>List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <WrapperOfButtons>
        <Button onClick={handleClickMainPage}>Main Page</Button>
        <Button onClick={handleClickToAddPage}>Add</Button>
      </WrapperOfButtons>
      <div>
        <h1>Total Amount: ${totalAmount()}</h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Button = styled("button")`
  margin-top: 50px;
  padding: 15px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
  background-color: #ea580c;
`;

const WrapperOfButtons = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
