import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import awsconfig from "../../service/awsconfig";

import { Amplify, Auth } from "aws-amplify";
import { Authenticator, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import styled from "styled-components";

Amplify.configure(awsconfig);

export default function Login() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(userid, password);
      alert("로그인 성공!");

      window.sessionStorage.setItem("userid", userid);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = (e) => {
    navigate("/register");
  };

  return (
    <Container>
      <LogoContainer>
        <LogoImg alt="Helloa logo" src="/img/logo_lostark.jpeg" />
        <LogoText>
          <strong>Helloa</strong>.gg
        </LogoText>
      </LogoContainer>

      <LoginContainer onSubmit={handleSubmit}>
        <input value={userid} onChange={(e) => setUserId(e.target.value)} />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="로그인" />
        <button onClick={handleRegister}>회원가입</button>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20.83%;
  height: 74.07%;

  display: flex;

  justify-content: center;
  align-items: center;

  flex-direction: column;

  box-sizing: border-box;

  border-radius: 20px;

  background-color: rgba(20, 23, 31, 0.7);


  @media screen and (max-width: 500px) {
    justify-content: flex-start;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 5.3%;


  display: flex;

  justify-content: center;
  align-items: center;

  margin-top: 3.7%;
  margin-bottom: 2.3%;

  & > div {
    margin-left: 1%;
  }
`;

const LogoImg = styled.img`
  width: 10.6%;
  height: 100%;

  object-fit: contain;
`;

const LogoText = styled.div`
width: 46.6%;
height: 100%;

font-size: 100%;
text-align: center;

box-sizing: border-box;

background-color: magenta;

color: #8A8A8A;
font-weight:bold;

&>strong {
  color: #FFF;
}
`;

const LoginContainer = styled.form`
  width: 85%;
  height : 85%;

  background-color: rgba(30,40,52,0.9);
`