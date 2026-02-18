import { useState } from "react";

function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handelNameChange = (event) => {
    setTodoName(event.target.value);
  }
  const handelDateChange = (event) => {
    setDueDate(event.target.value);

  }
  const handelAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");

  }
  const today = new Date().toISOString().split("T")[0];


  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="Text" placeholder="Enter Todo Here" value={todoName} onChange={handelNameChange} />
        </div>
        <div className="col-4">
          <input type="date" min={today} value={dueDate} onChange={handelDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handelAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
