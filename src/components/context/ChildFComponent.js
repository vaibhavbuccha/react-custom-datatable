import React from "react";

function ChildFComponent({ counter }) {
  return (
    <div>
      <h2>Child Functional Component</h2>
      <h2>{counter}</h2>
      <hr />
    </div>
  );
}

export default ChildFComponent;
