/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Mousemove } from "../../functions/Mousemove/Mousemove";
import { TextScramble } from "../../functions/TextScramble/TextScramble";
import { AllComponentProps, TopRockStyleProps } from "../../types/types";
import {
  TopTotalContainer,
  EarthImage,
  PortfolioText,
  NameTextContainer,
  NameText,
  FrontendText,
  ScrolldownText,
  RockImage,
} from "./styles";

const Top: React.FC<AllComponentProps> = (props) => {
  const [mosPos, setMosPos] = useState<number[]>([0, 0]);
  const [isMouseMove, setIsMouseMove] = useState<boolean>(false);
  let topIndex = 1;
  const RockArray: TopRockStyleProps[] = [
    { right: 1, top: 60, scale: "0.3", rotate: "180deg" },
    { right: -10, top: 280, scale: "0.2", rotate: "30deg" },
    { right: 80, top: 500, scale: "0.1", rotate: "270deg" },
    { right: 480, top: 120, scale: "0.2", rotate: "70deg" },
    { right: 480, top: 480, scale: "0.5", rotate: "30deg" },
  ];
  const phrases = ["PORTFOLIO", "FRONT%END", "DEVELOPER,"];
  const colors = ["#ff9d9d", "#ffefa8", "#ffffff", "#ffcece"];

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
        }, 200);
      }
    });
    const el = document.getElementById("portfolio");

    if (el) {
      const fx = new TextScramble(el);
      let count = 0;
      let colorCount = 0;
      const next = () => {
        fx.setText(phrases[count]).then(() => {
          setTimeout(next, 2000);
        });
        el.style.color = colors[colorCount];
        count = (count + 1) % phrases.length;
        colorCount = (colorCount + 1) % colors.length;
      };
      next();
    }
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
      <PortfolioText
        id="portfolio"
        componentIndex={topIndex}
        propsIndex={props.index}
        mosPos={mosPos}
        isMouseMove={isMouseMove}
      >
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
