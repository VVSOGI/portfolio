/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styled from "styled-components";
import { TextScramble } from "../../../functions/TextScramble/TextScramble";
import { TopStyleProps } from "../../../pages/MainPage/types/types";

export const PortfolioText = styled.div<TopStyleProps>`
  font-size: 130px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  font-weight: 600;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.893);
  letter-spacing: 8px;
  transform: ${(props) => {
    return props.componentIndex === props.propsIndex
      ? "translateX(0%)"
      : "translateX(-100%)";
  }};
  transition: ${(props) => {
    return props.componentIndex === props.propsIndex ? "1s" : "0.5s";
  }};
  transition-delay: ${(props) => {
    return props.componentIndex === props.propsIndex
      ? `${props.isMouseMove ? "0s" : "0.5s"}`
      : "0s";
  }};
`;

interface ScrambleProps {
  topIndex: number;
  index: number;
}

const Scramble: React.FC<ScrambleProps> = (props) => {
  const phrases = [
    "PORTFOLIO",
    "FRONT-END",
    "DEVELOPER,",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "REACT",
    "REDUX",
  ];
  const colors = ["#ff6060", "#4eafff", "#ffffff", "#ff771c", "#ffdf52"];

  useEffect(() => {
    const el = document.getElementById("portfolio");
    if (el) {
      const fx = new TextScramble(el);
      let count = 0;
      let colorCount = 0;
      const next = () => {
        fx.setText(phrases[count]).then(() => {
          setTimeout(next, 2000);
        });
        el.style.color = colors[colorCount];
        count = (count + 1) % phrases.length;
        colorCount = (colorCount + 1) % colors.length;
      };
      next();
    }
  }, []);

  return (
    <PortfolioText
      id="portfolio"
      componentIndex={props.topIndex}
      propsIndex={props.index}
    >
      PORTFOLIO
    </PortfolioText>
  );
};

export default Scramble;
