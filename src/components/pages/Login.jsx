import React, { useState } from "react";
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
    } catch (event) {
      console.log(event);
    }
  };

  const handleRegister = (e) => {
    navigate("/register");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input value={userid} onChange={(e) => setUserId(e.target.value)} />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="로그인" />
        <button onClick={handleRegister}>회원가입</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  height: 80vh;

  display: flex;

  justify-content: flex-start;
  align-items: center;

  flex-direction: column;

  border-right: 1px solid gray;
  border-left: 1px solid gray;
`;
