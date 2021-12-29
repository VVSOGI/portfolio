import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AllComponentProps,
  TextAndImageStyleProps,
} from "../../../types/types";
import Imageform from "../../../../../components/Forms/Imageform/Imageform";
import MapNumber from "../../../../../components/StyleOnly/MapNumber/MapNumber";
import { Vimeo, Github } from "@styled-icons/entypo-social";

const BottomTotalContainer = styled.div`
  height: 100vh;
  background-color: transparent;
  position: relative;
  z-index: 5;
`;

const BottomTextForm = styled.div`
  position: absolute;
  left: 0%;
  top: 22%;
  margin-left: 9.5%;
  width: 70%;
  overflow: hidden;
  height: 50%;
  color: #fff;
  z-index: 5;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

const BottomTilteText = styled.div<TextAndImageStyleProps>`
  font-size: 120px;
  transform: ${(props) => {
    return props.isMatch ? `translateX(0%)` : `translateX(-70%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `1.2s` : `0s`;
  }};
`;

const BottomLine = styled.div<TextAndImageStyleProps>`
  width: 30%;
  height: 1%;
  background-color: #ff6c6c;
  margin-bottom: 1em;
  transform: ${(props) => {
    return props.isMatch ? `translateX(0%)` : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `1.5s` : `0s`;
  }};
`;

const BottomEtcContainer = styled.div<TextAndImageStyleProps>`
  display: flex;
  flex-direction: column;
  span {
    font-size: 28px;
  }
  transform: ${(props) => {
    return props.isMatch ? `translateX(0%)` : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `1.5s` : `0s`;
  }};
`;

const BottomIconContainer = styled.div`
  display: flex;
`;

const BottomLink = styled.a`
  z-index: 10;
  cursor: pointer;
  color: #fff;
  margin-top: 0.5em;
`;

const BottomVimeoIcons = styled(Vimeo)`
  width: 32px;
`;

const BottomGithubIcons = styled(Github)`
  width: 32px;
  margin-left: 1em;
`;

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
          <span>vvsogi@gmail.com</span>
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
