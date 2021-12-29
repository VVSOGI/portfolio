import { LoadingStyleProps } from "./types/types";
import styled from "styled-components";

export const AppTotalContainer = styled.div`
  height: 400vh;
  background: rgb(26, 20, 20);
  background: linear-gradient(90deg, #000000 5%, rgb(13, 41, 70) 65%);
  overflow-x: hidden;
`;

export const AppMeaningfulSection = styled.section`
  z-index: 15;
  height: 100%;
  transition: 1.5s;
  position: relative;
`;

export const AppMeaningfulnessSection = styled.section`
  z-index: 15;
`;

export const BackgroundGrad = styled.div`
  position: fixed;
  top: 0;
  left: -84.5%;
  width: 100%;
  height: 100%;
  transform: skew(0deg);
  box-shadow: 0 0 100px rgb(0, 0, 0);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 10%, #000 70%);

  z-index: 1;
`;

export const FirstLoadingGround = styled.div<LoadingStyleProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #040f1a;
  left: 0;
  top: 0;
  z-index: 20;
  transform: ${(props) => {
    return props.loading === "1" ? "translateY(0%)" : "translateY(-100%)";
  }};
  transition: 1s;
  transition-delay: 0.4s;
  transition-timing-function: cubic-bezier(0.48, 0.3, 0.34, 1.02);
`;
