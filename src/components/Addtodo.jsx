import { useState } from "react";

function Addtodo({onnewitem}){

 const [todoname,settodoname] = useState('');
 const [duedate,setduedate] = useState('');
 
 const handlenamechange = (event) => {
  settodoname(event.target.value);
 };

 const handldatechange = (event) => {
  setduedate(event.target.value);
 };

 const handleaddbuttonclick = () => {
   onnewitem(todoname,duedate);
   settodoname('');
   setduedate('');
 }

  return (
    <div className="container text-center">
    <div className="row kg-row">
      <div className="col-6">
        <input type="text" placeholder="Enter todo here" value={todoname} onChange={handlenamechange}/>
      </div>
      <div className="col-4">
        <input type="date" value={duedate} onChange={handldatechange}/>
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-success kg-button"
      onClick={handleaddbuttonclick}>ADD</button>
      </div>
    </div>
  </div>
  );
}

export default Addtodo;