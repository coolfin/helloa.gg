import React from 'react';
import styled from 'styled-components';

export default function UserDetail({
  nickname,
  job,
  ValtanClear,
  VyakissClear,
  SatonClear,
  className,
}) {
  return (
    <Container className={className}>
      <Nickname>
        <div>{nickname}</div>
        <div>
          <img className='job_img'/>
        </div>
      </Nickname>
    
      <HellCleared>
        <div>
          <span className="content">{ValtanClear} 마리</span>
        </div>

        <div>
          <span className="content">{VyakissClear} 마리</span>
        </div>

        <div>
          <span className="content">{SatonClear} 마리</span>
        </div>

        <div>
          <span className='content'>{ValtanClear+SatonClear+VyakissClear} 마리</span>
        </div>
      </HellCleared>
    </Container>
  );
}

const Container = styled.div`
  background: rgb(50,50,50);

  display: flex;

  justify-content: space-between;
  align-items: center;

  box-sizing:border-box;

  width: 100%;
  
  max-height: 50px;
  height:50px;

  border-radius: 10px;
`;

const Nickname = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  flex: none;
  color:white;

  font-size: 0.6rem;

  .job_img {
    width: 32px;
    height: 32px;

    background-color:white;
  }
`;

const HellCleared = styled.div`
  display: flex;

  margin-left : auto;

  justify-content: space-between;
  align-items: center;

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
