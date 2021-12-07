/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import {
  MapComponentProps,
  MapStyleProps,
  LoadingStyleProps,
  AppMoveStyleProps,
} from "./types/types";
import "./App.css";
import styled from "styled-components";
import Nav from "./components/Nav/Nav";
import Top from "./components/Top/Top";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Bottom from "./components/Bottom/Bottom";
import BackLight from "./components/BackLight/BackLight";
import $ from "jquery";
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";

const AppTotalContainer = styled.div`
  height: 400vh;
  background: rgb(13, 41, 70);
  background: linear-gradient(90deg, #000000 5%, rgb(13, 41, 70) 35%);
  overflow-x: hidden;
`;

const AppMeaningfulSection = styled.section<AppMoveStyleProps>`
  z-index: 15;
  height: 100%;
  transition: 1.5s;
  position: relative;
`;

const AppMeaningfulnessSection = styled.section`
  z-index: 15;
`;

const BackgroundGrad = styled.div`
  position: fixed;
  top: 0;
  left: -84.5%;
  width: 100%;
  height: 100%;
  transform: skew(30deg);
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.6);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 10%, #b11212dc 105%);
  z-index: 1;
`;

const FirstLoadingGround = styled.div<LoadingStyleProps>`
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

const App = () => {
  const [mapIndex, setMapIndex] = useState<number>(0);
  const [nodeList, setNodeList] = useState<
    HTMLDivElement[] | NodeListOf<Element>
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const totalRef = useRef<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setMapIndex(1);
    }, 300);

    /* Fullpage.js */

    $((): void => {
      $("#fullpage").fullpage({
        autoScrolling: true,
        navigation: true,
        scrollingSpeed: 1200,
        navigationPosition: "left",
        css3: true,
        easingcss3: "cubic-bezier(.74,.22,.26,1.01)",
        onLeave: (origin: object, destination: number, direction: string) => {
          setMapIndex(destination);
        },
      });
    });

    /* Fullpage.js */
  }, []);

  return (
    <AppTotalContainer>
      <Nav />
      <AppMeaningfulSection
        id="fullpage"
        ref={totalRef}
        moveNumber={mapIndex ? mapIndex : 1}
      >
        <Top index={mapIndex ? mapIndex : 0} />
        <Project />
        <About />
        <Bottom />
      </AppMeaningfulSection>
      <AppMeaningfulnessSection>
        <BackgroundGrad />
        <BackLight />
      </AppMeaningfulnessSection>
      <FirstLoadingGround loading={isLoading ? "1" : "0"} />
    </AppTotalContainer>
  );
};

export default App;
