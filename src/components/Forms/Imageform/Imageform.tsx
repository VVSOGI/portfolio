import React from "react";
import styled from "styled-components";
import {
  ImageformProps,
  TextAndImageStyleProps,
  ImgStyleProps,
} from "../../../pages/MainPage/types/types";
import { connect } from "react-redux";

const ImageTotalContianer = styled.div<TextAndImageStyleProps>`
  position: absolute;
  width: ${(props) => {
    if (props.pageRender === true) {
      return "65%";
    }
    return props.isMatch || props.animationOn === false ? `50%` : `35%`;
  }};
  height: ${(props) => {
    if (props.pageRender === true) {
      return "100%";
    }
    return props.isMatch || props.animationOn === false ? `70%` : `70%`;
  }};
  top: ${(props) => {
    if (props.pageRender === true) {
      return "0%";
    } else {
      return "15%";
    }
  }};
  right: ${(props) => {
    if (props.pageRender === true) {
      return "0%";
    } else {
      return "8%";
    }
  }};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.9);
  border-radius: ${(props) => {
    if (props.pageRender === true) {
      return "0px";
    } else {
      return "10px";
    }
  }};
  transform: ${(props) => {
    return props.isMatch || props.animationOn === false
      ? `translateX(0%)`
      : `translateX(20%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `0.7s` : `0.2s`;
  }};
  opacity: ${(props) => {
    return props.isMatch || props.animationOn === false ? `1` : `0`;
  }};
  overflow: hidden;
  z-index: 1;
`;

const SudoContainer = styled.div<TextAndImageStyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 101%;
  height: 100%;
  background-color: #0f4786;
  transform: ${(props) => {
    return props.isMatch || props.animationOn === false
      ? `translateX(100%)`
      : `translateX(0%)`;
  }};
  transition: 1.5s;
  transition-delay: ${(props) => {
    return props.isMatch || props.animationOn === false ? `1s` : `0s`;
  }};
  ::before {
    width: ${(props) => {
      return props.isMatch || props.animationOn === false ? `100%` : `0%`;
    }};
    transition: 1.5s;
    transition-delay: ${(props) => {
      return props.isMatch || props.animationOn === false ? `1s` : `0s`;
    }};
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background-color: #92a6ff;
  }
`;

const Image = styled.img<ImgStyleProps>`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s;
  cursor: ${(props) => {
    return props.pageChange ? "default" : "cursor";
  }};
  :hover {
    transform: ${(props) => {
      return props.pageChange ? "scale(1)" : "scale(1.1)";
    }};
  }
`;

const Imageform: React.FC<ImageformProps> = (props) => {
  return (
    <ImageTotalContianer
      animationOn={props.pageIndex === 0 ? false : true}
      pageRender={props.pageRender}
      isMatch={props.indexMatch}
    >
      <Image
        src={props.imageSrc}
        pageChange={props.page ? props.page.isPageMove : false}
      />
      <SudoContainer
        animationOn={props.pageIndex === 0 ? false : true}
        isMatch={props.indexMatch}
      />
    </ImageTotalContianer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    page: state.pageReducer,
  };
};

export default connect(mapStateToProps, null)(Imageform);
