import { createContext } from "react";


export const TodoItmscontext = createContext({
  todoItems: [],
  addNewItem: () => { },
  deleteItem: () => { },
});