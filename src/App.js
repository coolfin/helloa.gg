import React, { Fragment } from "react";
import { useState } from "react";

import Modal from "./components/Modal/Modal";
import Main from "./components/Main";
import MyPage from "./components/MyPage";

import PublicRoute from "./components/PublicRoute";

import styled from "styled-components";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    //    console.log('hi2')
    setShowModal(false);
  };
  return (
    <Container>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Modal />} path="/clear" />
        {/* <PrivateRoute component={MyPage} path="/mypage" exact /> */}
      </Routes>

      <button onClick={handleOpenModal}>클리어 인증하기</button>
      {showModal && <Modal closeModal={handleCloseModal} />}
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: gray;
`;
