import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../views/Header";
import Nav from "../views/Nav";

import { Auth } from "aws-amplify";

import styled from "styled-components";

export default function LeaderBoard() {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      Auth.currentUserPoolUser().then((userInfo) => {
        const { attributes = {} } = userInfo;
        console.log(userInfo);
      });
    } catch (e) {
      console.log("error2: ", e);
    }
  }, []);

  return (
    <Container>
      <Header />
      <Nav />

      <InnerContainer>
        <InnerHeader>
          <input placeholder="닉네임을 입력해 주세요."></input>
          <button>
            <img src="/icon/search.png" />
          </button>
        </InnerHeader>

        <ListViewContainer>
          <ListHeader>
            <div>
              <div>#</div>
              <div>닉네임</div>
            </div>
            <div>클리어 횟수(발탄)</div>
          </ListHeader>

          <ListItem>
            <div>
              <div>1</div>
              <div>
                <img src="/img/arkana.png"/>
                8un
              </div>
            </div>
            <div>89</div>
          </ListItem>
          <ListItem>
            <div>
              <div>2</div>
              <div>
                <img src="/img/arkana.png"/>
                권은비
              </div>
            </div>
            <div>42</div>
          </ListItem>
          <ListItem>
            <div>
              <div>3</div>
              <div>
                <img src="/img/arkana.png"/>
                근육맨옴팡이
              </div>
            </div>
            <div>23</div>
          </ListItem>

        </ListViewContainer>
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
  height: 100%;

  background-color: transparent;

  display: flex;
  align-items: center;

  flex-direction: column;

  box-sizing: border-box;

  margin-top: 2%;
`;

const InnerHeader = styled.div`
  width: 95.1%;
  height: 4.2%;

  display: flex;
  position: relative;

  justify-content: flex-end;
  align-items: center;

  box-sizing: border-box;

  margin-top: 2.4%;

  & input {
    width: 38.5%;
    height: 100%;

    background-color: #181A25;

    color: white;
    font-size: 0.7rem;

    box-sizing: border-box;

    border: none;
    border-radius : 10px;

    padding: 2.7%;

    &::placeholder {
      color : #2E3341;
      font-size: 0.7rem;
    }

    &:focus {
      outline: none;
    }
  }
  & button {
    width: 3.84%;
    height: 86%;
    background-color: inherit;

    position: absolute;
    display: flex;

    justify-content :center;
    align-items: center;

    top: 50%:
    right: 1%;

    border: none;

    &:hover {
      cursor : pointer;
      opacity: 0.7;
    }


    & img {
      width: 15px;
      height: 15px;

      object-fit: contain;
      }
    }
  }
`;

const ListViewContainer = styled.div`
  width: 95.1%;
  height: 95%;


  box-sizing: border-box;

  margin-top: 1%;
`;

const ListHeader = styled.div`
  width: 100%;
  height: 2.4%;

  background-color: #161922;

  display: flex;

  justify-content: space-between;
  align-items: center;

  color: white;
  font-size: 0.5rem;

  & div {
    width: 20%;
    height: 50%;

    display:flex;

    justify-content: space-between;
    align-items: center;

    margin-left: 1.3%;

    & div{
      width: 6.4%
      height:100%;

    }

    & div+div{
      width: 87.2%;
      height: 100%;
    }

  }

  &>div+div {
    width: 17.4%;
    height: 50%;

    display: flex;

    justify-content: center;
    align-items: center;
  }
`;

const ListItem = styled.li`
width: 100%;
height: 4.5%;

background-color: #232733;
border : 1px solid rgba(0,0,0,0.3);

box-sizing:border-box;

display: flex;

justify-content: space-between;
align-items: center;

color: white;
font-size: 0.5rem;

margin-top: 0.1%;

& div {
  width: 20%;
  height: 100%;

  display:flex;

  justify-content: space-between;
  align-items: center;

  margin-left: 1.3%;

  & div{
    width: 6.4%
    height:100%;

  }

  & div+div{
    width: 87.2%;
    height: 100%;
    font-weight: bold;

    display: flex;

    justify-content:flex-start;

    &>img {
      width: 14%;
      height: 100%;

      border-radius:50%;

      object-fit: contain;

      margin-right:5%;

    }
  }

}

&>div+div {
  width: 17.4%;
  height: 50%;

  display: flex;

  justify-content: center;
  align-items: center;
}
`;
