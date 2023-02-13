import React, { useEffect, useState } from "react";
import { Routes, useNavigate } from "react-router-dom";

import Header from "../Header";
import Nav from "../Nav";

import styled from "styled-components";

export default function Main() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Nav />
      <NewLB
        onClick={() => {
          navigate("/leaderboard");
        }}
      >
        <NewBossTextContainer>
          <div></div>
          <div></div>
        </NewBossTextContainer>
      </NewLB>
      <CurLB>
        <VtLB
          onClick={() => {
            navigate("/leaderboard");
          }}
        >
          <CurBossTextContainer>
            <div></div>
            <div></div>
          </CurBossTextContainer>
        </VtLB>
        <VyaLB
          onClick={() => {
            navigate("/leaderboard");
          }}
        >
          <CurBossTextContainer>
            <div></div>
            <div></div>
          </CurBossTextContainer>
        </VyaLB>
        <KKsatonLB
          onClick={() => {
            navigate("/leaderboard");
          }}
        >
          <CurBossTextContainer>
            <div></div>
            <div></div>
          </CurBossTextContainer>
        </KKsatonLB>
      </CurLB>
    </Container>
  );
}

const Container = styled.div`
  width: 62.5%;
  height: 100%;

  display: flex;

  justify-content: flex-start;
  align-items: center;

  flex-direction: column;

  background-color: #14171f;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const NewLB = styled.div`
  width: 68.3%;
  height: 42.3%;

  display: flex;

  margin-top: 8.1%;

  background-image: url("/img/abrel.jpeg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 30px;

  &:hover {
    cursor: pointer;
    opacity: 90%;
  }
`;

const CurLB = styled.div`
  width: 68.3%;
  height: 18.5%;

  display: flex;

  justify-content: space-between;
  align-items: center;

  margin-top: 6.1%;

  & > div {
    width: 31.7%;
    height: 100%;

    background-color: white;
  }

  & > div + div {
    margin-left: 2.1%;
  }

  & > div:hover {
    cursor: pointer;
    opacity: 90%;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;

    height: 50%;

    & > div {
      width: 100%;
      height: 31.7%;
    }

    & > div + div {
      margin: 0;
      margin-top: 2.1%;
    }
  }
`;

const VtLB = styled.div`
  background-image: url("/img/valtan.jpeg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 30px;

  @media screen and (max-width: 500px) {
    background-position: 80% 40%;
  }
`;
const VyaLB = styled.div`
  background-image: url("/img/vyakiss.jpeg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 30px;

  @media screen and (max-width: 500px) {
    background-position: left 40%;
  }
`;
const KKsatonLB = styled.div`
  background-image: url("/img/kksaton.jpeg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 30px;

  @media screen and (max-width: 500px) {
    background-position: center 40%;
  }
`;

const NewBossTextContainer = styled.div`
  display:flex;

  justify-content: 
  align-items: flex-end;

  color:white;
`;
const CurBossTextContainer = styled.div``;
