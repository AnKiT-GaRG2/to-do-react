import AppName from "./Components/AppName.jsx";
import AddTODO from "./Components/AddTODO.jsx";
import "./App.css";

import ToDoItems from "./Components/ToDoItems.jsx";
import {useState} from "react";
import WelcomeMessage from "./Components/WelcomMessage.jsx";
function App() {

  
const [todoItems, setTodoItems]= useState([]);
const handleNewItem= (itemName,itemDueDate)=>{
    console.log(`New Item Added ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [...todoItems,{name: itemName, dueDate:itemDueDate}

    ];
    setTodoItems(newTodoItems);
}
const handleDeleteItem =(todoItemName)=>{
  console.log(`Item deleted: ${todoItemName}`);
  const newToDoItems= todoItems.filter(item=>item.name !== todoItemName);
  setTodoItems(newToDoItems);
};
  return <center className='todo-container'>
    <AppName/>
    <AddTODO onNewItem={handleNewItem}/>
   {todoItems.length == 0 && <WelcomeMessage></WelcomeMessage>}
   <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></ToDoItems>
    
  </center>
  
}

export default App
