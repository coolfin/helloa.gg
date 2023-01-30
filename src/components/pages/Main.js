import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as authAPI from "../../service/auth";
import UserDetail from "../util/LeaderBoard/UserDetail";

export default function HellUser() {
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
            <p><strong>4위</strong></p>
          </div>
        </div>

        <button>마이페이지</button>
      </Rank>

      <div>ddddd</div>
      {!users ? (
        <div>유저 정보를 불러오는 중입니다...</div>
      ) : (
        users.map((user) => <WrappedUserDetail {...user} />)
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

const WrappedUserDetail = styled(UserDetail)`
  
  & + & {
    margin-top: 12px;
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

  background-color: green;

  & button {
    width: 100px;
    height: 30px;

    background-color: white;

    border: none;
    border-radius: 10px;

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
