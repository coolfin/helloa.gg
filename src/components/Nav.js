import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

  &.nav__black {
    background-color: gray;
  }

  &>img.nav__logo {
    position: fixed;
    left: 40px;
    width: 80px;
    object-fit: contain;
  }

  &>img.nav__avatar {
    position: fixed;
    right: 40px;
    width: 30px;
    object-fit: contain;
  }

  &>img.nav__input {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0%);
    border-radius: 5px;
    padding: 5px;
    border: 1px solid white;
  }
`;
