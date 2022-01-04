/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { SkillPropsType } from "../../types/types";
import { passionBgColorChange } from "../../../../redux/actions";
import {
  SKillContainer,
  Text,
  BackArrow,
  Cursor,
  HiddenText,
  SkillMainContainer,
  IntegratedContainer,
} from "./styles";

import { connect } from "react-redux";

const Skill: React.FC<SkillPropsType> = (props) => {
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<[number, boolean]>([0, false]);

  const backgroundColor = [
    { backgroundColor: "#ffa600", text: "JAVASCRIPT", id: 1000 },
    { backgroundColor: "#0099ff", text: "TYPESCRIPT", id: 2000 },
    { backgroundColor: "#1473df", text: "REACT", id: 3000 },
    { backgroundColor: "#b94239", text: "FIREBASE", id: 4000 },
    { backgroundColor: "#d6d6d6", text: "STUDY", id: 5000 },
  ];

  useEffect(() => {
    const container = document.getElementById("skillSet");
    const back = document.getElementById("back");

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
      setSelectIndex(0);
    });

    const text = document.querySelectorAll("#text");

    text.forEach((item, index) => {
      item.addEventListener("mouseover", (e) => {
        setSelectIndex(index + 1);
        setIsMouseIn(true);
      });

      item.addEventListener("mouseout", (e) => {
        setSelectIndex(0);
        setIsMouseIn(false);
      });

      item.addEventListener("click", () => {
        setIsActive([index + 1, true]);
        props.passionBgColorChange(backgroundColor[index].backgroundColor);
      });
    });
  }, []);

  return (
    <SKillContainer className="section 2">
      <SkillMainContainer className="test1" id="skillSet">
        <Cursor
          active={isActive}
          index={selectIndex}
          mouseIn={isMouseIn}
          className="cursor"
        />
        <BackArrow id="back" active={isActive} index={selectIndex} />
        {backgroundColor.map((item, i) => {
          return (
            <IntegratedContainer
              bgColor={item.backgroundColor}
              isMouseover={selectIndex}
              active={isActive}
              index={i + 1}
              key={item.id}
            >
              <Text active={isActive} index={selectIndex} id="text">
                {item.text}
              </Text>
              <HiddenText index={i + 1} active={isActive}>
                공사중
              </HiddenText>
            </IntegratedContainer>
          );
        })}
      </SkillMainContainer>
    </SKillContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    passionBgColorChange: (bgColor: string) =>
      dispatch(passionBgColorChange(bgColor)),
  };
};

export default connect(null, mapDispatchToProps)(Skill);
