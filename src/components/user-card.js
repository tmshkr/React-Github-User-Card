import React, { Component } from "react";
import { Card, CardBody, Button } from "reactstrap";
import GitHubCalendar from "github-calendar";
import "../../node_modules/github-calendar/dist/github-calendar-responsive.css";

class UserCard extends Component {
  showGraph = () => {
    const { login } = this.props.user;
    new GitHubCalendar(`.${login}.calendar`, login, {
      responsive: true
    });
  };
  render() {
    const {
      avatar_url,
      bio,
      name,
      login,
      location,
      html_url,
      followers,
      following
    } = this.props.user;

    return (
      <Card className="user-card">
        <CardBody>
          <img src={avatar_url} alt={login} />
          <div>
            <h2 className="card-title">{name}</h2>
            <a className="profile-link" href={html_url}>
              {login}
            </a>
            <ul>
              {location && (
                <li>
                  <em>{location}</em>
                </li>
              )}
              <li>Followers: {followers}</li>
              <li>Following: {following}</li>
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
