import React, { useState } from "react";
import CComponent from "./components/context/CComponent";
import FComponent from "./components/context/FComponent";

function Main() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Main Component</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <CComponent counter={counter} />
      <hr />
      <FComponent counter={counter} />
    </div>
  );
}
export default Main;
