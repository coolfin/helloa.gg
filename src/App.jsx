import { useState } from "react";

//Util
import Modal from "./components/util/Modal/Modal";

//Pages
import Main from "./components/pages/Main";
import LeaderBoard from "./components/pages/LeaderBoard";
import Login from "./components/pages/Login";
import Tripod from "./components/pages/Tripod";
import MyPage from "./components/pages/MyPage";
import Register from "./components/pages/Register";
import ConfirmRegister from "./components/pages/ConfirmRegister";

//Css
import styled from "styled-components";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import "./App.css";
import NotFound from "./components/pages/NotFound";
import Findpw from "./components/pages/Findpw";

function App() {
  const [showModal, setShowModal] = useState(false);
  const isAuthor = sessionStorage.getItem("id");

  // const handleOpenModal = () => setShowModal(true);
  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };
  return (
    <Container>
      {/* {isAuthor ? navigate("/login") : navigate("/")} */}

      <Routes>
        <Route element={<Main />} path="/" exact />
        <Route element={<LeaderBoard />} path="/leaderboard" />
        <Route element={<Tripod />} path="/tripod" />
        <Route element={<MyPage />} path="/mypage/:userId" />

      
        
        <Route element={<Login />} path="/login"/> 
        <Route element={<Register />} path="/register" />
        <Route element={<Findpw/>} path="/findpw" />
        <Route element={<ConfirmRegister/>} path="/confirm"/>

        <Route  element={<Navigate to ="/"></Navigate>} path="/*"/>
      </Routes>
{/* 
      <ClearBtn onClick={handleOpenModal}>클리어 인증하기</ClearBtn>
      {showModal && <Modal closeModal={handleCloseModal} />} */}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  overflow:scroll;

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
