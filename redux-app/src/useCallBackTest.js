import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

function CallBackTest() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
    const addTodo = useCallback(() => {
      setTodo((t) => [...t, "New Todo"]);
    }, [todo]);

  // const addTodo = () => {
  //   setTodo((t) => [...t, "newTodo"]);
  // };
  return (
    <>
      <Todos todos={todo} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
export default CallBackTest;
