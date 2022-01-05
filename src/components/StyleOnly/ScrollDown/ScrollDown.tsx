import React from "react";
import styled, { keyframes } from "styled-components";

const UpAndDown = keyframes`
    0%{
        transform: translateY(0%);
    }

    50%{
        transform: translateY(-20%);
    }

    100%{
        transform: translateY(0%);
    }
`;

export const ScrolldownText = styled.div<ScrollDownStyleProps>`
  position: absolute;
  left: 1%;
  bottom: ${(props) => {
    return props.isRender ? "9%" : "-10%";
  }};
  opacity: ${(props) => {
    return props.isRender ? "1" : "0";
  }};
  animation: ${UpAndDown} 2s infinite;
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

interface ScrollDownStyleProps {
  isRender: boolean;
}

interface ScrollDownPropsType {
  pageRender: boolean;
}

const ScrollDown: React.FC<ScrollDownPropsType> = (props) => {
  return (
    <ScrolldownText isRender={props.pageRender}>SCROLLDOWN</ScrolldownText>
  );
};

export default ScrollDown;
