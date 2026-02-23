import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import ToDoItems from "./component/ToDoItems";

import Wellcome from "./component/Wellcome";
import "./App.css";
import Container from "./component/Container";
import { useState } from "react";
import { TodoItmscontext } from "../store/todo-items-store";

function App() {

  const initialtodoItems = [


  ];

  const [todoItems, setTodoItems] = useState(initialtodoItems);

  const handleDeleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
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
    <TodoItmscontext.Provider
      value={[]}
    >
      <Container>
        <center className="todo-container">
          <AppName />
          <AddTodo onNewItem={handleNewItem} />
          <Wellcome></Wellcome>

          <ToDoItems onDeleteClick={handleDeleteItem}></ToDoItems>

        </center>
      </Container>
    </TodoItmscontext.Provider >

  );
}

export default App;
