import AppName from "./component/AppName";
import AddTodo from "./component/AddToDo";
import Todoitem1 from "./component/Todoitem1";
import Todoitem2 from "./component/Todoitem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName/>    
      <AddTodo/> 
      <div className="items-container">
        <Todoitem1/>
        <Todoitem2/>
      </div>           
     
    </center>
  );
}

export default App;
