import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/slices/slice";

export default function Items() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.adder.list_items);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  return (
    <div>
      {items.map((item) => {
        return <h3 key={item.id}>{item.title}</h3>;
      })}
    </div>
  );
}
