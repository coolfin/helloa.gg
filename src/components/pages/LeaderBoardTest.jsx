import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as authAPI from "../../service/auth";
import UserDetail from "../util/LeaderBoard/UserDetail";

export default function LeaderBoard() {
  const [users, setUsers] = useState();

  useEffect(() => {
    authAPI.getUsers().then((data) => {
      console.log(data);
      setUsers(data);
    });
  }, []);
  return (
    <Container>
      <Rank>
        <div>
          <div>
            <p>내 랭킹</p>
            <p>
              <strong>4위</strong>
            </p>
          </div>
        </div>

        <button>마이페이지</button>
      </Rank>

      <UserDetailContainer>
        <div className="nickname-container ">
          <div>순위</div>
          <div>유저명</div>
        </div>
        <div className="hellcleared-container">
          <div>헬탄</div>
          <div>헬비아</div>
          <div>헬쿠크</div>
        </div>

        <div className="tripod-container">
          조율의 서
        </div>
      </UserDetailContainer>

      {!users ? (
        <div>유저 정보를 불러오는 중입니다...</div>
      ) : (
        users.map((user, index) => <UserDetail key={index} {...user} index={index} />)
      )}
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

const UserDetailContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;

  width: 90%;

  max-height: 30px;
  height: 30px;

  border-radius: 10px;

  color: gray;
  font-weight: bold;
  font-size: 0.8rem;

  .nickname-container {
    width:30%;
    display: flex;

    justify-content: flex-start;
    align-items: center;

    & div {

    margin-left: 24px;
    }
  }

  .hellcleared-container {
    width: 40%;
    display : flex;

    justify-content: flex-end;
    align-items: center;

    & div {
      margin-right: 40px;
    }
  }

  .tripod-container {
    width: 10%;
  }
`;

const Rank = styled.div`
  display: flex;

  max-width: 800px;
  width: 800px;

  max-height: 60px;
  height: 60px;

  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;

  padding: 0px 30px;
  margin-bottom: 36px;

  color: white;

  background-color: rgb(80,80,80);

  & button {
    width: 100px;
    height: 30px;

    background-color: rgb(80,80,80);

    border: 1px solid white;
    border-radius: 10px;

    color: white;

    &:hover {
      cursor: pointer;
      background-color: gray;
    }
  }

  & div {
    box-sizing: border-box;

    max-width: 100px;
    width: 100px;

    height: 100%;

    display: flex;

    justify-content: center;
    align-items: flex-start;

    flex-direction: column;

    & p {
      padding: 0;
      margin: 0;

      font-size: 1rem;
    }
  }
`;
