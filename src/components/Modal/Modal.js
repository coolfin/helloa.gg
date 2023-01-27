import React from 'react'
import './Modal.css'
function Modal( {setModalOpen} ) {

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="Modal">
        <div className='container-modal'>
            <button onClick={closeModal}>X</button>
            <p>모달 창 입니다.</p>
        </div>
    </div>
  )
}

export default Modal