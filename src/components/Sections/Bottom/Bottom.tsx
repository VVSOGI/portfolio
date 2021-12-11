import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AllComponentProps } from "../../../types/types";
import Imageform from "../../Forms/Imageform/Imageform";
import MapNumber from "../../StyleOnly/MapNumber/MapNumber";

const BottomTotalContainer = styled.div`
  height: 100vh;
  background-color: transparent;
  position: relative;
  z-index: 5;
`;

const Bottom: React.FC<AllComponentProps> = (props) => {
  const [isIndexMatch, setIsIndexMatch] = useState<boolean>(false);
  const BottomIndex = 4;
  const projectObject = {
    headText: `FIND RECIPES \nBOBPAGO`,
    summaryText: "Enjoy the Recipe that Alphago AI recommends.",
  };
  const imageSource: string = "/images/bobpago.png";

  useEffect(() => {
    if (props.index === BottomIndex) {
      setIsIndexMatch(true);
    } else {
      setIsIndexMatch(false);
    }
  }, [props.index]);

  return (
    <BottomTotalContainer id="bottom" className="section 4">
      <Imageform indexMatch={isIndexMatch} imageSrc={imageSource} />
      <MapNumber indexMatch={isIndexMatch} number={`0${BottomIndex - 1}`} />
    </BottomTotalContainer>
  );
};

export default Bottom;
