import React, { useEffect, useMemo } from "react";

import styled from "styled-components";
import { PlayerTripod } from "./playertp";

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
            `${e.target.first.value}와 ${e.target.second.value}와 ${e.target.third.value}이 선택되었음.`
          );
        }}
      >
        <TripodInner>
          <legend>1단계</legend>
          {tpsets?.map(
            (v, index) =>
              index <= 2 && (
                <TripodLabel>
                  <TripodBtn type="radio" name="first" value={v[0]} />
                  <div>{v[0]}</div>
                  <div>{v[1]}</div>
                </TripodLabel>
              )
          )}
        </TripodInner>

        <TripodInner>
          <legend>2단계</legend>
          {tpsets?.map(
            (v, index) =>
              3 <= index &&
              index <= 5 && (
                <TripodLabel>
                  <TripodBtn type="radio" name="second" value={v[0]} />
                  <div>{v[0]}</div>
                  <div>{v[1]}</div>
                </TripodLabel>
              )
          )}
        </TripodInner>

        <TripodInner>
          <legend>3단계</legend>
          {tpsets?.map(
            (v, index) =>
              6 <= index &&
              index <= 7 && (
                <TripodLabel>
                  <TripodBtn type="radio" name="third" value={v[0]} />
                  <div>{v[0]}</div>
                  <div>{v[1]}</div>
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
`;

const TripodInner = styled.fieldset``;

const TripodBtn = styled.input``;

const TripodLabel = styled.label``;

const ShareBtn = styled.button``;
