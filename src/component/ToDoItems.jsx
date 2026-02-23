import { useContext } from "react";
import { TodoItmscontext } from "../../store/todo-items-store";
import Todoitem from "./Todoitem";
import styles from "./TodoItems.module.css";

const ToDoItems = ({ onDeleteClick }) => {
  const todoItems = useContext(TodoItmscontext);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <Todoitem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default ToDoItems;
