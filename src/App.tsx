import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: hsl(218, 23%, 16%);
  @media (max-width: 324px) {
    padding: 10px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 490px;
`;

export interface resType {
  id: number;
  advice: string;
}
function App() {
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
          console.log(result);
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
}

export default App;
