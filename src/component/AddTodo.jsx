import { useState, useRef } from "react";
import { MdAddComment } from "react-icons/md";
import { useContext } from "react";
import { TodoItmscontext } from "../../store/todo-items-store";

function AddTodo() {

  const todonameElement = useRef();
  const duedateElement = useRef();
  const { addNewItem } = useContext(TodoItmscontext);



  const handelAddButtonClicked = () => {
    const todoname = todonameElement.current.value;
    const duedate = duedateElement.current.value;

    todonameElement.current.value = "";
    duedateElement.current.value = "";
    addNewItem(todoname, duedate)

    console.log(todoname);

  }


  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="Text" placeholder="Enter Todo Here" ref={todonameElement} />
        </div>
        <div className="col-4">
          <input type="date" min={new Date().toISOString().split("T")[0]} ref={duedateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handelAddButtonClicked}>
            <MdAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
