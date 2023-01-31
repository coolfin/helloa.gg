import React, { useState } from "react";
import styled from "styled-components";


function JobTripod({onJobSelected}) {

  const jobList = JOBS.map((item) => (
    <li key={item.id} name={item.name} onClick={() => {
      if(typeof onJobSelected === "function") onJobSelected(item.job);
    }}>
      <div>{item.job}</div>
    </li>
  ));

  return <JobListView>{jobList}</JobListView>;
}

export default JobTripod;

const Container = styled.div``;

const JobListView = styled.ul`
  display: flex;

  justify-content: flex-start;
  align-items: center;

  flex-direction: column;

  list-decoration: none;

  & li:hover {
    background-color: gray;
    cursor: pointer;
  }
`;


const JOBS = [
  { id: 1, job: "워로드" },
  { id: 2, job: "버서커" },
  { id: 3, job: "홀리나이트" },
  { id: 4, job: "디스트로이어" },
  { id: 5, job: "슬레이어" },
  { id: 6, job: "배틀마스터" },
  { id: 7, job: "창술사" },
  { id: 8, job: "인파이터" },
  { id: 9, job: "기공사" },
  { id: 10, job: "스트라이커" },
  { id: 11, job: "데빌헌터" },
  { id: 12, job: "블래스터" },
  { id: 13, job: "호크아이" },
  { id: 14, job: "스카우터" },
  { id: 15, job: "건슬링어" },
  { id: 16, job: "아르카나" },
  { id: 17, job: "서머너" },
  { id: 18, job: "바드" },
  { id: 19, job: "소서리스" },
  { id: 20, job: "데모닉" },
  { id: 21, job: "블레이드" },
  { id: 22, job: "리퍼" },
  { id: 23, job: "도화가" },
  { id: 24, job: "기상술사" },
];