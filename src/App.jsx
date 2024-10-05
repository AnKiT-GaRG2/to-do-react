import AppName from "./Components/AppName.jsx";
import AddTODO from "./Components/AddTODO.jsx";
import "./App.css";

import ToDoItems from "./Components/ToDoItems.jsx";
function App() {
  const todoItems=[
    {
      name:"Buy Milk",
      dueDate:"4/6/24"
    },
    {
      name:"Buy Milk",
      dueDate:"4/6/24"
    },
    {
      name:"Buy Milk",
      dueDate:"4/6/24"
  },
];

  


  return <center className='todo-container'>
    <AppName/>
    <AddTODO/>
   <ToDoItems todoItems={todoItems}></ToDoItems>
    
  </center>
  
}

export default App
