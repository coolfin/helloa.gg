import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";

import { Auth } from "aws-amplify";

export default function ConfirmRegister() {
  const [code, setCode] = useState();
  const navigate = useNavigate();

  const { state } = useLocation();

  const handleResend = async () => {
    try {
      await Auth.resendSignUp(state);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  };
  const handleSubmit = async () => {
    try {
      await Auth.confirmSignUp(state, code);
      alert('가입 완료');
      navigate('/login');
    } catch (error) {
      console.log("error confirming sign up", error);
    }
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
      <PasswordContainer>
        <div>
          가입된 이메일로 전송된 코드를 입력해 주세요.
          <br />
          인증 코드를 입력하여 계정 생성을 완료합니다. 코드는 10분간 유효합니다.
        </div>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className={"input-txt " + (code && "white")}
          placeholder="인증 코드"
        />
        <p>
          <span
            onClick={() => {
              handleResend();
            }}
          >
            코드 재전송
          </span>
        </p>
        <button
          className={"input-btn " + (code && "white")}
          onClick={() => {
            handleSubmit();
          }}
        >
          가입 완료하기
        </button>
      </PasswordContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20.83%;
  height: 41.7%;

  display: flex;

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

  margin-top: 6.7%;

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

const PasswordContainer = styled.div`
  width: 85%;
  height: 73.3%;

  display: flex;

  align-items: center;

  flex-direction: column;

  background-color: rgba(30, 40, 52, 0.9);

  box-sizing: border-box;
  border-radius: 20px;

  margin-top: 4.4%;

  & div {
    width: 88.2%;
    height: 45.5%;

    display: flex;

    justify-content: center;
    align-items: center;

    font-size: 0.8rem;
    text-align: left;
    color: white;

    box-sizing: border-box;
    margin-top: 6.1%;
  }

  & > p {
    width: 88.2%;

    display: flex;

    justify-content: flex-end;
    align-items: center;

    font-size: 0.6rem;
    text-align: left;
    color: rgba(255, 255, 255, 0.7);

    box-sizing: border-box;

    & > span:hover {
      color: white;
      cursor: pointer;

      text-decoration: underline;
    }
  }

  & input.input-txt {
    width: 88.2%;
    height: 13.4%;

    background-color: inherit;

    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);

    color: white;

    margin-bottom: 2.1%;
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
    width: 88.2%;
    height: 13%;

    display: flex;

    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 7.35px;

    background-color: #161922;
    color: rgba(255, 255, 255, 0.7);

    font-size: 0.7rem;
    font-weight: bold;

    margin-bottom: 6.7%;

    &:hover {
      cursor: pointer;
    }

    &.white {
      color: white;
    }
  }
`;
