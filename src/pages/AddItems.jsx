import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

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

    // let list = sessionStorage.getItem("list");

    // if (!list) {
    //   list = [];
    // } else {
    //   list = JSON.parse(list);
    // }

    // list.push({ id: uuidv4(), name, amount, date });
    // sessionStorage.setItem("list", JSON.stringify(list));

    setName("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <input onChange={handleNameChange} type="text" name="name" value={name} />
      <input
        onChange={handleAmountChange}
        type="text"
        name="amount"
        value={amount}
      />
      <input onChange={handleDateChange} type="date" name="date" value={date} />
      <button onClick={onSave}>Save</button>
      <button onClick={handleClickBack}>Main Page</button>
      <button onClick={handleClicktoList}>See List</button>
    </div>
  );
}
