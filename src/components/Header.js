import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export default function Header() {
  const navigate = useNavigate();
  const isAuthorized = true;
  return (
    <Container>
      <div>
        <LogoContainer
          onClick={() => {
            navigate("/");
          }}
        >
          <LogoImg
            alt="Helloa logo"
            src="/img/logo_lostark.jpeg"
            className="header__logo"
          />

          <div>
            <strong>Helloa</strong>.gg
          </div>
        </LogoContainer>

        <LoginContainer>
          <LoggedImg
            alt="User logged"
            src="/img/arkana.png"
            className="nav__avatar"
            onClick={() => (window.location.href = "/tripod")}
          />
          <div><strong>쿨핀</strong> 님</div>

          <LoginDropdown
            alt="User Dropdown"
            src="http://via.placeholder.com/25x25"
          ></LoginDropdown>
        </LoginContainer>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 4.6%;

  display: flex;

  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  background-color: #2e3341;

  & > div {
    width: 68.3%;
    height: 100%;

    display: flex;

    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;

  justify-content: flex-start;
  align-items: center;

  color: white;

  & > div {
    margin-left: 1%;
  }

  &:hover {
    cursor: pointer;

    & > div {
      opacity: 80%;
    }
  }
`;

const LogoImg = styled.img`
  width: 6.1%;
  height: 50%;

  object-fit: contain;
`;

const LoginContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;

  justify-content: flex-end;
  align-items: center;

  color: white;


  & > div {
    margin:0 1%;

    font-size: 0.5rem;
  }
`;

const LoggedImg = styled.img`
  width: 6.1%;
  height: 50%;

  border-radius : 50%;

  object-fit: contain;
`;

const LoginDropdown = styled.img`
  width: 6.1%;
  height: 50%;

  object-fit: contain;
`;
