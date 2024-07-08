import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setConter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setConter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
  const iRunOnlyOnce = () => {
    console.log('I run only once');
  };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log('I run when keyword changes', keyword);
    }
    
  }, [keyword]);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log('I run when keyword changes', keyword);
    }
    
  }, [keyword]);
  return (
    <div className="App">
      <input
       type="text" 
       placeholder='Search here...'
       value={keyword}
       onChange={onChange}
       />
      <p>Counter: {counter}</p>
      <button onClick={onClick}>Click Me</button>
      {/* <Button text="Click Me!" on /> */}
    </div>
  );
}

export default App;
