import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AllComponentProps } from "../../../types/types";
import Imageform from "../../../../../components/Forms/Imageform/Imageform";
import MapNumber from "../../../../../components/StyleOnly/MapNumber/MapNumber";
import Textform from "../../../../../components/Forms/Textform/Textform";

const ProjectTotalContainer = styled.div`
  height: 100vh;
  background-color: transparent;
  position: relative;
  z-index: 5;
`;

const Project: React.FC<AllComponentProps> = (props) => {
  const [isIndexMatch, setIsIndexMatch] = useState<boolean>(false);
  const ProjectIndex = 2;
  const projectObject = {
    headText: `FIND RECIPES \nBOBPAGO`,
    summaryText: "Enjoy the Recipe that Alphago AI recommends.",
  };
  const imageSource: string = "/images/bobpago.png";

  useEffect(() => {
    if (props.index === ProjectIndex) {
      setIsIndexMatch(true);
    } else {
      setIsIndexMatch(false);
    }
  }, [props.index]);

  return (
    <ProjectTotalContainer id="project" className="section 2">
      <Textform
        headText={projectObject.headText}
        summaryText={projectObject.summaryText}
        indexMatch={isIndexMatch}
        pageIndex={props.index}
      />
      <Imageform indexMatch={isIndexMatch} imageSrc={imageSource} />
      <MapNumber indexMatch={isIndexMatch} number={`0${ProjectIndex - 1}`} />
    </ProjectTotalContainer>
  );
};

export default Project;
