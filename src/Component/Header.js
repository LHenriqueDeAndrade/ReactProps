import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  margin-left: 3vw;
  color: green;
`;

export default class script extends Component {
  render() {
    return (
      <>
        <Title>{this.props.title}</Title>
      </>
    );
  }
}
