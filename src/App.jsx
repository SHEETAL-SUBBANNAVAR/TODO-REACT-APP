import AppName from "./component/AppName";
import AddTodo from "./component/AddToDo";
import ToDoItems from "./component/ToDoItems";
import "./App.css";

function App() {
    const todoItems=[{
    name:"Buy milk",
    dueDate:"04/09/2025",
  },
{
  name:"go to college",
    dueDate:"04/09/2025",
},
{
  name:"drink milk",
    dueDate:"04/09/2025",
}, 
];
  return (
    <center className="todo-container">
      <AppName/>    
      <AddTodo/> 
      <ToDoItems todoItems={todoItems}></ToDoItems>
                 
     
    </center>
  );
}

export default App;
