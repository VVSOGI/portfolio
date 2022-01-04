import styled from "styled-components";
import { ProjectPageStyleProps } from "../MainPage/types/types";

export const AboutTotalContainer = styled.div`
  position: relative;
  height: 400vh;
  transition: 1s;
  background: linear-gradient(90deg, #000000 5%, rgb(13, 41, 70) 65%);
  overflow-x: hidden;

  #fullpage2 {
    width: 100%;
    position: relative;
    height: 100vh;
  }
`;

export const AboutFullpage = styled.div`
  width: 100%;
  height: 100%;
  transition: 1s;
`;

export const ProjectRenderContainer = styled.div`
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const BackgroundGrad = styled.div<ProjectPageStyleProps>`
  position: absolute;
  top: 0;
  left: ${(props) => {
    return props.pageRender ? "-60%" : "-84.5%";
  }};
  width: 100%;
  height: 100vh;
  transform: skew(0deg);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 10%, #000311 70%);
  z-index: 0;
  transition: 1s;
  transition-timing-function: cubic-bezier(0.74, 0.22, 0.26, 1.01); //
`;

export const BackIconContainer = styled.div<ProjectPageStyleProps>`
  width: 100px;
  height: 20px;
  background: transparent;
  position: absolute;
  top: 5em;
  left: ${(props) => {
    return props.pageRender ? "2em" : "-50%";
  }};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.9s;
  cursor: pointer;
  .line {
    background-color: #fff;
    height: 10%;
    width: 100%;
    ::before {
      position: absolute;
      left: 0;
      top: 22%;
      content: "";
      background-color: #fff;
      height: 10%;
      width: 22%;
      transform: rotate(-25deg);
    }
  }
  :hover {
    left: 1em;
  }
`;
