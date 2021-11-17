import React, { useState } from "react";
import "./App.css";
import Todo from "./components/todo/todo";
import Todolist from "./components/todolist/todolist";
import "./antd/dist/antd.css";
import { Layout } from "antd";
import { data } from "./data";

function App() {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItem] = useState(data);

  const handleText = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setListItem([...listItems, { name: inputText, isDone: false }]);
    setInputText("");
  };

  const handleDelete = (name) => {
    const filterArr = listItems.filter((item) => item.name !== name);
    setListItem([...filterArr]);
  };

  const handleSwitch = (name) => {
    const filterItem = listItems.filter((item) => item.name === name);
    const indexOfItem = listItems.indexOf(filterItem[0]);
    const replaceItem = {
      name: filterItem[0].name,
      isDone: !filterItem[0].isDone,
    };

    const replaceList = [...listItems];
    replaceList.splice(indexOfItem, 1, replaceItem);
    setListItem(replaceList);
  };

  return (
    <div className="App">
      <Layout.Header>
        <h1 style={{ color: "white" }}>Todo App</h1>
      </Layout.Header>
      <Layout.Content>
        <Todo addTodo={addTodo} handleText={handleText} inputText={inputText} />
        <Todolist
          listItem={listItems}
          handleDelete={handleDelete}
          handleSwitch={handleSwitch}
        />
      </Layout.Content>
    </div>
  );
}
export default App;
