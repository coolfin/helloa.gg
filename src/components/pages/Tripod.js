import React from 'react';
import styled from 'styled-components';
import JobTripod from '../JobTripod';

export default function Tripod() {
  return (
    <Container>
      <JobImage>
        <img src="https://via.placeholder.com/150x500" />
      </JobImage>
      <TripodContainer>
        트라이포드 창
        <label>
          <input type="radio" value="통찰력" />
        </label>
      </TripodContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  height: 80vh;

  display: flex;

  justify-content: flex-start;
  align-items: center;

  color: white;

  border-right: 1px solid gray;
  border-left: 1px solid gray;
`;

const TripodContainer = styled(JobTripod)``;

const JobImage = styled.div`
  & img {
  }
`;
