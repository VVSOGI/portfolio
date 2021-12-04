/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { MapComponentProps, MapStyleProps } from "./types/types";
import "./App.css";
import styled from "styled-components";
import Nav from "./components/Nav/Nav";
import Top from "./components/Top/Top";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Bottom from "./components/Bottom/Bottom";
import BackLight from "./components/BackLight/BackLight";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { gsap, Power4 } from "gsap";

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

interface LoadingStyleProps {
  loading: string;
}

const FirstLoadingGround = styled.div<LoadingStyleProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #040f1a;
  left: 0;
  top: 0;
  z-index: 10;
  transform: ${(props) => {
    return props.loading === "1" ? "translateY(0%)" : "translateY(-100%)";
  }};
  transition: 1s;
  transition-delay: 0.4s;
  transition-timing-function: cubic-bezier(0.48, 0.3, 0.34, 1.02);
`;

const App = () => {
  const [mapIndex, setMapIndex] = useState<number>(1);
  const [nodeList, setNodeList] = useState<
    HTMLDivElement[] | NodeListOf<Element>
  >([]);
  const [totalMap, setTotalMap] = useState<MapComponentProps[]>([
    { id: 1, name: "top" },
    { id: 2, name: "project" },
    { id: 3, name: "about" },
    { id: 4, name: "bottom" },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /*  GSAP  */
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  let scrollTween: null | gsap.core.Animation;

  function goToSection(i: number) {
    let number = i + 1;
    setMapIndex(number);

    // scrollTween = gsap.to(window, {
    //   scrollTo: { y: i * window.innerHeight, autoKill: false },
    //   duration: 2,
    //   onComplete: () => (scrollTween = null),
    //   overwrite: true,
    //   ease: Power4.easeInOut,
    // });
  }
  /*  GSAP  */

  useEffect(() => {
    if (nodeList.length > 0) {
      setIsLoading(false);
      nodeList.forEach((section: any, i: number) => {
        ScrollTrigger.create({
          trigger: section,
          onEnter: () => goToSection(i + 1),
          start: "0%",
        });
        ScrollTrigger.create({
          trigger: section,
          end: "99.5%",
          onEnterBack: () => goToSection(i),
        });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [nodeList]);

  useEffect(() => {
    let sections: NodeListOf<Element> =
      document.body.querySelectorAll(".section");
    setNodeList(sections);
  }, []);

  return (
    <AppTotalContainer>
      <Nav />
      <Top index={mapIndex} />
      <Project />
      <About />
      <Bottom />
      <TotalMapContainer>
        {totalMap.map((item) => {
          return (
            <TotalEachMap
              key={item.id}
              match1={item.id}
              match2={mapIndex}
              href={`#${item.name}`}
            />
          );
        })}
      </TotalMapContainer>
      <BackgroundGrad />
      <BackLight />
      <FirstLoadingGround loading={isLoading ? "1" : "0"} />
    </AppTotalContainer>
  );
};

export default App;
