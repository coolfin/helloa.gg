import React, { Fragment } from "react";
import { useState } from "react";

//Util
import Modal from "./components/util/Modal/Modal";
import PublicRoute from "./components/PublicRoute";
import Nav from "./components/Nav";
import Tripod from "./components/pages/Tripod";

//Pages
import Main from "./components/pages/Main";
import MyPage from "./components/pages/MyPage";

//Css
import styled from "styled-components";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <Nav />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Tripod />} path="/tripod" />
        {/* <PrivateRoute component={MyPage} path="/mypage" exact /> */}
      </Routes>

      <ClearBtn onClick={handleOpenModal}>클리어 인증하기</ClearBtn>
      {showModal && <Modal closeModal={handleCloseModal} />}
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClearBtn = styled.button`
  position: fixed;

  max-width: 120px;
  width: 120px;

  max-height: 40px;
  height: 40px;

  z-dinex: 990;

  right: 3%;
  bottom: 5%;

  background-color: rgb(13, 19, 19);
  border : .5px solid white;
  border-radius: 10px;

  color:white;

  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;
