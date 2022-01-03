import styled from "styled-components";
import {
  TextAndImageStyleProps,
  TextContainerStyleProps,
} from "../../../pages/MainPage/types/types";

export const TextComingContainer = styled.div<TextContainerStyleProps>`
  position: relative;
  width: 45%;
  margin-left: 9.5%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  z-index: 5;
  overflow: hidden;
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
// #dd2553
export const ComingButton = styled.div<TextAndImageStyleProps>`
  background-color: ${(props) => {
    return props.pageChange ? "#dd2553" : "#5b95e0";
  }};
  width: 15em;
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
    if (props.pageChange) return "0s";
    return props.isMatch || props.animationOn === false ? `1s` : `0s`;
  }};
  font-size: 18px;
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

export const LinkButton = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
`;

export const ComingLine = styled.div<TextAndImageStyleProps>`
  width: 69%;
  height: 0.5%;
  background-color: ${(props) => {
    return props.pageChange ? "#dd2553" : "#5b95e0";
  }};
  top: 30%;
  left: 0;
  transform: ${(props) => {
    return props.isMatch || props.animationOn === false
      ? `translateX(0%)`
      : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    if (props.pageChange) return "0s";
    return props.isMatch || props.animationOn === false ? `1.5s` : `0s`;
  }};
`;
