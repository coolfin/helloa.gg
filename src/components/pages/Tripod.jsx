import React, { useState, useEffect } from "react";
import * as authAPI from "../../service/auth";

import styled from "styled-components";
import JobTripod from "../util/Tripod/JobTripod";
import TripodForm from "../util/Tripod/TripodForm";
import SkillForm from "../util/Tripod/SkillForm";
import Header from "../views/Header";
import Nav from "../views/Nav";

export default function Tripod() {
  const [curjob, setCurJob] = useState("워로드");
  const [curjobid, setCurJobId] = useState(1);

  const [curskill, setCurSkill] = useState([0, 0]);

  useEffect(() => {
    console.log("eff:", curskill);
  }, [curskill]);

  const handleJobSelect = (value, id) => {
    setCurJob(value);
    setCurJobId(id);

    {
      curjobid !== id && setCurSkill([0, 0]);
    }
  };

  const handleSkillSelect = (sk, lv, id) => {
    setCurSkill([sk, lv]);
  };

  const handleTpSelect = () => {};
  // useEffect(() => {
  //   console.log(curjob);//상태값 변경 시 제대로 state가 변경되는지 확인
  // }, [curjob]);

  return (
    <Container>
      <Header/>
      <Nav/>
      {window.sessionStorage.getItem("id")}
      <InnerContainer>
        <JobTripod onJobSelected={handleJobSelect} />
      </InnerContainer>

      <InnerContainer>
        <SkillForm onSkillSelected={handleSkillSelect} curId={curjobid} />
      </InnerContainer>

      <InnerContainer>
        <TripodForm
          onTripodSelected={handleTpSelect}
          curId={curjobid}
          curSkill={curskill}
        />
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  height: 80vh;

  display: flex;

  justify-content: space-between;
  align-items: center;

  color: white;

  border-right: 1px solid gray;
  border-left: 1px solid gray;
`;

const InnerContainer = styled.div`
  width: 32%;

  display: flex;

  justify-content: center;
  align-items: center;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;
