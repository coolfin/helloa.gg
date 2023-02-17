import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import awsconfig from "../../service/awsconfig";

import { Amplify, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import styled from "styled-components";
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";

Amplify.configure(awsconfig);

export default function Login() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(userid, password);
      alert("로그인 성공!");
      setIsLogged(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      Auth.currentAuthenticatedUser({
        bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      })
        .then((user) => {
          console.log(
            `Load additional settings for user: ${JSON.stringify(
              user.attributes.name
            )}`
          );
          window.sessionStorage.setItem("nickname", user.attributes.name);
          window.sessionStorage.setItem("userid", user.attributes.userid);

          navigate("/");
        })
        .catch((err) => console.log("error1: ", err));
    } catch (e) {
      console.log("error2: ", e);
    }
  }, [isLogged]);

  const handleRegister = (e) => {
    navigate("/register");
  };

  return (
    <Container>
      <LogoContainer
        onClick={() => {
          navigate("/");
        }}
      >
        <LogoImg alt="Helloa logo" src="/img/logo_lostark.jpeg" />
        <LogoText>
          <strong>Helloa</strong>.gg
        </LogoText>
      </LogoContainer>

      <LoginContainer onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              value={userid}
              onChange={(e) => setUserId(e.target.value)}
              className={"input-txt " + (userid && "white")}
              placeholder="이메일"
            />
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={"input-txt " + (password && "white")}
              placeholder="비밀번호"
            />
            
            <AutoLoginContainer>
              <div>자동로그인</div>
              <div onClick={() => {navigate('/findpw');}}>비밀번호 찾기</div>
            </AutoLoginContainer> 

            <input type="submit" value="로그인" className="input-btn" />

            <button onClick={handleRegister} className="input-btn">
              회원가입
            </button>
          </div>
        </div>
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

  border-radius: 20px;

  background-color: rgba(20, 23, 31, 0.7);

  @media screen and (max-width: 500px) {
    width: 82%;
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

  & > div {
    margin-left: 1%;
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  width: 10.6%;
  height: 100%;

  border-radius: 8.5px;

  object-fit: contain;
`;

const LogoText = styled.div`
  width: 46.6%;
  height: 100%;

  font-size: 1.8rem;

  display: flex;

  justify-content: center;
  align-items: center;

  color: #8a8a8a;
  font-weight: bold;

  & > strong {
    color: #fff;
  }
`;

const LoginContainer = styled.form`
  width: 85%;
  height: 85%;

  display: flex;

  justify-content: flex-start;
  align-items: center;

  flex-direction: column;

  border-radius: 20px;
  background-color: rgba(30, 40, 52, 0.9);

  margin-top: 2.6%;
  padding-top: 5%;

  & > div {
    width: 100%;
    height: 60%;

    display: flex;

    justify-content: center;
    align-items: center;
  }

  & > div > div {
    width: 88.2%;
    height: 100%;

    display: flex;

    justify-content: center;
    align-items: center;

    flex-direction: column;
  }

  & input.input-txt {
    width: 100%;
    height: 13.4%;

    background-color: inherit;

    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);

    color: white;

    margin-bottom: 8.1%;
    &:focus {
      outline: none;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);

      font-size: 0.7rem;
    }

    &.white {
      border-bottom: 1px solid rgba(255, 255, 255, 1);
    }
  }

  & *.input-btn {
    width: 100%;
    height: 13%;

    display: flex;

    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 7.35px;

    background-color: #161922;

    font-size: 0.7rem;
    font-weight: bold;

    color: white;

    margin-bottom: 6.7%;

    &:hover {
      cursor: pointer;
    }
  }
`;

const AutoLoginContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;

  padding-bottom: 10.5%;

  justify-content: space-between;
  align-items: center;

  color: white;
  font-weight: bold;
  font-size: 0.7rem;

  & > div:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
