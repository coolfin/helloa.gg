import React from 'react'

import styled from "styled-components";

function NotFound() {
  return (
    <Container>현재 요청하신 페이지는 존재하지 않습니다.</Container>
  )
}

export default NotFound

const Container = styled.div`
    width:100%;
    height:100%;

    display: flex;

    justify-content:center;
    align-items: center;

    font-size: 2rem;
    color:white;
`;