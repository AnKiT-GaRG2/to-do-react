import ToDoitem from "./ToDo-item.jsx";
import styles from "./itemContainer.module.css";

const ToDoItems=({todoItems})=>{
return (
  <div className={styles.itemContainer}>
    {todoItems.map(item=><ToDoitem ToDoName={item.name}  ToDoDate={item.duedate}></ToDoitem>)}
     
    </div>
);
}
export default ToDoItems;