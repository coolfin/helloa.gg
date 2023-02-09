import React, { Fragment } from "react";
import { useState } from "react";

//Util
import Modal from "./components/util/Modal/Modal";
import Nav from "./components/Nav";

//Pages
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";
import Tripod from "./components/pages/Tripod";
import MyPage from "./components/pages/MyPage";
import Register from "./components/pages/Register";

//Css
import styled from "styled-components";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const isAuthor = sessionStorage.getItem("id");
  const navigate = useNavigate("");

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <Nav />
      {/* {isAuthor ? navigate("/login") : navigate("/")} */}

      <Routes>
        <Route element={<Main />} path="/" exact />
        <Route element={<Tripod />} path="/tripod" />
        <Route element={<MyPage />} path="/mypage" />

      
        <Route element={<Login />} path="/login"/> 
        <Route element={<Register />} path="/register" />
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
  border: 0.5px solid white;
  border-radius: 10px;

  color: white;

  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;
