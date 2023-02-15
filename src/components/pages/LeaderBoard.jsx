import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../views/Header";
import Nav from "../views/Nav";

import styled from "styled-components";

export default function LeaderBoard() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header/>
      <Nav/>
    </Container>
  );
}

const Container = styled.div`
  width: 52%;
  height: 100%;

  display: flex;

  justify-content: flex-start;
  align-items: center;

  flex-direction: column;

  background-color: rgba(20,23,31,0.7);

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
