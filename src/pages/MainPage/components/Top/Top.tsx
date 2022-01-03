/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Scramble from "../../../../components/StyleOnly/Scramble/Scramble";
import { AllComponentProps } from "../../types/types";
import {
  TopTotalContainer,
  NameTextContainer,
  NameText,
  FrontendText,
  ScrolldownText,
} from "./styles";

const Top: React.FC<AllComponentProps> = (props) => {
  const topIndex = 1;

  return (
    <TopTotalContainer id="top" className="section 1">
      <NameTextContainer>
        <Scramble topIndex={topIndex} index={props.index} />
        <NameText componentIndex={topIndex} propsIndex={props.index}>
          WOOSEOK KIM
        </NameText>
        <FrontendText componentIndex={topIndex} propsIndex={props.index}>
          Frontend Developer / <br /> Clever communicator
        </FrontendText>
      </NameTextContainer>
      <ScrolldownText componentIndex={topIndex} propsIndex={props.index}>
        SCROLLDOWN
      </ScrolldownText>
    </TopTotalContainer>
  );
};

export default Top;
