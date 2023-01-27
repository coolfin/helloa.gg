import React from 'react'
import { useState } from 'react'
import Modal from './components/Modal/Modal'

function App() {
  const [showModal , setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
//    console.log('hi2')
    setShowModal(false);
  }
  return (
    <>
      <button onClick={handleOpenModal}>모달 열기</button>
      {showModal && <Modal closeModal = {handleCloseModal}/>}
    </>
  )
}

export default App