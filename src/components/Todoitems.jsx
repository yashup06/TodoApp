import Todoitem from "./Todoitem";
import css from "./Todoitems.module.css"

const Todoitems = ({todoitems,ondeleteclick}) => {
  return (
  <div className={css.itemsContainer}>
    {todoitems.map((item) => (<Todoitem tododate={item.duedate} todoname={item.name}
    ondeleteclick={ondeleteclick}></Todoitem>))}
  
  
</div>
  );
}

export default Todoitems;