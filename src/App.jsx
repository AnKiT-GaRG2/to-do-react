import AppName from "./Components/AppName.jsx";
import AddTODO from "./Components/AddTODO.jsx";
import "./App.css";
function App() {


  return <center class='todo-container'>
    <AppName/>
    <AddTODO/>
    <div class='item-container'></div>
  </center>
  
}

export default App
