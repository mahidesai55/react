import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "./home.css";

function Home() {
  const [input, setInputValue] = useState("");
  const [listitem, Setlistitem] = useState([]);
  const [edit, setEdit] = useState(false);
  const [allDone, setDone] = useState([]);


  function handler(e) {
    setInputValue(e.target.value);
    // console.log(input)
  }
  function handlesubmit(e) {
    e.preventDefault();
    if(input.length>0 && edit === false){
      Setlistitem([...listitem, input]);
    setInputValue("");
    }
    else{
      listitem[edit] = input;
      Setlistitem(listitem);
      setInputValue("")
      setEdit(false)
    }
  }

  function Delete(e, item, index) {
    e.preventDefault();
    Setlistitem(
      listitem.filter((element, nikk) => {
        return nikk !== index;
      })
    );
  }
  function Edit(e, item, index){
    e.preventDefault();
    setInputValue(item);
    setEdit(index);
  }
  function Done(e, item, index){
    e.preventDefault();
    setInputValue(item);
    setDone([...allDone , index]);
  }
  // console.log(listitem);

  //In react, events are implicitly passed to event handlers.

  return (
    <>
      <h1>My To Do List</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"  placeholder="Enter Your  Name"  value={input}  onChange={handler}></input>
        <button type="submit">All Ok</button>
      </form>
      <ul>
        {listitem.map((element, mahendra) => {
          return (
            <li key={mahendra}>
              {element}{" "}
              <a href="" onClick={(e) => Delete(e, element, mahendra)}>
                <DeleteIcon />
              </a>
              <a href="" onClick={(e) => Edit(e, element, mahendra)}>
                <EditIcon />
              </a>
              <a href="" onClick={(e) => Done(e, element, mahendra)}>
                <CheckBoxIcon />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;