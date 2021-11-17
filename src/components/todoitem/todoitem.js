import React from "react";
import { Tooltip, Tag, List, Button, Popconfirm, Switch, Space } from "antd";
import "./todoitem.css";
const Todoitem = ({ name, isDone, handleDelete, handleSwitch }) => {
  return (
    <Space>
      <Tag color={isDone ? "green" : "red"} className="todo-tag">
        {name}
      </Tag>
      <Switch checked={isDone} onClick={handleSwitch} />
      <Button type="danger" onClick={handleDelete}>
        X
      </Button>
      <hr />
    </Space>
  );
};

export default Todoitem;
