import React from 'react'
import './todo.css'
import {Button, Form, Row, Col, Input} from 'antd'

const Todo = ({inputText, setInputText}) => {
    //Function
    const inputTextHandler = (e) => 
    {
        setInputText(e.target.value)
    }
  return (
      <div>
      <Form className="todo-form" layout="horizontal" >
          <Row gutter={20}>
                <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                    <Form.Item onChange={inputTextHandler} name={'name'} rules={[{ required: true, message: 'This field is required' }]}>
                    <Input placeholder="What needs to be done?" />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                    <Button type ="primary" htmlType="submit" block>
                        Add todo
                    </Button>
                </Col>
          </Row>
      </Form>
        
      </div>
  )
}

export default Todo
