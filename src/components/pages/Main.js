import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as authAPI from '../../service/auth';
import UserDetail from '../util/LeaderBoard/UserDetail';

export default function HellUser() {
  const [users, setUsers] = useState();

  useEffect(() => {
    authAPI.getUsers().then((data) => {
      console.log(data);
      setUsers(data);
    });
  }, []);

  return (
    <>
    
    <div>
      </div>
      {!users ? (
        <div>유저 정보를 불러오는 중입니다...</div>
      ) : (
        users.map((user) => <WrappedUserDetail {...user} />)
      )}
    </>
  );
}

const WrappedUserDetail = styled(UserDetail)`
  & + & {
    margin-top: 12px;
  }
`;
