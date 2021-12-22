import styled from "styled-components";
import {
  TextAndImageStyleProps,
  TextContainerStyleProps,
} from "../../../types/types";

export const TextComingContainer = styled.div<TextContainerStyleProps>`
  position: absolute;
  left: 0%;
  top: ${(props) => {
    return props.position ? `${props.position}` : "20%";
  }};
  margin-left: 9.5%;
  width: 45%;
  overflow: hidden;
  height: 100%;
  color: #fff;
  z-index: 5;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

export const HeadText = styled.pre<TextAndImageStyleProps>`
  font-size: 100px;
  font-weight: 600;
  line-height: 1.1em;
  transform: ${(props) => {
    return props.isMatch || props.animationOn === false
      ? `translateX(0%)`
      : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch || props.animationOn === false ? `1.2s` : `0s`;
  }};
`;

export const SummaryText = styled.pre<TextAndImageStyleProps>`
  margin-top: 2em;
  font-size: 24px;
  font-weight: 400;
  transform: ${(props) => {
    return props.isMatch || props.animationOn === false
      ? `translateX(0%)`
      : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch || props.animationOn === false ? `1.5s` : `0s`;
  }};
`;

export const ComingButton = styled.div<TextAndImageStyleProps>`
  background-color: #5b95e0;
  width: 200px;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 3em;
  border-radius: 20px;
  transform: ${(props) => {
    return props.isMatch || props.animationOn === false
      ? `translateX(0%)`
      : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch || props.animationOn === false ? `2s` : `0s`;
  }};
  span {
    position: relative;
    ::before {
      content: "";
      position: absolute;
      bottom: 5%;
      width: 0%;
      height: 2px;
      background-color: #ffffff;
      transition: 0.5s;
    }
  }
  :hover {
    span {
      ::before {
        width: 100%;
      }
    }
  }
`;

export const ComingLine = styled.div<TextAndImageStyleProps>`
  width: 69%;
  height: 0.5%;
  background-color: #5b95e0;
  top: 30%;
  left: 0;
  transform: ${(props) => {
    return props.isMatch || props.animationOn === false
      ? `translateX(0%)`
      : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch || props.animationOn === false ? `1.5s` : `0s`;
  }};
`;
