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

const AppTotalContainer = styled.div`
  height: 400vh;
  background: rgb(13, 41, 70);
  background: linear-gradient(
    90deg,
    rgba(13, 41, 70, 1) 80%,
    rgba(89, 90, 102, 1) 95%
  );
  overflow-x: hidden;
`;

const AppMeaningfulSection = styled.section<AppMoveStyleProps>`
  z-index: 15;
  height: 100%;
  top: ${(props) => {
    return props.moveNumber ? `-${props.moveNumber * 25}%` : `0%`;
  }};
  transition: 1.5s;
  position: relative;
`;

const AppMeaningfulnessSection = styled.section`
  z-index: 15;
`;

const BackgroundGrad = styled.div`
  position: fixed;
  top: 0;
  left: -70%;
  width: 100%;
  height: 100%;
  transform: skew(40deg);
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.6);
  background: rgb(0, 0, 0);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 70%, #1e5c9e 105%);
  z-index: 1;
`;

const TotalMapContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 10em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 10;
  top: 37%;
  left: 3%;
  .on {
    width: 3em;
  }
`;

const TotalEachMap = styled.a<MapStyleProps>`
  transition: 1s;
  width: ${(item) => {
    return item.match1 === item.match2 ? "4em" : "2em";
  }};
  height: 4px;
  background-color: #fff;
  cursor: pointer;
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

  let totalMap: MapComponentProps[] = [
    { id: 1, name: "top" },
    { id: 2, name: "project" },
    { id: 3, name: "about" },
    { id: 4, name: "bottom" },
  ];

  /* Debounce */

  let scrollStatus = {
    wheeling: false,
    functionCall: false,
  };
  let scrollTimer: any = false;

  /* Debounce */

  function goToSection(i: number) {
    if (i < 0 || i > totalMap.length - 1) {
      console.log("범위에서 벗어났습니다.");
    } else {
      let number = i;
      setMapIndex(number);
    }
  }

  useEffect(() => {
    if (nodeList.length > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  }, [nodeList]);

  useEffect(() => {
    if (isLoading === false) {
      nodeList.forEach((item, index) => {
        item.addEventListener("wheel", (e: any) => {
          e.preventDefault();
          let deltaY = e.deltaY;
          scrollStatus.wheeling = true;
          if (!scrollStatus.functionCall) {
            if (deltaY > 0) {
              goToSection(index + 1);
            }
            if (deltaY < 0) {
              goToSection(index - 1);
            }
            scrollStatus.functionCall = true;
          }
          window.clearInterval(scrollTimer);
          scrollTimer = window.setTimeout(() => {
            scrollStatus.wheeling = false;
            scrollStatus.functionCall = false;
          }, 50);
        });
      });
    }
  }, [isLoading]);

  useEffect(() => {
    let sections: NodeListOf<Element> =
      document.body.querySelectorAll(".section");
    setNodeList(sections);
  }, []);

  return (
    <AppTotalContainer>
      <Nav />
      <AppMeaningfulSection ref={totalRef} moveNumber={mapIndex ? mapIndex : 0}>
        <Top index={mapIndex ? mapIndex : 0} />
        <Project />
        <About />
        <Bottom />
      </AppMeaningfulSection>
      <AppMeaningfulnessSection>
        <TotalMapContainer>
          {totalMap.map((item) => {
            return (
              <TotalEachMap
                key={item.id}
                match1={item.id}
                match2={mapIndex ? mapIndex + 1 : 1}
                href={`#${item.name}`}
              />
            );
          })}
        </TotalMapContainer>
        <BackgroundGrad />
        <BackLight />
      </AppMeaningfulnessSection>
      <FirstLoadingGround loading={isLoading ? "1" : "0"} />
    </AppTotalContainer>
  );
};

export default App;
