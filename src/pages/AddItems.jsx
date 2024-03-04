import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../redux/actions";
import styled from "styled-components";

export default function AddItems() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const navigateToBack = useNavigate();
  const navigateToList = useNavigate();

  const handleClickBack = () => {
    navigateToBack("/");
  };

  const handleClicktoList = () => {
    navigateToList("/list");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const onSave = () => {
    if (!name || !amount || !date) return;

    dispatch(addItem(name, amount, date));

    setName("");
    setAmount("");
    setDate("");
  };

  return (
    <StyledContainer>
      <h1>Add Form</h1>
      <Input
        onChange={handleNameChange}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
      />
      <Input
        onChange={handleAmountChange}
        type="text"
        name="amount"
        placeholder="Amount"
        value={amount}
      />
      <Input onChange={handleDateChange} type="date" name="date" value={date} />
      <Button onClick={onSave}>Save</Button>
      <Wrapper>
        <Button onClick={handleClickBack}>Main Page</Button>
        <Button onClick={handleClicktoList}>See List</Button>
      </Wrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

const Input = styled("input")`
  box-sizing: border-box;
  padding: 18px;
  width: 60%;
`;

const Button = styled("button")`
  padding: 14px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
  background-color: #a3e635;
`;

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;
