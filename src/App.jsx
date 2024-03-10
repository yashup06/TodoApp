import Addtodo from "./components/Addtodo";
import Appname from "./components/Appname";
import "./App.css";
import Todoitems from "./components/Todoitems";
import { useState } from "react";
import Welcomemessage from "./components/Welcomemessage";

function App() {
  


const [todoitems,settodoitems] = useState([]);

const handlenewitem = (itemname,itemduedate) => {
  
  const newtodoitems = [ ...todoitems,{
    name : itemname, duedate : itemduedate
  },];
  settodoitems(newtodoitems);
}

const handledeleteitem = (todoitemname) => {
  const newtodoitems = todoitems.filter((item) => item.name!= todoitemname);
  settodoitems(newtodoitems);
}

  return <center className='todo-container'>
    <Appname></Appname>
    <Addtodo onnewitem={handlenewitem}></Addtodo>
    <Todoitems todoitems={todoitems} ondeleteclick={handledeleteitem
    }></Todoitems>
     <Welcomemessage todoitems={todoitems}></Welcomemessage>
    
   
   
  </center>
}

export default App
