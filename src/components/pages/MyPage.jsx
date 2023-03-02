import React, { useMemo } from "react";

import styled from "styled-components";
import PlusCircle from '@geist-ui/icons/plusCircle'

import Header from "../views/Header";
import Nav from "../views/Nav";

const STAT = ["치명", "특화", "신속", "제압", "인내", "숙련"];
const ENGRAVE_NUM = [1, 2, 3, 4, 5];
export default function MyPage() {
  const isSelectedSets = useMemo(() => {});

  const handleImage = () => {

  }
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
              <div>
                <img src="/img/valtan.jpeg" /> 발탄 : 5회
              </div>
              <div>
                <img src="/img/vyakiss.jpeg" /> 비아키스 : 5회
              </div>
              <div>
                <img src="/img/kksaton.jpeg" /> 쿠크세이튼 : 5회
              </div>
            </HellClearedContainer>

            <BadgeContainer>헬로아 뱃지 준비 중</BadgeContainer>
          </div>
        </PlayerContainer>

        <BookContainer>
          <div>조율의 서</div>
          {/* <Players>
            <ul> {/* 원래는 map으로 유저가 가진 캐릭터 정보 불러와서 해결할 수 있음. 
              <li>쿨핀</li>
              <li>8un</li>
              <li>하프쿨핀</li>
            </ul>
          </Players> */}

          <PlayerStat>
            {STAT.map((v, index) => (
              <div>
                <div>{v}:</div>
                <input type="text" value={0} />
              </div>
            ))}
          </PlayerStat>

          <PlayerEngrave>
            {ENGRAVE_NUM.map((v, index) => (
              <div onClick={() =>{
                handleImage(index);
              }}>+</div>
            ))}
          </PlayerEngrave>
          <PlayerSkillContainer></PlayerSkillContainer>
        </BookContainer>
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
  flex: 1;

  overflow: scroll;

  display: flex;
  align-items: center;

  flex-direction: column;

  box-sizing: border-box;

  margin-top: 2%;
`;

const PlayerContainer = styled.div`
  width: 94%;
  height: 30%;

  display: flex;

  justify-content: space-between;
  align-items: center;

  background-color: #232733;
  border-radius: 10px;

  color: white;

  margin-bottom: 1%;

  & div.player-img {
    width: 30.8%;
    height: 100%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    background-image: url("/img/abrel.jpeg");
    background-position: center center;
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

    box-sizing: border-box;

    padding: 0 3%;

    & > div {
      width: 100%;

      &.player-name {
        font-size: 1.25rem;
        font-weight: bold;

        margin-top: 2%;
      }

      &.player-title {
        font-size: 0.625rem;
        color: rbga(255, 255, 255, 0.7);
      }

      &.hell-clr-number {
        font-size: 0.625rem;
        font-weight: bold;

        margin-top: 2%;
        margin-bottom: 1%;
      }
    }
  }
`;

const BadgeContainer = styled.div`
  width: 100%;
  height: 40%;

  display: flex;

  justify-content: center;
  align-items: center;

  color: rgba(255, 255, 255, 0.7);
  font-size: 0.625rem;
  font-weight: bold;

  border-radius: 5px;

  background-color: rgba(23, 25, 35, 1);
  background-image: url("/img/chain.png");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const HellClearedContainer = styled.div`
  width: 100%;
  height: 6%;

  display: flex;

  justify-content: flex-start;
  align-items: center;

  color: white;
  font-size: 0.625rem;

  margin-bottom: 2.5%;
  margin-top: 1%;

  & > div {
    width: 18.5%;
    height: 100%;

    display: flex;

    justify-content: flex-start;
    align-items: center;
  }

  & img {
    width: 20px;
    height: 20px;

    border-radius: 10px;
    border: 1px solid #232733;

    margin-right: 3%;
  }

  & div + div {
    margin-right: 5%;
  }
`;

const BookContainer = styled.div`
  width: 94%;
  height: 80%;

  overflow: scroll;

  background-color: #232733;
  border-radius: 10px;

  font-size: 1.25rem;
  font-weight: bold;
  color: white;

  box-sizing: border-box;

  padding: 3%;

  & > div + div {
    margin-bottom: 1.5%;
  }
`;

const PlayerStat = styled.div`
  width: 80%;
  height: 5%;

  background-color: #161922;

  border-radius: 10px;

  display: flex;

  justify-content: space-between;
  align-items: center;

  & > div {
    width: 16%;
    height: 100%;

    box-sizing: border-box;

    display: flex;

    justify-content: space-between;
    align-items: center;

    font-size: 0.6rem;
    font-weight: bold;

    & > div {
      width: 40%;
      height: 100%;

      display: flex;

      justify-content: flex-end;
      align-items: center;
    }

    & > input {
      width: 50%;
      height: 100%;

      background-color: transparent;

      border: none;

      box-sizing: border-box;

      &:hover {
        cursor: pointer;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;
const Players = styled.div`
  width: 100%;
  height: 5%;

  background-color: #161922;

  border-radius: 10px;
`;
const PlayerEngrave = styled.div`
  width: 45%;
  height: 9%;

  display: flex;

  justify-content: space-around;
  align-items: center;

  background-color: #161922;

  border-radius: 10px;

  & > div {
    min-width: 20px;
    width: 30px;

    min-height: 20px;
    height: 30px;

    display: flex;

    justify-content: center;
    align-items: center;

    border-radius: 50%;

    box-shadow: 0 -5px 5px #233033 inset;

    &:hover {
      cursor: pointer;
    }
  }
`;
const PlayerSkillContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: transparent;
`;
