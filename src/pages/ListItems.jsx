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

  return (
    <div>
      {data.map((expense) => (
        <Expense expense={expense} />
      ))}
    </div>
  );
}
