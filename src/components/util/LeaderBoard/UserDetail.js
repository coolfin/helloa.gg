import React from "react";
import styled from "styled-components";

export default function UserDetail({
  nickname,
  job,
  jobname,
  ValtanClear,
  VyakissClear,
  SatonClear,
  index,
  className,
}) {
  return (
    <Container className={className}>
      <Nickname>
        <div className="rank-txt">
          <strong>{index + 1}</strong>th
        </div>
        <div>
          <img className="job_img" src={"/class_icons/" + job + ".png"} />
          <div className="info-container">
            <div className="nickname-txt">{nickname}</div>
            <div className="job-txt">{jobname}</div>
          </div>
        </div>
      </Nickname>
      <HellCleared>
        <div>
          <img src ="http://via.placeholder.com/32x32"/>
          <div className="content">{ValtanClear}</div>
        </div>

        <div>
          <img src ="http://via.placeholder.com/32x32"/>
          <div className="content">{VyakissClear}</div>
        </div>

        <div>
          <img src ="http://via.placeholder.com/32x32"/>
          <div className="content">{SatonClear}</div>
        </div>
      </HellCleared>


      <Tripod>
        <img src="" />
      </Tripod>

    </Container>
  );
}

const Container = styled.div`
  background: rgb(60, 60, 60);

  display: flex;

  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;

  width: 90%;

  max-height: 50px;
  height: 50px;

  border-radius: 10px;

  & + & {
    margin-top: 12px;
  }
`;

const Nickname = styled.div`
  width: 30%;
  display: flex;

  justify-content: flex-start;
  align-items: center;

  box-sizing: border-box;

  flex: none;
  color: white;

  font-size: 0.6rem;

  .job_img {
    width: 32px;
    height: 32px;
  }

  & > div {
    display: flex;

    justify-content: center;
    align-items: center;

    margin-left: 24px;
  }

  .info-container {
    box-sizing : border-box;
    margin-left: 6px;
  }
  .nickname-txt {
    font-weight: bold;
    font-size : 0.8rem;
  }

  .job-txt {
    margin-top:3px;
  }
`;

const HellCleared = styled.div`
  width: 40%;
  display: flex;

  max-height:32px;
  height:32px;

  justify-content: flex-end;
  align-items: center;

  .content {
    width:30px;

    box-sizing : border-box;

    margin-left: 12px;

    color: white;
    font-size: 0.5rem;
  }
  & img {
    height:32px;
  }

  &>div {
    display : flex;

    justify-content: center;
    align-items: center;
  }
`;

const Tripod = styled.div`
  width: 10%;


  &:hover {
    cursor: pointer;

    opacity:60%;
  }
`
