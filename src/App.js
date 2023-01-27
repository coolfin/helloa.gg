import logo from './logo.svg';
import Nav from './components/Nav';
import './App.css';
import { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState();

  const showModal =() => {
    setModalOpen(true);
  }
  return (
    <div className='App'>
      <div className='app-container'>
        <button onClick={showModal} className="btn-modal">
          모달 생성하기
        </button>
        {modalOpen && <Modal setModalOpen = {setModalOpen} />}
      </div>
    </div>
  );
}

export default App;
