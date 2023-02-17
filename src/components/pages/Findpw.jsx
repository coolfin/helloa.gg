import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

function Findpw() {
  const [userid, setUserId] = useState();
  const navigate = useNavigate();
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
          가입하신 이메일 주소를 입력해 주세요.<br/> 이메일 주소로 비밀번호를
          재설정할 수 있는 이메일을 보내드립니다. 발송된 이메일의 비밀번호
          재설정은 10분 간 유효합니다.
        </div>
        <input
          value={userid}
          onChange={(e) => setUserId(e.target.value)}
          className={"input-txt " + (userid && "white")}
          placeholder="이메일"
        />
        <button className={"input-btn " + (userid && "white")}>
          이메일 전송하기
        </button>
      </PasswordContainer>
    </Container>
  );
}

export default Findpw;

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

    font-size: 0.7rem;
    text-align: left;
    color: white;

    box-sizing: border-box;
    margin-top : 6.1%;
  }

  & input.input-txt {
    width: 88.2%;
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
