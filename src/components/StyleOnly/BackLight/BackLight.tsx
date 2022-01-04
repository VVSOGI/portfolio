/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Mousemove } from "../../../functions/Mousemove/Mousemove";

interface BackLightStyleProps {
  isLoading: boolean;
  mosPos: number[];
}

const SvgTotalContainer = styled.svg<BackLightStyleProps>`
  position: fixed;
  top: ${(props) => {
    return props.mosPos
      ? `${0 + props.mosPos[1]}px`
      : `${90 + props.mosPos[1]}px`;
  }};
  right: ${(props) => {
    return props.mosPos
      ? `${-450 - props.mosPos[0]}px`
      : `${50 - props.mosPos[0]}px`;
  }};
  transform: scale(1.1)
    ${(props) => {
      return props.isLoading === false ? "translateX(0%)" : "translateX(60%)";
    }};
  transition: 2s;
  overflow: visible;
`;

interface BackLightProps {
  animationOff?: boolean;
  page?: any;
  isLoading: boolean;
}

const BackLight: React.FC<BackLightProps> = (props) => {
  const [mosPos, setMosPos] = useState<number[]>([29.7, -29.7]);
  let timer: any;

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!timer) {
        let test = Mousemove(e);
        setMosPos(test);
        timer = setTimeout(() => {
          timer = null;
        }, 10);
      }
    });
  }, []);

  return (
    <SvgTotalContainer
      isLoading={props.isLoading}
      mosPos={mosPos}
      id="background"
      width="100%"
      height="100%"
      viewBox="0 0 920 920"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="460" cy="460" r="710" fill="#e2ca43" fillOpacity="1" />
      <circle cx="200" cy="200" r="100" fill="#b38a33" fillOpacity="1" />
      <circle cx="10" cy="450" r="150" fill="#8d6d27" fillOpacity="1" />
      <circle cx="300" cy="450" r="70" fill="#705f39" fillOpacity="1" />
      <ellipse
        cx="-327.323"
        cy="208.303"
        rx="1.42083"
        ry="1.42081"
        fill="white"
      />
      <ellipse
        cx="-276.969"
        cy="325.416"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="-360.246"
        cy="239.235"
        rx="1.42083"
        ry="1.42081"
        fill="white"
      />
      <ellipse
        cx="-294.046"
        cy="503.587"
        rx="3.42083"
        ry="3.42081"
        fill="white"
      />
      <ellipse
        cx="-308.254"
        cy="590.736"
        rx="1.42083"
        ry="1.42081"
        fill="white"
      />

      <ellipse
        cx="-339.741"
        cy="756.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="-378.754"
        cy="603.324"
        rx="3.42083"
        ry="3.42081"
        fill="white"
      />
      <ellipse
        cx="-309.741"
        cy="705.524"
        rx="0.42083"
        ry="0.42081"
        fill="white"
      />
      <ellipse
        cx="-457.543"
        cy="442.583"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="-361.659"
        cy="100.574"
        rx="3.42083"
        ry="3.42081"
        fill="white"
      />
      <ellipse
        cx="-554.046"
        cy="503.587"
        rx="3.42083"
        ry="3.42081"
        fill="white"
      />
      <ellipse
        cx="-558.254"
        cy="590.736"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />

      <ellipse
        cx="-489.741"
        cy="756.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="-528.754"
        cy="603.324"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="-557.543"
        cy="202.583"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="-551.659"
        cy="100.574"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
    </SvgTotalContainer>
  );
};

export default BackLight;
