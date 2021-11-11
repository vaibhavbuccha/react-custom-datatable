import { useEffect } from "react";
import ViewStudent from "./ViewStudent";
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
          <ViewStudent name={d.name} rollno={d.rollno} std={d.std} />
        </div>
      ))}
    </>
  );
};
