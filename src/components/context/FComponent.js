import React from "react";
import ChildFComponent from "./ChildFComponent";

function FComponent({ counter }) {
  return (
    <div>
      <h2>Functional Component</h2>
      <h2>{counter}</h2>
      <hr />
      <ChildFComponent counter={counter} />
    </div>
  );
}

export default FComponent;
