import React, { useEffect, useState } from "react";
import { AllComponentProps } from "../../types/types";
import Imageform from "../../../../components/Forms/Imageform/Imageform";
import MapNumber from "../../../../components/StyleOnly/MapNumber/MapNumber";
import {
  BottomTotalContainer,
  BottomTextForm,
  BottomTilteText,
  BottomLine,
  BottomEtcContainer,
  BottomIconContainer,
  BottomLink,
  BottomVimeoIcons,
  BottomGithubIcons,
} from "./styles";

const Bottom: React.FC<AllComponentProps> = (props) => {
  const [isIndexMatch, setIsIndexMatch] = useState<boolean>(false);
  const BottomIndex = 4;
  const imageSource: string = "/images/art.png";

  useEffect(() => {
    if (props.index === BottomIndex) {
      setIsIndexMatch(true);
    } else {
      setIsIndexMatch(false);
    }
  }, [props.index]);

  return (
    <BottomTotalContainer id="bottom" className="section 4">
      <BottomTextForm>
        <BottomTilteText isMatch={isIndexMatch}>Contact Me.</BottomTilteText>
        <BottomLine isMatch={isIndexMatch} />
        <BottomEtcContainer isMatch={isIndexMatch}>
          <a href="mailto:vvsogi@gmail.com">vvsogi@gmail.com</a>
          <span>+82 10-2472-8825</span>
          <BottomIconContainer>
            <BottomLink href="https://velog.io/@vvsogi">
              <BottomVimeoIcons />
            </BottomLink>
            <BottomLink href="https://github.com/VVSOGI">
              <BottomGithubIcons />
            </BottomLink>
          </BottomIconContainer>
        </BottomEtcContainer>
      </BottomTextForm>
      <Imageform indexMatch={isIndexMatch} imageSrc={imageSource} />
      <MapNumber indexMatch={isIndexMatch} number={`0${BottomIndex - 1}`} />
    </BottomTotalContainer>
  );
};

export default Bottom;
