import React, { useEffect, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();

  const nickname = window.sessionStorage.getItem("nickname");

  const handleMyPage = () => {
    // setUserId( window.sessionStorage.getItem("userid") );
    // console.log("nav:", userId);
    // if (userId != true) {
    //   alert("로그인을 먼저 해주세요.");
    //   return;
    // }
    navigate("/mypage/" + 1 + "");
  };
  return (
    <Container>
      <ul>
        <MenuList
          onClick={() => {
            navigate("/leaderboard");
          }}
        >
          리더보드
        </MenuList>
        <MenuList
          onClick={() => {
            alert("준비 중 입니다.");
          }}
        >
          미니게임
        </MenuList>
        { nickname &&(
          <MenuList
            onClick={() => {
              handleMyPage();
            }}
          >
            마이페이지
          </MenuList>
        )}
        <MenuList
          onClick={() => {
            navigate("/");
          }}
        >
          클리어 인증
        </MenuList>
      </ul>
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

  background-color: #1d1f2c;

  & > ul {
    width: 82%;
    height: 100%;

    margin: 0;
    padding: 0;

    display: flex;

    justify-content: space-between;
    align-items: center;
  }
`;

const MenuList = styled.li`
  width: 22%;
  height: 70%;

  display: flex;

  justify-content: center;
  align-items: center;

  list-style-type: none;

  background-color: #14171f;

  color: white;

  font-size: 0.5rem;
  font-weight: bold;

  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 70%;
  }
`;
