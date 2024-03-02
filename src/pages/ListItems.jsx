import { useEffect, useState } from "react";
import Expense from "../components/Expense";

export default function ListItems() {
  const [data, setData] = useState([]);

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

  return (
    <div>
      {data.map((expense) => (
        <Expense key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </div>
  );
}
