import React from "react";
import styled from "styled-components";
import { ImageformProps, TextAndImageStyleProps } from "../../../types/types";

const ImageTotalContianer = styled.div<TextAndImageStyleProps>`
  position: absolute;
  width: ${(props) => {
    return props.isMatch ? `50%` : `35%`;
  }};
  height: ${(props) => {
    return props.isMatch ? `70%` : `70%`;
  }};
  top: 15%;
  right: 8%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  transform: ${(props) => {
    return props.isMatch ? `translateX(0%)` : `translateX(20%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `0.7s` : `0s`;
  }};
  opacity: ${(props) => {
    return props.isMatch ? `1` : `0`;
  }};
  overflow: hidden;
`;

const SudoContainer = styled.div<TextAndImageStyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0f4786;
  transform: ${(props) => {
    return props.isMatch ? `translateX(100%)` : `translateX(0%)`;
  }};
  transition: 1.5s;
  transition-delay: ${(props) => {
    return props.isMatch ? `1s` : `0s`;
  }};
  ::before {
    width: ${(props) => {
      return props.isMatch ? `100%` : `0%`;
    }};
    transition: 1.5s;
    transition-delay: ${(props) => {
      return props.isMatch ? `1s` : `0s`;
    }};
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background-color: #ff6c6c;
  }
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: 1s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

const Imageform: React.FC<ImageformProps> = (props) => {
  return (
    <ImageTotalContianer isMatch={props.indexMatch}>
      <Image src={props.imageSrc} />
      <SudoContainer isMatch={props.indexMatch} />
    </ImageTotalContianer>
  );
};

export default Imageform;
