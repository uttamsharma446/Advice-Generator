import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";

const Main = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: hsl(218, 23%, 16%);

  @media (max-width: 520px) {
    padding: 20px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  max-width: 490px;
  width: 100%;
`;

export interface resType {
  id: number;
  advice: string;
}
export const Content = () => {
  const [data, setData] = useState<resType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const getAdvice = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://api.adviceslip.com/advice", {
        method: "GET",
      });

      if (response.ok) {
        const result = await response.json();
        if (result) {
          setData({
            id: result.slip.id,
            advice: result.slip.advice,
          });
        }
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  useEffect(() => {}, []);
  useEffect(() => {
    getAdvice();
  }, [isClicked]);
  return (
    <Main>
      {isLoading ? (
        <Container>
          {" "}
          <Card isLoader />
        </Container>
      ) : (
        <Container>
          <Card
            data={data}
            onClick={() => {
              setIsClicked((prev) => !prev);
            }}
          />
        </Container>
      )}
    </Main>
  );
};
