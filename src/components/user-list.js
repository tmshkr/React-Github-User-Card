import React, { Component } from "react";
import axios from "axios";

import UserCard from "./user-card";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    this.getDefaultUsers();
    const { location } = this.props;
    if (location.pathname !== "/") {
      this.getUserList();
    }
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (this.props.location !== prevProps.location) {
      if (location.pathname === "/") {
        this.setState({ users: [...this.defaultUsers] });
      } else {
        this.getUserList();
      }
    }
  }

  getDefaultUsers() {
    this.defaultUsers = [];
    const usernames = [
      "bigknell",
      "dustinmyers",
      "jackskim",
      "justsml",
      "luishrd",
      "tetondan",
      "tmshkr"
    ];

    usernames.forEach(username => {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(({ data }) => {
          this.defaultUsers.push(data);
          if (
            this.defaultUsers.length === usernames.length &&
            this.state.users.length === 0
          ) {
            this.setState({ users: [...this.defaultUsers] });
          }
        })
        .catch(err => {
          console.dir(err);
        });
    });
  }

  getUserList() {
    const { username, list } = this.props.match.params;
    axios
      .get(`https://api.github.com/users/${username}/${list}`)
      .then(({ data }) => this.setState({ users: data }));
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
