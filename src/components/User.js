import React, { Component } from "react";

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      filteredUsers: [],
      limit: 100,
    };

    this.sortAsyDesc = this.sortAsyDesc.bind(this);
    this.aTozSort = this.aTozSort.bind(this);
    this.setLimitHandler = this.setLimitHandler.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res
          .json()
          .then((res) => {
            this.setState({
              users: res,
              filteredUsers: res,
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((err) => {
        console.log(err);
      });
    console.table(this.state.users);
  }

  sortAsyDesc() {
    let data = this.state.filteredUsers;
    let sortData = data.reverse();
    this.setState({
      filteredUsers: sortData,
    });
  }

  aTozSort() {
    let data = this.state.filteredUsers;
    data.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      filteredUsers: data,
    });
  }

  setLimitHandler() {
    let limit = this.state.limit;
    let sortedData = this.state.users.slice(0, limit);
    this.setState({
      filteredUsers: sortedData,
    });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.sortAsyDesc}>Asc/Desc</button>
          <button onClick={this.aTozSort}>A - Z</button>
          <input
            type="number"
            onChange={(e) =>
              this.setState({
                limit: e.target.value,
              })
            }
            defaultValue={this.state.limit}
          />
          <button onClick={this.setLimitHandler}>SetLimit</button>
        </div>
        <table>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th> Action </th>
          </thead>
          <tbody>
            {this.state.filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{++index}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <button type="button">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
