
import React, { useState } from "react";



const App = () => {

  const [userInput, setUserInput] = useState(" ");
  const [todos, setTodo] = useState([])

  const addData = () => {
    setTodo([...todos, userInput]);
  }
  return <div>
    <h1>ToDo List</h1>
    <input onChange={(event) => setUserInput([event.target.value])} type="text"></input>
    <button onClick={() => addData()}>Add</button>
    <button>Delete</button>
    <uL>
      {
        todos.map((todo, index) => <li key={index}>{todo}</li>)
      }
    </uL>
  </div>
}



export default App;