import styled from "styled-components";
import { ProjectPageStyleProps } from "../MainPage/types/types";

export const ProjectTotalContainer = styled.div`
  height: 100%;
  transition: 1s;
  background: linear-gradient(90deg, #000000 5%, rgb(13, 41, 70) 65%);
  overflow-x: hidden;
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
