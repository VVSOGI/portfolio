/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Mousemove } from "../../functions/Mousemove/Mousemove";
import {
  TopStyleProps,
  TopComponentProps,
  TopRockStyleProps,
} from "../../types/types";

const TopTotalContainer = styled.div`
  height: 100vh;
  background-color: transparent;
  position: relative;
  z-index: 5;
`;

const EarthImage = styled.img<TopStyleProps>`
  position: absolute;
  width: 30em;
  height: 30em;
  right: ${(props) => {
    return props.mosPos?.length ? `${100 - props.mosPos[0]}px` : "100px";
  }};
  top: ${(props) => {
    return props.mosPos?.length ? `${140 + props.mosPos[1]}px` : "140px";
  }};
  z-index: 2;
  transform: ${(props) => {
    return props.componentIndex === props.propsIndex
      ? "translateX(0%)"
      : "translateX(100%)";
  }};
  opacity: ${(props) => {
    return props.componentIndex === props.propsIndex ? "1" : "0";
  }};
  transition: ${(props) => {
    return props.componentIndex === props.propsIndex ? "1s" : "0.5s";
  }};
  transition-delay: ${(props) => {
    return props.componentIndex === props.propsIndex
      ? `${props.isMouseMove ? "0s" : "0.5s"}`
      : "0s";
  }};
`;

const PortfolioText = styled.div<TopStyleProps>`
  font-size: 64px;
  position: absolute;
  color: #fd5656;
  right: 15%;
  top: 45%;
  z-index: 3;
  font-weight: 600;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.493);
  letter-spacing: 8px;
  transform: ${(props) => {
    return props.componentIndex === props.propsIndex
      ? "translateX(0%)"
      : "translateX(100%)";
  }};
  opacity: ${(props) => {
    return props.componentIndex === props.propsIndex ? "1" : "0";
  }};
  transition: ${(props) => {
    return props.componentIndex === props.propsIndex ? "1s" : "0.5s";
  }};
  transition-delay: ${(props) => {
    return props.componentIndex === props.propsIndex ? "1s" : "0s";
  }};
`;

const NameTextContainer = styled.div`
  position: absolute;
  left: 0%;
  top: 25%;
  margin-left: 9.5%;
  width: 100%;
  overflow: hidden;
  height: 100%;
`;

const NameText = styled.div<TopStyleProps>`
  width: 50%;
  font-size: 100px;
  font-weight: 500;
  letter-spacing: 8px;
  line-height: 1.1em;
  color: #fff;
  transform: ${(props) => {
    return props.componentIndex === props.propsIndex
      ? "translateX(0%)"
      : "translateX(-100%)";
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.componentIndex === props.propsIndex ? "0.7s" : "0s";
  }};
  text-shadow: 0 0px 20px rgba(156, 156, 156, 0.281);
`;
//-100.5
const FrontendText = styled.div<TopStyleProps>`
  position: absolute;
  color: #fff;
  left: 0.2%;
  top: 42%;
  font-size: 24px;
  font-weight: 400;
  text-shadow: 0 0px 5px rgba(250, 250, 250, 0.5);
  transform: ${(props) => {
    return props.componentIndex === props.propsIndex
      ? "translateX(0%)"
      : "translateX(-100.5%)";
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.componentIndex === props.propsIndex ? "1.2s" : "0s";
  }};
  background-color: transparent;
`;

const ScrolldownText = styled.div<TopStyleProps>`
  position: absolute;
  left: 2%;
  bottom: ${(props) => {
    return props.componentIndex === props.propsIndex ? "8%" : "-21%";
  }};
  opacity: ${(props) => {
    return props.componentIndex === props.propsIndex ? "1" : "0";
  }};
  writing-mode: vertical-rl;
  color: #fff;
  background-color: transparent;
  letter-spacing: 5px;
  height: 10em;
  z-index: 10;
  transition: 1s;
  font-size: 12px;
  ::before {
    width: 1%;
    content: "";
    background-color: #fff;
    height: 30%;
    position: absolute;
    bottom: -50%;
    left: 50%;
  }
`;

const RockImage = styled.img<TopRockStyleProps>`
  position: absolute;
  right: ${(props) => {
    return props.right && props.mospos
      ? `${props.right - props.mospos[0]}px`
      : `${props.right}px`;
  }};
  top: ${(props) => {
    return props.top && props.mospos
      ? `${props.top - props.mospos[1]}px`
      : `${props.top}px`;
  }};
  z-index: 10;
  transform: ${(props) => {
    if (props.scale && props.rotate) {
      return `${`rotate(${props.rotate}) scale(${props.scale}) translateX(${
        props.propsIndex === props.componentIndex ? "0%" : "100%"
      })`}`;
    }
  }};
  opacity: ${(props) => {
    return props.componentIndex === props.propsIndex ? "1" : "0";
  }};
  transition: ${(props) => {
    return props.componentIndex === props.propsIndex ? "1s" : "0.5s";
  }};
  transition-delay: ${(props) => {
    return props.componentIndex === props.propsIndex
      ? `${props.isMouseMove ? "0s" : "0.5s"}`
      : "0s";
  }};
`;

const Top: React.FC<TopComponentProps> = (props) => {
  const [mosPos, setMosPos] = useState<number[]>([0, 0]);
  const [isMouseMove, setIsMouseMove] = useState<boolean>(false);
  let topIndex = 1;
  const RockArray: TopRockStyleProps[] = [
    { right: 50, top: 60, scale: "0.3", rotate: "180deg" },
    { right: 20, top: 280, scale: "0.2", rotate: "30deg" },
    { right: 80, top: 500, scale: "0.1", rotate: "270deg" },
    { right: 480, top: 120, scale: "0.2", rotate: "70deg" },
    { right: 480, top: 480, scale: "0.5", rotate: "30deg" },
  ];

  let timer: any;

  useEffect(() => {
    document.querySelector("#top")?.addEventListener("mousemove", (e) => {
      if (!timer) {
        if (!isMouseMove) {
          setIsMouseMove(true);
        }
        let test = Mousemove(e);
        setMosPos(test);
        timer = setTimeout(() => {
          timer = null;
        }, 20);
      }
    });
  }, []);

  useEffect(() => {
    if (props.index !== topIndex) setIsMouseMove(false);
  }, [props.index]);

  return (
    <TopTotalContainer id="top" className="section 1">
      <EarthImage
        componentIndex={topIndex}
        propsIndex={props.index}
        mosPos={mosPos}
        isMouseMove={isMouseMove}
        src="/images/earth.png"
      ></EarthImage>
      <PortfolioText componentIndex={topIndex} propsIndex={props.index}>
        PORTFOLIO
      </PortfolioText>
      <NameTextContainer>
        <NameText componentIndex={topIndex} propsIndex={props.index}>
          WOOSEOK KIM
        </NameText>
        <FrontendText componentIndex={topIndex} propsIndex={props.index}>
          Frontend Developer / <br /> Clever communicator
        </FrontendText>
      </NameTextContainer>
      <ScrolldownText componentIndex={topIndex} propsIndex={props.index}>
        SCROLLDOWN
      </ScrolldownText>
      {RockArray.map((item) => {
        return (
          <RockImage
            right={item.right}
            top={item.top}
            scale={item.scale}
            rotate={item.rotate}
            componentIndex={topIndex}
            propsIndex={props.index}
            mospos={mosPos}
            isMouseMove={isMouseMove}
            src="/images/rock.png"
          />
        );
      })}
    </TopTotalContainer>
  );
};

export default Top;
