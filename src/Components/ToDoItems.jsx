import ToDoitem from "./ToDo-item.jsx";
import styles from "./itemContainer.module.css";

const ToDoItems=({todoItems,onDeleteClick })=>{
return (
  <div className={styles.itemContainer}>
    {todoItems.map(item=><ToDoitem ToDoName={item.name}  ToDoDate={item.dueDate} onDeleteClick={onDeleteClick}></ToDoitem>)}
     
    </div>
);
}
export default ToDoItems;