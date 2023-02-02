import React from "react";

import styled from "styled-components";

export default function TripodForm({ onTripodSelected, curSkill }) {
  return (
    <TripodContainer>
      <div>{curSkill}</div>
    </TripodContainer>
  );
}

const TripodContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  list-decoration: none;
`;