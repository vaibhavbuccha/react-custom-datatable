import { useEffect } from "react";
// eslint-disable-next-line
export default ({ data }) => {
  useEffect(() => {
    console.log("data", data);
  }, []);
  return (
    <>
      <h3>Students List</h3>
      {data.map((d, i) => (
        <div key={i}>
          <hr />
          <p>Name: {d.name}</p>
          <p>Roll No: {d.rollno}</p>
          <p>Std : {d.std}</p>
        </div>
      ))}
    </>
  );
};
