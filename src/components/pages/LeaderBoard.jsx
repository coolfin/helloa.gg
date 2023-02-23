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
        <InnerHeader>
          <input placeholder="닉네임을 입력해 주세요."></input>
          <button>
            <img src="/icon/search.png" />
          </button>
        </InnerHeader>

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
  height: 100%;

  background-color: blue;

  display: flex;
  align-items: center;

  flex-direction: column;

  box-sizing: border-box;

  margin-top: 2%;
`;

const InnerHeader = styled.div`
  width: 95.1%;
  height: 4.2%;

  display: flex;
  position: relative;

  justify-content: flex-end;
  align-items: center;

  box-sizing: border-box;

  margin-top: 2.4%;

  & input {
    width: 38.5%;
    height: 100%;

    background-color: #181A25;

    color: white;
    font-size: 0.7rem;

    box-sizing: border-box;

    border: none;
    border-radius : 10px;

    padding: 2.7%;

    &::placeholder {
      color : #2E3341;
      font-size: 0.7rem;
    }

    &:focus {
      outline: none;
    }
  }
  & button {
    width: 3.84%;
    height: 86%;
    background-color: inherit;

    position: absolute;
    display: flex;

    justify-content :center;
    align-items: center;

    top: 50%:
    right: 1%;

    border: none;

    &:hover {
      cursor : pointer;
      opacity: 0.7;
    }


    & img {
      width: 15px;
      height: 15px;

      object-fit: contain;
      }
    }
  }
`;

const ListViewContainer = styled.div`
  width: 95.1%;
  height: 95%;

  background-color: gray;

  box-sizing: border-box;

  margin-top: 0.6%;
`;
