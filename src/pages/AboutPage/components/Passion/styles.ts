import styled from "styled-components";
import { PassionStylesProps } from "../../types/types";

export const PassionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const PassionMainContainer = styled.div<PassionStylesProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    return props.bgColor;
  }};
  overflow: hidden;
`;

export const PassionBigText = styled.span<PassionStylesProps>`
  font-size: 140px;
  font-weight: 800;
  position: absolute;
  top: ${(props) => {
    return props.passionEnter ? props.pos + "%" : "0%";
  }};
  left: 5%; // -45%
  transform: translateY(-5%);
  transition: 1s;
  transition-delay: ${(props) => {
    return props.passionEnter ? ".5s" : "0";
  }};
  color: ${(props) => {
    return props.bgColor;
  }};
  z-index: ${(props) => {
    return props.pos;
  }};
  font-family: "Black Han Sans", sans-serif;
  /* writing-mode: vertical-rl; */
  @media only screen and (max-width: 1024px) {
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PassionTextContainer = styled.div<PassionStylesProps>`
  position: absolute;
  right: ${(props) => {
    return props.passionEnter ? "5%" : "-45%";
  }};
  top: 10%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1s;
  transition-delay: ${(props) => {
    return props.passionEnter ? ".8s" : "0";
  }};
  @media only screen and (max-width: 1024px) {
    position: relative;
    align-items: flex-start;
    width: 80%;
    right: ${(props) => {
      return props.passionEnter ? "0%" : "-45%";
    }};
    top: 0%;
  }
`;

export const PassionHeadText = styled.span`
  margin-bottom: 1em;
  font-size: 100px;
  font-weight: 800;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const PassionMainText = styled.div`
  max-width: 90%;
  font-size: 14px;
  color: #222222;
  font-weight: 500;
  .emphasis {
    font-size: 16px;
    font-weight: 700;
    color: #000;
  }
`;

export const PassionBelt = styled.div<PassionStylesProps>`
  width: 100%;
  height: 3%;
  background-color: #8d2e27;
  position: absolute;
  bottom: ${(props) => {
    return props.passionEnter ? "3.5%" : "-5%";
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.passionEnter ? ".8s" : "0";
  }};
`;
