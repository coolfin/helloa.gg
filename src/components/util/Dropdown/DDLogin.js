import React from "react";
import { useNavigate } from "react-router-dom";

import { Auth } from "aws-amplify";
import styled from "styled-components";

export default function DDLogin() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await Auth.signOut();

      alert("로그아웃 성공!");

      window.sessionStorage.removeItem("userid");
      window.sessionStorage.removeItem("nickname");

      navigate("/");
    } catch (event) {
      console.log(event);
    }
  };

  return (
    <DropDownContainer>
      <li
        onClick={() => {
          navigate("/mypage");
        }}
      >
        내 정보
      </li>
      <li onClick={handleLogout}>로그아웃</li>
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div`
    width:23.2%;
    height:114%;

    position:absolute;

    z-index:1;

    top: 85%;
    border-radius: 5px;


    background-color: #14171F;

  & > li {
    width:100%;
    height:50%;

    list-style: none;

    display:flex;

    justify-content:center;
    align-items:center;

    &:hover {
        opacity: 80%;
        cursor: pointer;
    }
    & + li {
        border-top: 0.5px solid #EDEDED;
    }
  }
`;
