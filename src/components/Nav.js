import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <Container>
        <ul>
          <MenuList>LeaderBoard</MenuList>
          <MenuList>Menu1</MenuList>
          <MenuList>Menu2</MenuList>
          <MenuList>Menu3</MenuList>
          <MenuList>Menu4</MenuList>
        </ul>

    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 4.6%;

  display: flex;

  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  background-color: #1d1f2c;

  & > ul {
    width: 68.3%;
    height: 100%;

    margin: 0;
    padding: 0;

    display: flex;

    justify-content: space-between;
    align-items: center;

  }
`;

const MenuList = styled.li`
  width: 18.3%;
  height: 70%;

  display: flex;

  justify-content: center;
  align-items: center;

  list-style-type: none;

  background-color: #14171f;

  color: white;

  font-size: 0.5rem;
  font-weight: bold;

  border-radius: 10px;
`;
