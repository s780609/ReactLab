import React from "react";
import { Button, Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from './reducer';

const Counter = () => {
  const dispatch = useDispatch();

  function handleClickIncrement() {
    dispatch({
      type: "increment",
    });
  }

  function handleClickDecrement() {
    dispatch({
      type: "decrement",
    });
  }

  return (
    <>
      <Space>
        <Button type="primary" onClick={handleClickIncrement}>
          Increment
        </Button>
        <Button type="primary" onClick={handleClickDecrement}>
          Decrement
        </Button>
        <Button type="primary" onClick={ () => dispatch(fetchUsers())}>
          Async
        </Button>
      </Space>
    </>
  );
};

export default Counter;
