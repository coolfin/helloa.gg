import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { playerskills } from './playerskills';

function SkillForm({ onSkillSelected, curId }) {
  // const skillJobFilter = SKILLS.filter((item) => {
  //   return item.name === curJob
  // })
  // const skillList = skillJobFilter.map((item) => (
  //   <li>{item.id}</li>

  const [lv, setLv] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  //스킬 21개
  useEffect(() => {
    console.log('lv :', lv); //상태값 변경 시 제대로 state가 변경되는지 확인
  }, [lv]);

  const skillset = playerskills.getSkill(curId);

  console.log(lv);
  return (
    <SkillListView>
      {skillset &&
        Object.entries(skillset).map(([k, v]) => (
          <li key={k}>
            <div>
              <img src="https://via.placeholder.com/30x30" />
            </div>
            <div>{v}</div>
            <div>
              <input
                type="button"
                value="o"
                onClick={() => {
                  lv[k] += 1;
                }}
              />
              {lv[k]}
              <input
                type="button"
                value="x"
                onClick={() => {
                  lv[k] -= 1;
                }}
              />
            </div>
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
