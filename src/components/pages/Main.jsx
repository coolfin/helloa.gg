import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "../views/Header";
import Nav from "../views/Nav";

import styled from "styled-components";
import LeaderBoard from "./LeaderBoard";

export default function Main() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Nav />
      <NewLB //아브렐
        onClick={() => {
          navigate("/leaderboard");
        }}
      >
        <NewBossTextContainer>
          <strong>[HELL]</strong>
          <div>아브렐슈드</div>
        </NewBossTextContainer>
      </NewLB>

      <CurLB>
        <VtLB //이전 헬단장
          onClick={() => {
            navigate("/leaderboard");
          }}
        >
          <CurBossTextContainer>
          <strong>[HELL]</strong>
          <div>발탄</div>
          </CurBossTextContainer>
        </VtLB>
        <VyaLB
          onClick={() => {
            navigate("/leaderboard");
          }}
        >
          <CurBossTextContainer>
          <strong>[HELL]</strong>
          <div>비아키스</div>
          </CurBossTextContainer>
        </VyaLB>
        <KKsatonLB
          onClick={() => {
            navigate("/leaderboard");
          }}
        >
          <CurBossTextContainer>
          <strong>[HELL]</strong>
          <div>쿠크세이튼</div>
          </CurBossTextContainer>
        </KKsatonLB>
      </CurLB>
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

const NewLB = styled.div`
  width: 82%;
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
  width: 82%;
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
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: flex-end;
  align-items: flex-end;

  flex-direction: column;

  box-sizing: border-box;

  padding: 4%;

  color: white;
  font-size: 1rem;

  & strong {
    font-size: 1.5rem;
  }
`;
const CurBossTextContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: flex-end;
  align-items: flex-end;

  flex-direction: column;

  box-sizing: border-box;

  padding: 4%;

  color: white;
  font-size: 0.8rem;

  & strong {
    font-size: 1rem;
  }
`;
