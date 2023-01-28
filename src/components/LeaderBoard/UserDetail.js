import React from 'react';
import styled from 'styled-components';

export default function UserDetail({
  nickname,
  ValtanClear,
  VyakissClear,
  SatonClear,
  className,
}) {
  return (
    <Container className={className}>
      <Nickname>
        <h4>닉네임</h4>
        <span>{nickname}</span>
      </Nickname>

      <HellCleared>
        <div>
          <strong className="title">[HELL] 발탄</strong>
          <span className="content">{ValtanClear} 마리</span>
        </div>

        <div>
          <strong className="title">[HELL] 비아키스</strong>
          <span className="content">{VyakissClear} 마리</span>
        </div>

        <div>
          <strong className="title">[HELL] 쿠크세이튼</strong>
          <span className="content">{SatonClear} 마리</span>
        </div>
      </HellCleared>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: gray;

  width: 500px;
  padding: 24px;

  border-radius: 10px;
`;

const Nickname = styled.div`
  display: flex;

  h4 {
    display: inline-block;
    width: 120px;
    margin: 0;
    font-size: 1.1rem;
  }

  span {
    font-size: 0.85rem;
    font-weight: bold;
    align-self: flex-end;
  }
`;

const HellCleared = styled.div`
  padding: 6px 0;

  & > div + div {
    margin-top: 4px;
  }

  .title {
    display: inline-block;
    font-size: 0.9rem;
    color: white;
    width: 120px;
  }

  .content {
    color: white;
    font-size: 0.8rem;
  }
`;
