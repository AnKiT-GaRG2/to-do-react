import {useState} from "react";
import { RiAddLargeFill } from "react-icons/ri";
function AddTODO({onNewItem}){
  const [todoName,  setTodoName] = useState();
  const [dueDate,  setDueDate] = useState();
  const handleNameChange =(event)=>{
    console.log(event.target.value);
    setTodoName(event.target.value);
  }
  const handleDateChange =(event)=>{
    console.log(event.target.value)
    setDueDate(event.target.value);
  }
  const handleAddButtonClicked =()=>{
    onNewItem(todoName,dueDate)
    setDueDate("");
    setTodoName("");
  }

  return (
    <div className='container text-center'>
      <div className='row kg-row'>
      <div className='col-6'>
        <input type="text" value={todoName} placeholder="Enter Text Here" onChange={handleNameChange}/>
      </div>
      <div className='col-4'>
        <input type='date' value={dueDate} onChange={handleDateChange}/>
      </div>
      <div className='col-2'>
        <button type="button" className='btn btn-success kg-button' onClick={handleAddButtonClicked}><RiAddLargeFill /> </button>
      </div>
    </div>
    </div>
  );
}
export default AddTODO;