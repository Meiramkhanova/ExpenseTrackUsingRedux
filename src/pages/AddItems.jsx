import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddItems() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const navigateTo = useNavigate();

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

    let list = sessionStorage.getItem("list");

    if (!list) {
      list = [];
    } else {
      list = JSON.parse(list);
    }

    list.push({ name, amount, date });
    sessionStorage.setItem("list", JSON.stringify(list));
    navigateTo("/");
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
      <button onClick={onSave}>Send</button>
    </div>
  );
}
