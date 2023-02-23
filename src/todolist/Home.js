import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Home() {
  const [input, setInputValue] = useState("");
  const [listitem, Setlistitem] = useState([]);
  function handler(e) {
    setInputValue(e.target.value);
    // console.log(input)
  }
  function handlesubmit(e) {
    e.preventDefault();
    // console.log(input);
    Setlistitem([...listitem, input]);
    setInputValue("");
  }

  function Delete(item) {
    Setlistitem(
      listitem.filter((item) => {
        return item !== item;
      })
    );
  }

  console.log(listitem);

  //In react, events are implicitly passed to event handlers.

  return (
    <>
      <h1>My To Do List</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter Your Friends Name"
          value={input}
          onChange={handler}
        ></input>
        <button type="submit">Click tap</button>
      </form>
      <ul>
        {listitem.map((element, mahendra) => {
          return (
            <li key={mahendra}>
              {element}{<DeleteIcon onClick = {()=> Delete(element)}/>}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;