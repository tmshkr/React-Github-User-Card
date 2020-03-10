import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class UserCard extends Component {
  render() {
    const {
      name,
      login,
      location,
      html_url,
      followers,
      following
    } = this.props.user;
    return (
      <Card>
        <CardBody>
          <h2 className="card-title">{name}</h2>
          <a href={html_url}>{login}</a>
          <ul>
            <li>Location: {location}</li>
            <li>Followers: {followers}</li>
            <li>Following: {following}</li>
          </ul>
          <Button color="primary">Button</Button>
        </CardBody>
      </Card>
    );
  }
}

export default UserCard;
