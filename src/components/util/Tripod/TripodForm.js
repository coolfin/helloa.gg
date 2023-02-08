import React, { useEffect, useMemo, useState } from "react";

import styled from "styled-components";
import { PlayerTripod } from "./playertp";
import "../util.css";

export default function TripodForm({ onTripodSelected, curSkill, curId }) {
  const tpsets = useMemo(
    () => PlayerTripod.getTripod(curId, curSkill[0]),
    [curId, curSkill]
  );

  // useEffect(() => {
  //   tpsets?.map((v) => console.log("map:", v["name"]));
  // }, [tpsets]);

  //같은 name에 대해서는 중복선택 안됨!
  return (
    <TripodContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(
            `${e.target.first.value}와 ${e.target.second.value}와 ${e.target.third.value}이 선택되었음.
            `
          );
        }}
      >
        <TripodInner>
          {tpsets?.map(
            (v, index) =>
              index <= 2 && (
                <TripodLabel
                  key={"lv1__" + index}
                  style={{
                    backgroundImage: `URL('/class_skills/gunlancer/tripods/${v[0]}.png')`,
                  }}
                >
                  <TripodBtn type="radio" name="first" value={v[0]} />
                  <TripodContent>
                    <div>{v[0]}</div>
                    <div className="tripod-content">{v[1]}</div>
                  </TripodContent>
                </TripodLabel>
              )
          )}
        </TripodInner>

        <TripodInner>
          {tpsets?.map(
            (v, index) =>
              3 <= index &&
              index <= 5 && (
                <TripodLabel
                  key={"lv2__" + index}
                  style={{
                    backgroundImage: `URL('/class_skills/gunlancer/tripods/${v[0]}.png')`,
                  }}
                >
                  <TripodBtn type="radio" name="second" value={v[0]} />

                  <TripodContent>
                    <div>{v[0]}</div>
                    <div className="tripod-content">{v[1]}</div>
                  </TripodContent>
                </TripodLabel>
              )
          )}
        </TripodInner>

        <TripodInner>
          {tpsets?.map(
            (v, index) =>
              6 <= index &&
              index <= 7 && (
                <TripodLabel
                  key={"lv3__" + index}
                  style={{
                    backgroundImage: `URL('/class_skills/gunlancer/tripods/${v[0]}.png')`,
                  }}
                >
                  <TripodBtn type="radio" name="third" value={v[0]} />

                  <TripodContent>
                    <label></label>
                    <div>{v[0]}</div>
                    <div className="tripod-content">{v[1]}</div>
                  </TripodContent>
                </TripodLabel>
              )
          )}
        </TripodInner>

        <ShareBtn>공유</ShareBtn>
      </form>
    </TripodContainer>
  );
}

const TripodContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  list-decoration: none;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

const TripodInner = styled.fieldset`
  max-width: 200px;
  width: 200px;

  max-height: 150px;
  height: 150px;

  overflow: scroll;

  display: flex;

  justify-content: space-around;
  align-items: center;
`;

const TripodBtn = styled.input`
  display:none;
`;

const TripodContent = styled.div`
  position: absolute;

  max-width: 300px;
  width: 300px;

  max-height: 80px;
  height: 80px;

  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-sizing: border-box;

  text-align: center;
  font-weight: bold;
  font-size: 0.8rem;

  color: black;

  background-color: white;

  z-index: -1;

  opacity: 0;
  transition: all ease 0.2s;
  transition-timing-function: ease-in;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  margin-top: 40px;

  & div:not(:last-child) {
    margin-bottom: 1rem;
  }

  & div.tripod-content {
    font-weight: normal;
  }
  ${TripodBtn}:hover + & {
    opacity: 1;
    z-index: 10;
  }
`;

const TripodLabel = styled.label`
  width: 32px;
  height: 32px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  border: 1px solid black;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }

  &:has(input[type="radio"]:checked) {
    border : 1px solid white;
    box-shadow: 0 0 8px 0 rgba(255,255,255,0.5);
    opacity: 1;
  }
`;

const ShareBtn = styled.button``;
