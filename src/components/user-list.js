import React, { Component } from "react";
import axios from "../config";

import UserCard from "./user-card";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    this.getDefaultUsers();
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    const { location } = this.props;
    if (this.props.location !== prevProps.location) {
      if (location.pathname === "/") {
        this.setState({ users: [...this.defaultUsers] });
      } else {
        const { username, list } = this.props.match.params;
        axios
          .get(`https://api.github.com/users/${username}/${list}`)
          .then(({ data }) => this.setState({ users: data }));
        console.log(username, list);
      }
    }
  }

  getDefaultUsers() {
    this.defaultUsers = [];
    const usernames = [
      // "bigknell",
      // "dustinmyers",
      // "jackskim",
      // "justsml",
      // "luishrd",
      // "tetondan",
      "tmshkr"
    ];

    usernames.forEach(username => {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(({ data }) => {
          console.log(data);
          this.defaultUsers.push(data);
          console.log(this.defaultUsers);
          if (this.defaultUsers.length === usernames.length) {
            this.setState({ users: [...this.defaultUsers] });
          }
        })
        .catch(err => {
          console.dir(err);
        });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <>
        {users.map(u => (
          <UserCard key={u.login} user={u} />
        ))}
      </>
    );
  }
}

export default UserList;
