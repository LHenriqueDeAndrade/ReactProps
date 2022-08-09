import React, { Component } from "react";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  ul {
    list-style: none;
    display: flex;
    width: 300px;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }
`;

export default class script extends Component {
  render() {
    return (
      <List>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.age}</li>
          <li>{this.props.studying}</li>
        </ul>
      </List>
    );
  }
}
