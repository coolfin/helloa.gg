import React from "react";

import styled from "styled-components";
import Header from "../views/Header";
import Nav from "../views/Nav";

export default function MyPage() {

  const nickname = window.sessionStorage.getItem('nickname');

  return (
    <Container>
      <Header />
      <Nav />

      <InnerContainer>
        <PlayerContainer>
          <div className="player-img"></div>
          <div className="player-info">
            <div className="player-name">쿨핀</div>
            <div className="player-title">광기의 그림자</div>

            <div className="hell-clr-number">헬 클리어 횟수</div>
            <HellClearedContainer>
              <div><img/> 발탄 : 5회</div> 
              <div><img/> 비아키스 : 5회</div>
              <div><img/> 쿠크세이튼 : 5회</div>
            </HellClearedContainer>

            <BadgeContainer>헬로아 뱃지 준비 중</BadgeContainer>
          </div>
        </PlayerContainer>

        <BookContainer></BookContainer>
      </InnerContainer>
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

const InnerContainer = styled.div`
  width: 82%;
  flex:1;

  overflow: scroll;

  display: flex;
  align-items: center;

  flex-direction: column;

  box-sizing: border-box;

  margin-top: 2%;
`;

const PlayerContainer = styled.div`
  width:94%;
  height: 30%;
  
  display: flex;

  justify-content: space-between;
  align-items: center;

  background-color: #232733;

  color:white;

  & div.player-img {
    width: 30.8%;
    height: 100%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    background-image: url("/img/abrel.jpeg");
    background-position:center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  & div.player-info {
    width: 70%;
    height: 100%;

    display: flex;

    jusitfy-content: flex-start;
    align-items: flex-start;

    flex-direction: column;

    box-sizing : border-box;

    padding: 0 3%;

    &>div {
      width:100%;

      &.player-name {
        font-size: 1.25rem;
        font-weight: bold;

        margin-top:2%;
      }

      &.player-title{
        font-size: 0.625rem;
        color: rbga(255,255,255,0.7);
      }

      &.hell-clr-number {
        font-size: 0.625rem;
        font-weight:bold;

        margin-top:2%;
        margin-bottom:1%;
      }
    }

  }

`;
const BookContainer = styled.div`
  width:94%;
  height: 94%;

  background-color : green;
`;

const BadgeContainer = styled.div`
  width:100%;
  height:40%;

  display: flex;

  justify-content:center;
  align-items:center;

  color: rgba(255,255,255,0.7);
  font-size: 0.625rem;
  font-weight: bold;

  border-radius: 5px;

  background-color: rgba(23,25,35,1);
  background-image: url("/img/chain.png");
  background-position:center center;
  background-size: contain;
  background-repeat: no-repeat;
`


const HellClearedContainer = styled.div`
  width: 100%;
  height: 6%;

  display:flex;
  
  justify-content : flex-start;
  align-items: center;

  color: white;
  font-size: 0.625rem;

  margin-bottom: 3%;
`;