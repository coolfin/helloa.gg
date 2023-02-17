import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../views/Header";
import Nav from "../views/Nav";

import { Auth } from "aws-amplify";

import styled from "styled-components";

export default function LeaderBoard() {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      Auth.currentUserPoolUser().then((userInfo) => {
        const { attributes = {} } = userInfo;
        console.log(userInfo);
      });
    } catch (e) {
      console.log("error2: ", e);
    }
  }, []);

  return (
    <Container>
      <Header />
      <Nav />

      <InnerContainer>
        <InnerHeader></InnerHeader>

        <ListViewContainer>
          <ul></ul>
        </ListViewContainer>
      </InnerContainer>
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

  background-color: rgba(20, 23, 31, 0.7);

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const InnerContainer = styled.div`
  width: 82%;
  height: 76.9%;

  background-color: transparent;

  box-sizing: border-box;

  margin-top: 2%;
`;

const InnerHeader = styled.div`
  width: 95.1%;
  height: 4.2%;

  background-color: white;

  box-sizing: border-box;

  margin-top: 2.4%;
`;

const ListViewContainer = styled.div`
  width: 95.1%;
  height: 95%;

  background-color: gray;

  box-sizing: border-box;

  margin-top: 0.6%;
`;
