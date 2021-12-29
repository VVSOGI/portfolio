/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Mousemove } from "../../../../../functions/Mousemove/Mousemove";
import { TextScramble } from "../../../../../functions/TextScramble/TextScramble";
import { AllComponentProps } from "../../../types/types";
import {
  TopTotalContainer,
  PortfolioText,
  NameTextContainer,
  NameText,
  FrontendText,
  ScrolldownText,
} from "./styles";

const Top: React.FC<AllComponentProps> = (props) => {
  const [mosPos, setMosPos] = useState<number[]>([0, 0]);
  const [isMouseMove, setIsMouseMove] = useState<boolean>(false);
  let topIndex = 1;
  const phrases = ["PORTFOLIO", "FRONT-END", "DEVELOPER,", "JAVASCRIPT"];
  const colors = ["#ff6060", "#4eafff", "#ffffff", "#ff771c", "#ebcf55"];

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
      <NameTextContainer>
        <PortfolioText
          id="portfolio"
          componentIndex={topIndex}
          propsIndex={props.index}
          mosPos={mosPos}
          isMouseMove={isMouseMove}
        >
          PORTFOLIO
        </PortfolioText>
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
    </TopTotalContainer>
  );
};

export default Top;
