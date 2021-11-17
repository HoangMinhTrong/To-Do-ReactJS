import React from "react";
import { List, Col, Space } from "antd";
import Todoitem from "../todoitem/todoitem";

const Todolist = ({ listItem, handleDelete, handleSwitch }) => {
  return (
    <div>
      <Col>
        <List
          size="small"
          header={<h1>Todo Item</h1>}
          bordered
          locale={{ emptyText: "There's nothing to do :(" }}
        >
          <Space direction="vertical">
            {listItem.map((item) => {
              return (
                <Todoitem
                  name={item.name}
                  isDone={item.isDone}
                  handleDelete={() => handleDelete(item.name)}
                  handleSwitch={() => handleSwitch(item.name)}
                />
              );
            })}
          </Space>
        </List>
      </Col>
    </div>
  );
};

export default Todolist;
