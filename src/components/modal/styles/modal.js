import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Inner = styled.div`
  background-color: #0d0d0d;
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  @media (max-width: 750px) {
    width: 500px;
    height: 300px;
  }
`;

export const Heading = styled.h2`
  color: white;
  text-align: center;
  padding-top: 1.5rem;

  @media (min-width: 750px) {
    font-size: 40px;
  }
`;

export const Text = styled.p`
  color: white;
  text-align: center;
  padding: 10px;

  @media (min-width: 750px) {
    font-size: 25px;
  }
`;

export const Close = styled.button`
  margin-top: 0.7rem;
  margin-left: 41rem;
  position: absolute;
  color: white;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }

  @media (max-width: 750px) {
    margin-top: 0.7rem;
    margin-left: 28.5rem;
  }
`;
