import React, { useState } from 'react'
import './Modal.css'
import styled from 'styled-components';

const HELL_DATA = [
  {id: null, value : '헬 컨텐츠를 선택해 주세요'},
  {id : '001', value: '[HELL]발탄'},
  {id : '002', value: '[HELL]비아키스'},
  {id : '003', value: '[HELL]쿠크세이튼'}
]

function Modal( { closeModal } ) {
  const [username, setUserName] = useState();
  const [dropdownhell, setDropDownHell] = useState('')

  const handleCloseModal = () => {
   // console.log('hi')
    closeModal();
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }

  const handleDropProduct = (e) => {
    const {value} = e.target;
    setDropDownHell(HELL_DATA.filter(item => item.value === value)[0].id);
  };

  return (
    <Background onClick={handleCloseModal}>
          <ModalContainer onClick={e => e.stopPropagation()}>
            <div>클리어를 인증해 주세요 :)</div>
            <div>
                <HellDropDown onChange={handleDropProduct}>
                {HELL_DATA.map(el => {
                  return <option key={el.id}>{el.value}</option>
                })}
              </HellDropDown>
            </div>

            <div>
              캐릭터 명:
              <input type="text" name="username" value={username} onChange={handleUserName}/>             
            </div>
            {username}  

            <div>
              이미지 첨부 or 내용 :
              <input type="text"/>
            </div>
              
            <div>
              <button>전달</button>
              <CloseIcon onClick={handleCloseModal}>취소</CloseIcon>
            </div>

          </ModalContainer>
    </Background>
  )
}

export default Modal

const Background = styled.div`
  position:fixed;
  top:0px;
  left:0px;
  bottom:0px;
  right:0px;
  
  background-color : rgba(0,0,0,0.5);
  z-index:0;
`

const ModalContainer = styled.div`
  position:fixed;
  left:50%;
  top:50%;

  padding: 16px;

  transfrom : translate(-50%,-50%);

  width: 20rem;
  height: 50vh;

  background: white;
  border-radius: 10px;

  text-align:center;
  margin-top: -25vh; 
  margin-left: -10rem; 
`

const CloseIcon = styled.button`
`

const HellDropDown = styled.select`
`