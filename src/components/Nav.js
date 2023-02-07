import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import "./Nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 30) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/?user=${e.target.value}`);
  };

  return (
    <Container className={`nav ${show && "nav__black"} `}>
      <img
        alt="Helloa logo"
        src="http://via.placeholder.com/80x40"
        className="nav__logo"
        onClick={() => (window.location.href = "/")}
      />

      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="유저 명을 검색해주세요."
      />

      <img
        alt="User logged"
        src="http://via.placeholder.com/40x40"
        className="nav__avatar"
      />
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;

  z-index: 100;

  padding: 20px;

  display: flex;
  
  justify-content: space-between;
  align-items: center;

  transition-timing-function: ease-in;
  transition: all 0.3s;
`;
