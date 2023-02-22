import React from 'react'

import styled from 'styled-components';

function AlertModal({text}) {
  return (
    <ModalContainer>{text}</ModalContainer>
  )
}

export default AlertModal;

const ModalContainer = styled.div`
    width: 10.4%;
    height: 4.6%;

    position: absolute;
    top:50%;

    display:flex;
    
    justify-content : center;
    align-items: center;

    color: white;
    font-weight: bold;

    z-index: 999;
    


    background-color : rgba(22,25,34,0.5);
    
`;