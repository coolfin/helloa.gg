import React from 'react'
import { useState } from 'react'

import Modal from './components/Modal/Modal'
import HellUser from './components/LeaderBoard/HellUser';

import styled from 'styled-components';

function App() {
  const [showModal , setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
//    console.log('hi2')
    setShowModal(false);
  }
  return (
    <Container>
      <button onClick={handleOpenModal}>클리어 인증하기</button>
      {showModal && <Modal closeModal = {handleCloseModal}/>}
      
      <HellUser />
    </Container>
  )
}

export default App

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`