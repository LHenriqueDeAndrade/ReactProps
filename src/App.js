import React, { Component } from "react";
import Header from "./Component/Header.js";
import Main from "./Component/Main.js";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  background-color: beige;
}
`;

const Info = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40vw;
`;

export default class script extends Component {
  render() {
    return (
      <Info>
        <GlobalStyle />
        <Header title="Information" />
        <Main name="Júlio César" age="20" studying="Java" />
        <Main name="Luiz" age="23" studying="frontEnd" />
      </Info>
    );
  }
}
