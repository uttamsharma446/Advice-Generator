import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  max-width: 420px;
  width: 100%;
  justify-content: evenly;
  gap: 30px;
`;
const Line = styled.span`
  width: 100%;
  height: 1px;
  position: relative;
  background-color: #c7c7c7;
`;
const VerticalRightLine = styled.span`
  position: absolute;
  width: 5px;
  height: 18px;
  top: -8px;
  right: -12px;
  background-color: #ffffff;
  border-radius: 10px;
`;
const VerticalLeftLine = styled.span`
  position: absolute;
  width: 5px;
  height: 18px;
  top: -8px;
  left: -12px;
  background-color: #ffffff;
  border-radius: 10px;
`;
export const Divider = () => {
  return (
    <Container>
      <Line>
        <VerticalRightLine></VerticalRightLine>
      </Line>
      <Line>
        <VerticalLeftLine></VerticalLeftLine>
      </Line>
    </Container>
  );
};
