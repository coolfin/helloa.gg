import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     console.log("window.scrollY", window.scrollY);
  //     if (window.scrollY > 30) {
  //       setShow(true);
  //     } else {
  //       setShow(false);
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", () => {});
  //   };
  // }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/?user=${e.target.value}`);
  };

  return (
    <Container className={`nav`}>
      <img
        alt="Helloa logo"
        src="http://via.placeholder.com/80x40"
        className="nav__logo"
        onClick={() => (window.location.href = "/")}
      />

      <img
        alt="Tripod logo"
        src="http://via.placeholder.com/40x40"
        className="nav__input"
        onClick={() => (window.location.href = "/login")}
      />

      <img
        alt="User logged"
        src="http://via.placeholder.com/40x40"
        className="nav__avatar"
        onClick={() => (window.location.href = "/tripod")}
      />
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  height: 4.6%;

  z-index: 100;

  box-sizing: border-box;

  background-color: skyblue;

  display: flex;

  justify-content: space-between;
  align-items: center;
`;

