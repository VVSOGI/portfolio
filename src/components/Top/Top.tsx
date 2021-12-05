import React from "react";
import styled from "styled-components";
import Line from "../Line/Line";
import { TopStyleProps, TopComponentProps } from "../../types/types";

const TopTotalContainer = styled.div`
  height: 100vh;
  background-color: transparent;
  position: relative;
  z-index: 5;
`;

const EarthImage = styled.img`
  position: absolute;
  width: 30em;
  height: 30em;
  right: 100px;
  top: 140px;
  z-index: 2;
`;

const PortfolioText = styled.div`
  font-size: 64px;
  position: absolute;
  color: #ffed9b;
  right: 15%;
  top: 45%;
  z-index: 3;
  font-weight: 600;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  letter-spacing: 8px;
`;

const NameTextContainer = styled.div`
  position: absolute;
  left: 0%;
  top: 25%;
  margin-left: 9.5%;
  width: 100%;
  overflow: hidden;
  height: 100%;
`;

const NameText = styled.div<TopStyleProps>`
  width: 50%;
  font-size: 100px;
  font-weight: 500;
  letter-spacing: 8px;
  line-height: 1.1em;
  color: #fff;
  transform: ${(props) => {
    return props.componentIndex === props.propsIndex
      ? "translateX(0%)"
      : "translateX(-100%)";
  }};
  text-shadow: 0 0px 20px rgba(156, 156, 156, 0.281);
  transition: 1s;
`;
//-100.5
const FrontendText = styled.div<TopStyleProps>`
  position: absolute;
  color: #fff;
  left: 0.2%;
  top: 42%;
  font-size: 24px;
  font-weight: 400;
  text-shadow: 0 0px 5px rgba(250, 250, 250, 0.5);
  transform: ${(props) => {
    return props.componentIndex === props.propsIndex
      ? "translateX(0%)"
      : "translateX(-100.5%)";
  }};
  transition: 1s;
  background-color: transparent;
`;

const ScrolldownText = styled.div<TopStyleProps>`
  position: absolute;
  left: 2%;
  bottom: ${(props) => {
    return props.componentIndex === props.propsIndex ? "8%" : "-21%";
  }};
  opacity: ${(props) => {
    return props.componentIndex === props.propsIndex ? "1" : "0";
  }};
  writing-mode: vertical-rl;
  color: #fff;
  background-color: transparent;
  letter-spacing: 5px;
  height: 10em;
  z-index: 10;
  transition: 1s;
  font-size: 12px;
  ::before {
    width: 1%;
    content: "";
    background-color: #fff;
    height: 30%;
    position: absolute;
    bottom: -50%;
    left: 50%;
  }
`;

const Top: React.FC<TopComponentProps> = (props) => {
  let topIndex = 0;

  return (
    <TopTotalContainer id="top" className="section 1">
      <EarthImage src="/images/earth.png"></EarthImage>
      <PortfolioText>PORTFOLIO</PortfolioText>
      <NameTextContainer>
        <NameText componentIndex={topIndex} propsIndex={props.index}>
          WOOSEOK KIM
        </NameText>
        <FrontendText componentIndex={topIndex} propsIndex={props.index}>
          Frontend Developer / Clever communicator
        </FrontendText>
      </NameTextContainer>
      <Line />
      <ScrolldownText componentIndex={topIndex} propsIndex={props.index}>
        SCROLLDOWN
      </ScrolldownText>
    </TopTotalContainer>
  );
};

export default Top;
