import React, { useState, useEffect, useMemo } from "react";

import styled from "styled-components";
import { PlayerSkill } from "./playerskills";

const SKILL_ICR = [1, 1, 2, 4, 4, 8, 8, 8, 12, 6, 6];

function SkillForm({ onSkillSelected, curId }) {
  const skillsets = useMemo(() => PlayerSkill.getSkill(curId), [curId]);
  const [levels, setLevels] = useState([]);
  const [totalpt, setTotalPt] = useState(0);

  useEffect(() => {
    setLevels(skillsets?.map((_) => 0) ?? []);
    setTotalPt(0);
  }, [skillsets]);

  const setLevel = (skillIndex, delta = 1) => {
    const _levels = [...levels];

    //스킬 못찍게 만들기
    //console.log(_levels[skillIndex]);
    if (SKILL_ICR[_levels[skillIndex] + 1] * delta + totalpt > 50) {
      alert("못찍어");
      return;
    }

    _levels[skillIndex] = Math.min(
      11,
      Math.max(0, _levels[skillIndex] + delta)
    );
    setLevels(_levels);

    const sum = _levels.map((lv) => {
      return SKILL_ICR.slice(0, lv).reduce((p, a) => p + a, 0);
    });
    setTotalPt(sum.reduce((p, a) => p + a, 0));
  };

  return (
    <SkillListView>
      {/* {JSON.stringify(levels)}
      {JSON.stringify(skillsets)} */}
      <TotalPoint>{totalpt}/404</TotalPoint>
      {skillsets?.map((skill, index) => (
        <li key={"skill__" + index}>
          <div
            onClick={() => {
              if (typeof onSkillSelected === "function")
                onSkillSelected(skill, levels[index] + 1);
            }}
          >
            <img
              src={"/class_skills/gunlancer/" + skill + ".png"}
              className="skill-icon"
            />
            <div>{skill}</div>
          </div>

          <div className="skill-lv-container">
            <button onClick={() => setLevel(index, 1)}>+</button>
            {levels[index] + 1}
            <button onClick={() => setLevel(index, -1)}>-</button>
          </div>
        </li>
      ))}
      <ResetBtn
        className="reset"
        onClick={() => {
          setTotalPt(0);
          setLevels(skillsets?.map((_) => 0) ?? []);
        }}
      >
        reset
      </ResetBtn>
    </SkillListView>
  );
}

export default SkillForm;

const SkillListView = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  list-decoration: none;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  & li {
    list-style: none;
    max-width: 300px;
    width: 300px;
    max-height: 50px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  & li > div.skill-lv-container {
    width: 150px;

    display: flex;

    justify-content: space-between;
    align-items: center;
  }

  & li button {
    background-color: gray;
    border: 0.1em solid white;

    color: white;

    &:hover {
      cursor: pointer;
    }
  }

  & div {
    max-width: 200px;
    width: 200px;

    box-sizing: border-box;

    display: flex;

    justify-content: center;
    align-items: center;
  }

  & div:hover {
    cursor: pointer;
    opacity: 80%;
  }
`;

const ResetBtn = styled.button`
  max-width: 80px;
  width: 80px;

  max-height: 30px;
  height: 30px;

  border: 1px solid white;
  border-radius: 10px;
  background-color: rgb(13, 19, 19);

  color: white;

  &:hover {
    cursor: pointer;
    opacity: 80%;
  }
`;

const TotalPoint = styled.div`
  color: white;

  font-weight: bold;
  font-size: 1rem;

  box-sizing: border-box;

  padding-bottom: 24px;

  text-align: center;
`;
