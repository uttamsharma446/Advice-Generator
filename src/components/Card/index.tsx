import React from "react";
import styled from "styled-components";
import { resType } from "../../App";
import { DiceIcon } from "../../Assests/DiceIcon";
import { DividerIcon } from "../../Assests/DividerIcon";
const Container = styled.div`
  background-color: hsl(217, 19%, 24%);
  text-align: center;
  width: 100%;
  border-radius: 10px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: 20px 20px 60px;
`;
const Title = styled.div`
  font-size: 11px;
  margin: 10px 0;
  color: hsl(150, 100%, 66%);
  line-height: 10px;
  letter-spacing: 6px;
  text-transform: uppercase;
  font-weight: bold;
`;
const Advice = styled.h1`
  margin: 10px 0;
  color: hsl(193, 38%, 86%);
  font-size: 18px;
  font-weight: 600;
`;
const Icon = styled.div`
  position: absolute;
  bottom: -30px;
  border-radius: 100%;
  background-color: hsl(150, 100%, 66%);
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Loader = styled.div`
  width: 490px;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(217, 19%, 24%);
`;
interface Props {
  onClick?: () => void;
  data?: resType | null;
  isLoader?: boolean;
}
export const Card: React.FC<Props> = ({ onClick, data, isLoader }) => {
  return (
    <Container>
      {!isLoader ? (
        <>
          {data && <Title>{`advice#${data.id}`}</Title>}
          {data && <Advice>{`"${data.advice}"`}</Advice>}
          <DividerIcon />
          <Icon
            onClick={() => {
              onClick && onClick();
            }}
          >
            <DiceIcon />
          </Icon>
        </>
      ) : (
        <Loader>
          <img src="loader.gif" alt="" />
        </Loader>
      )}
    </Container>
  );
};
