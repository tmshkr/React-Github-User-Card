import React, { Component } from "react";
import axios from "../config";
import { Link } from "react-router-dom";
import { Card, CardBody, Button } from "reactstrap";
import GitHubCalendar from "github-calendar";
import "../../node_modules/github-calendar/dist/github-calendar-responsive.css";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  showGraph = () => {
    const { login } = this.props.user;
    new GitHubCalendar(`.${login}.calendar`, login, {
      responsive: true
    });
  };

  render() {
    if (!this.state.user) return <h2>loading...</h2>;
    const {
      avatar_url,
      bio,
      name,
      login,
      location,
      html_url,
      followers,
      following
    } = this.state.user;

    return (
      <Card className="user-card">
        <CardBody>
          <img src={avatar_url} alt={login} />
          <div>
            <h2 className="card-title">{name}</h2>
            <a className="profile-link" href={html_url} target="_blank">
              {login}
            </a>
            <ul>
              {location && (
                <li>
                  <em>{location}</em>
                </li>
              )}
              {followers && (
                <li>
                  Followers:{" "}
                  <Link to={`/u/${login}/followers`}>{followers}</Link>
                </li>
              )}
              {following && (
                <li>
                  Following:{" "}
                  <Link to={`/u/${login}/following`}>{following}</Link>
                </li>
              )}
            </ul>
          </div>
          {bio && <p>{bio}</p>}
        </CardBody>
        <div className={`calendar ${login}`}>
          <Button outline color="primary" size="lg" onClick={this.showGraph}>
            Show Graph
          </Button>
        </div>
      </Card>
    );
  }
}

export default UserCard;
