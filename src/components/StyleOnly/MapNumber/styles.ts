import styled from "styled-components";
import { NumberOrderStyleProps } from "../../../pages/MainPage/types/types";

export const MapNumberContainer = styled.div<NumberOrderStyleProps>`
  position: absolute;
  bottom: 14%;
  right: 5%;
  font-size: 144px;
  font-weight: 500;
  color: #fff;
  font-family: Impact, sans-serif;
  text-shadow: 5px 5px 15px rgba(0, 0, 0, 0.575);
  transform: ${(props) => {
    return props.isMatch || props.animationOn === false
      ? `translateX(0%)`
      : `translateX(100%)`;
  }};
  transition: 0.5s;
  transition-delay: ${(props) => {
    return props.isMatch || props.animationOn === false ? `1.5s` : `0s`;
  }};
  opacity: ${(props) => {
    return props.isMatch || props.animationOn === false ? `1` : `0`;
  }};
  z-index: 2;
`;
