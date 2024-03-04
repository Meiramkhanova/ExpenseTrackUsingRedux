import styled from "styled-components";
import EditForm from "./EditForm";

export default function Expense(props) {
  const handleDelete = () => {
    props.onDelete(props.expense.id);
  };

  const handleEdit = () => {
    props.onEdit(props.expense.id);
  };

  const handleCancelEdit = () => {
    props.onCancelEdit();
  };

  return (
    <tr>
      <td>{props.expense.name}</td>
      <td>{props.expense.amount}</td>
      <td>{props.expense.date}</td>
      <td style={{ width: "12%" }}>
        {props.isEditing ? (
          <EditForm
            expense={props.expense}
            onSaveEdit={props.onSaveEdit}
            onCancelEdit={handleCancelEdit}
          />
        ) : (
          <Wrapper>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={handleEdit}>Edit</Button>
          </Wrapper>
        )}
      </td>
    </tr>
  );
}

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 80%;
  /* gap: 35px; */
`;

const Button = styled("Button")`
  background-color: #ea580c;
  padding: 7px;
  font-size: 15px;
  border: none;
  border-radius: 12px;
`;
