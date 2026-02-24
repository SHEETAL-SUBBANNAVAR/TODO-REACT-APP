import { useContext } from "react";
import { TodoItmscontext } from "../../store/todo-items-store";

const Wellcome = ({ }) => {

  const { todoItems } = useContext(TodoItmscontext);


  return (
    todoItems.length === 0 && <p className="p-3 mb-2 bg-dark text-white" > You dont have any tasks ,Enjoy your day </p>

  );
};

export default Wellcome;