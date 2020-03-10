import React, { Component } from "react";
import axios from "./config";

import UserCard from "./components/user-card";

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
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
          const users = [...this.state.users];
          users.push(data);
          this.setState({ users });
        })
        .catch(err => {
          console.dir(err);
        });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <main className="app">
        {users.map(u => (
          <UserCard key={u.login} user={u} />
        ))}
      </main>
    );
  }
}

export default App;
