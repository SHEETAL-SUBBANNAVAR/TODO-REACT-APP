import Todoitem from "./Todoitem";
import styles from "./TodoItems.module.css";

const ToDoItems = ({ todoItems }) => {
  return (
  
     <div className={styles.itemsContainer}>{todoItems.map((item, index) => (
        <Todoitem
          map={index}
          todoName={item.name}
          todoDate={item.dueDate}
       
         />
      ))}
    </div>
    
  );
};
export default ToDoItems;
