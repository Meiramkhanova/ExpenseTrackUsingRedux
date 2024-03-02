import { useEffect, useState } from "react";
import Expense from "../components/Expense";
import { useNavigate } from "react-router-dom";

export default function ListItems() {
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

  return (
    <div>
      {data.map((expense) => (
        <Expense key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
      <button onClick={handleClickBack}>Main Page</button>
      <div>
        <strong>Total Amount:x${totalAmount()}</strong>
      </div>
    </div>
  );
}
