import "./App.css";
import "antd/dist/antd.css";
import Counter from "./components/Counter";
import { Button, Input, Space } from "antd";
import { useDispatch, useSelector, Provider } from "react-redux";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.value);
  const users = useSelector((state) => state.users);

  return (
    <div className="App" style={{ margin: "20px" }}>
      <Space>
        <Counter></Counter>
        <Input placeholder="basic usage" value={count}></Input>
      </Space>
      <p>{JSON.stringify(users.map((x) => x.name))}</p>
    </div>
  );
}

export default App;
