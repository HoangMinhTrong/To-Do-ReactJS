import React, {useState} from 'react';
import './App.css';
import Todo from './components/todo/todo';
import Todolist from './components/todolist/todolist';
import './antd/dist/antd.css'

function App ()  {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      	<Todo inputText={inputText} setInputText={setInputText} />
        <Todolist />
    </div>
  )
};
export default App