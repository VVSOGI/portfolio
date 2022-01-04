import styled from "styled-components";

export const SummaryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 110vh;
  background-color: #fff;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }
`;

export const TextContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  margin-top: 1.5em;
  @media only screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
