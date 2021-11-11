import React, { useState, useEffect } from "react";

export default function UserFun() {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("mounted");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res
          .json()
          .then((result) => setUsers(result))
          .catch((error) => console.log(error));
      })
      .catch();
  }, []);

  const reverseFilter = () => {
    // console.log(counter + 1);
    setCounter(counter + 1);
    let filteredData = users.reverse();
    setUsers(filteredData);
    console.log(users);
  };
  return (
    <>
      <div>
        <button onClick={reverseFilter}>Asc / Desc</button>
      </div>
      <table>
        <thead>
          <th>ID</th>
          <th>Username</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Action</th>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>
                <button>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
