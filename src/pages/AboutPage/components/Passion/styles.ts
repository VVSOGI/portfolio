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
  height: 105%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    return props.bgColor;
  }};
  overflow: hidden;
`;

export const PassionBigText = styled.span<PassionStylesProps>`
  font-size: 160px;
  font-weight: 800;
  position: absolute;
  top: 10%;
  left: ${(props) => {
    return props.passionEnter ? props.pos + "%" : "-45%";
  }}; // -45%
  transition: 1s;
  transition-delay: ${(props) => {
    return props.passionEnter ? ".5s" : "0";
  }};
  color: ${(props) => {
    return props.bgColor;
  }};
  writing-mode: vertical-rl;
`;

export const PassionTextContainer = styled.div<PassionStylesProps>`
  position: absolute;
  right: ${(props) => {
    return props.passionEnter ? "5%" : "-45%";
  }};
  top: 15%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1s;
  transition-delay: ${(props) => {
    return props.passionEnter ? ".8s" : "0";
  }};
`;

export const PassionHeadText = styled.span`
  margin-bottom: 1em;
  font-size: 22px;
  font-weight: 800;
  span {
    color: #eee;
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
