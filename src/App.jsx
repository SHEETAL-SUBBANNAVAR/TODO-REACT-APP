import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import ToDoItems from "./component/ToDoItems";
import "./App.css";
import Error from "./Error";
import Container from "./component/Container";
import { useState } from "react";

function App() {

  const initialtodoItems = [
    // {
    //   name: "Buy milk",
    //   dueDate: "04/09/2025",
    // },
    // {
    //   name: "go to college",
    //   dueDate: "04/09/2025",
    // },
    // {
    //   name: "drink milk",
    //   dueDate: "04/09/2025",
    // },

  ];

  const [todoItems, setTodoItems] = useState(initialtodoItems);

  const handleDeleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != itemName);
    setTodoItems(newTodoItems);
    console.log(`item was deleted : ${itemName}`);

  }
  const handleNewItem = (itemName, ItemDueDate) => {
    console.log(`new Item added : ${itemName} Date :${ItemDueDate}`);

    const newTodoItems = [...todoItems, { name: itemName, dueDate: ItemDueDate },

    ];

    setTodoItems(newTodoItems);
  }



  return (
    <Container>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <Error />}

        <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></ToDoItems>

      </center>
    </Container>
  );
}

export default App;
