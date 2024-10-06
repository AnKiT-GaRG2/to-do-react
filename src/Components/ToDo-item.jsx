import { MdDelete } from "react-icons/md";
function ToDoitem({ToDoName,ToDoDate, onDeleteClick}){
  return (
  <div className='container'>
  <div className='row kg-row'>
    <div className='col-6'>
      {ToDoName}
    </div>
    <div className='col-4'>
      {ToDoDate}
    </div>
    <div className='col-2'>
      <button type="button"   className='btn btn-danger' onClick={()=> onDeleteClick(ToDoName)}><MdDelete /></button>
   </div>
</div>
</div>
  );
}
export default ToDoitem;