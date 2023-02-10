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
        abrel
      </NewLB>
      <CurLB>
        <VtLB
          onClick={() => {
            navigate("/leaderboard");
          }}
        >
          valtan
        </VtLB>
        <VyaLB
          onClick={() => {
            navigate("/leaderboard");
          }}
        >
          vya
        </VyaLB>
        <KKsatonLB
          onClick={() => {
            navigate("/leaderboard");
          }}
        >
          saton
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

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const NewLB = styled.div`
  width: 68.3%;
  height: 42.3%;

  background-color: gray;
`;

const CurLB = styled.div`
  width: 68.3%;
  height: 18.5%;

  display: flex;

  justify-content: space-between;
  align-items: center;

  background-color: blue;

  & > div {
    width: 31.7%;
    height: 100%;

    background-color: white;
  }

  & > div + div {
    margin-left: 2.1%;
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

const VtLB = styled.div``;
const VyaLB = styled.div``;
const KKsatonLB = styled.div``;
