import { useState, useEffect } from 'react';

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    };
    setTodo("");
    setTodos((currentArray) => [...currentArray, toDo]);
  }
  // console.log(toDos)
  return (
    <div>
      <h1>ToDo List {toDos.length}</h1>
      <form onSubmit={onSubmit}>  
        <input onChange={onChange} value={toDo} type='text' placeholder=''/>
        <button type='submit'>Add</button>
      </form>
      <hr />
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </div>
  )
}

export default App;
