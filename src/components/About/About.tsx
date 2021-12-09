import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AllComponentProps } from "../../types/types";
import Imageform from "../Imageform/Imageform";
import MapNumber from "../MapNumber/MapNumber";
import Textform from "../Textform/Textform";

const AboutTotalContainer = styled.div`
  height: 100vh;
  background-color: transparent;
  position: relative;
  z-index: 5;
`;

const About: React.FC<AllComponentProps> = (props) => {
  const [isIndexMatch, setIsIndexMatch] = useState<boolean>(false);
  const aboutIndex = 3;
  const aboutObject = {
    headText: `About Me`,
    summaryText:
      "Love Development, Love Planning \nAlso Love Desing and Communicate",
  };
  const imageSource: string = "/images/paintingme.png";

  useEffect(() => {
    if (props.index === aboutIndex) {
      setIsIndexMatch(true);
    } else {
      setIsIndexMatch(false);
    }
  }, [props.index]);
  return (
    <AboutTotalContainer id="about" className="section 3">
      <Textform
        headText={aboutObject.headText}
        summaryText={aboutObject.summaryText}
        indexMatch={isIndexMatch}
      />
      <Imageform indexMatch={isIndexMatch} imageSrc={imageSource} />
      <MapNumber indexMatch={isIndexMatch} number={`0${aboutIndex - 1}`} />
    </AboutTotalContainer>
  );
};

export default About;
