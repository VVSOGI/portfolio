import React from "react";
import { SummaryContainer, ImageContainer, TextContainer } from "./styles";

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
