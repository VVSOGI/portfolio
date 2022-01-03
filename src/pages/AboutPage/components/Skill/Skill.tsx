import React, { useEffect, useState } from "react";
import {
  SKillContainer,
  Text,
  JavascriptContainer,
  TypescriptContainer,
  ReactContainer,
  EtcContainer,
  NextContainer,
  BackArrow,
  Cursor,
  HiddenText,
  SkillMainContainer,
} from "./styles";

const Skill: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<[number, boolean]>([0, false]);

  useEffect(() => {
    const container = document.getElementById("skillSet");
    const back = document.querySelector("#back");

    container?.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector<HTMLElement>(".cursor");

      let xPos = e.clientX;
      let yPos = e.clientY;

      if (cursor) {
        cursor.style.left = `${xPos}px`;
        cursor.style.top = `${yPos}px`;
      }
    });

    back?.addEventListener("mouseover", () => {
      setIsMouseIn(true);
    });

    back?.addEventListener("mouseout", () => {
      setIsMouseIn(false);
    });

    back?.addEventListener("click", () => {
      setIsActive([0, false]);
      setIndex(0);
    });

    const text = document.querySelectorAll("#text");

    text.forEach((item, index) => {
      item.addEventListener("mouseover", (e) => {
        setIndex(index + 1);
        setIsMouseIn(true);
      });

      item.addEventListener("mouseout", (e) => {
        setIndex(0);
        setIsMouseIn(false);
      });

      item.addEventListener("click", () => {
        setIsActive([index + 1, true]);
      });
    });
  }, []);

  return (
    <SKillContainer className="section 2">
      <SkillMainContainer className="test1" id="skillSet">
        <Cursor
          active={isActive}
          index={index}
          mouseIn={isMouseIn}
          className="cursor"
        />
        <BackArrow id="back" active={isActive} index={index} />
        <JavascriptContainer active={isActive} index={index}>
          <Text active={isActive} index={index} id="text">
            JAVASCRIPT
          </Text>
          <HiddenText index={1} active={isActive}>
            공사중
          </HiddenText>
        </JavascriptContainer>
        <TypescriptContainer active={isActive} index={index}>
          <Text active={isActive} index={index} id="text">
            TYPESCRIPT
          </Text>
          <HiddenText index={2} active={isActive}>
            공사중
          </HiddenText>
        </TypescriptContainer>
        <ReactContainer active={isActive} index={index}>
          <Text active={isActive} index={index} id="text">
            REACT
          </Text>
          <HiddenText index={3} active={isActive}>
            공사중
          </HiddenText>
        </ReactContainer>
        <EtcContainer active={isActive} index={index}>
          <Text active={isActive} index={index} id="text">
            ETC
          </Text>
          <HiddenText index={4} active={isActive}>
            공사중
          </HiddenText>
        </EtcContainer>
        <NextContainer active={isActive} index={index}>
          <Text active={isActive} index={index} id="text">
            NEXT ?
          </Text>
          <HiddenText index={5} active={isActive}>
            공사중
          </HiddenText>
        </NextContainer>
      </SkillMainContainer>
    </SKillContainer>
  );
};

export default Skill;
