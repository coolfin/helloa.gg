import React, { useState, useEffect, useMemo } from 'react';

import styled from 'styled-components';
import { PlayerSkill, playerskills } from './playerskills';

function SkillForm({ onSkillSelected, curId }) {
  const skillsets = useMemo(() => PlayerSkill.getSkill(curId), [curId]);
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    setLevels(skillsets?.map((_) => 0) ?? []);
  }, [skillsets]);

  const setLevel = (skillIndex, delta = 1) => {
    const _levels = [...levels];
    _levels[skillIndex] = Math.max(0, _levels[skillIndex] + delta);

    setLevels(_levels);
  };

  return (
    <SkillListView>
      {JSON.stringify(levels)}
      {JSON.stringify(skillsets)}

      {skillsets?.map((skill, index) => (
        <li key={index}>
          <button onClick={() => setLevel(index, 1)}>+</button>
          {levels[index]}
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
