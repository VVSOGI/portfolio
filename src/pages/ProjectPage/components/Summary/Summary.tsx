import React from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
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

const ImageContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }
`;

const TextContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  margin-top: 1.5em;
`;

const Summary = () => {
  return (
    <SummaryContainer className="summary">
      <ImageContainer>
        <img src="/images/imac2.png" alt="" />
      </ImageContainer>
      <TextContainer>
        냉장고에 있는 재료를 이용해서 최적의 레시피를 찾아보세요!
      </TextContainer>
    </SummaryContainer>
  );
};

export default Summary;
