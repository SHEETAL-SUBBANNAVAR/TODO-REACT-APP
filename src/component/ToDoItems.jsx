import Todoitem from "./Todoitem";
import styles from "./TodoItems.module.css";

const ToDoItems = ({ todoItems, onDeleteClick }) => {
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
