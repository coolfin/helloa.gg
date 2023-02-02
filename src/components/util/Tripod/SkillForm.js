import React, { useState, useEffect, useMemo } from "react";

import styled from "styled-components";
import { PlayerSkill, playerskills } from "./playerskills";

const SKILL_ICR = [1,1,2,4,4,8,8,8,12,6,6]

function SkillForm({ onSkillSelected, curId }) {
  const skillsets = useMemo(() => PlayerSkill.getSkill(curId), [curId]);
  const [levels, setLevels] = useState([]);
  const [totalpt, setTotalPt] = useState(0);

  useEffect(() => {
    setLevels(skillsets?.map((_) => 0) ?? []);
  }, [skillsets]);


  const setLevel = (skillIndex, delta = 1) => {
    const _levels = [...levels];

    //스킬 못찍게 만들기
    if (SKILL_ICR[_levels[skillIndex]+1]+ totalpt >= 50) { alert('못찍어'); return}

    _levels[skillIndex] = Math.min(11,Math.max(0, _levels[skillIndex] + delta));
    setLevels(_levels);


    const sum = _levels.map((lv) => {
      return SKILL_ICR.slice(0,lv).reduce((p,a) => p+a , 0)
    })
    console.log(sum);
    setTotalPt(sum.reduce((p,a) => p+a,0))
  };

  return (
    <SkillListView>
      {JSON.stringify(levels)}
      {JSON.stringify(skillsets)}
      {totalpt}/404
      {skillsets?.map((skill, index) => (
        <li key={index}>
          <button onClick={() => setLevel(index, 1)}>+</button>
          {levels[index]+1}
          <button onClick={() => setLevel(index, -1)}>-</button>
        </li>
      ))}
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
  & li:hover {
    background-color: gray;
    cursor: pointer;
  }
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
`;
