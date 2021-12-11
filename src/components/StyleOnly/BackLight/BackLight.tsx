/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Mousemove } from "../../../functions/Mousemove/Mousemove";

interface BackLightStyleProps {
  mosPos: number[];
}

const SvgTotalContainer = styled.svg<BackLightStyleProps>`
  position: fixed;
  top: ${(props) => {
    return props.mosPos ? `${90 + props.mosPos[1]}px` : "90px";
  }};
  right: ${(props) => {
    return props.mosPos ? `${50 - props.mosPos[0]}px` : "50px";
  }};
  transform: scale(2);
  transition: 1s;
`;

const BackLight = () => {
  const [mosPos, setMosPos] = useState<number[]>([0, 0]);

  let timer: any;
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!timer) {
        let test = Mousemove(e);
        setMosPos(test);
        timer = setTimeout(() => {
          timer = null;
        }, 50);
      }
    });
  }, []);

  return (
    <SvgTotalContainer
      mosPos={mosPos}
      id="background"
      width="581"
      height="581"
      viewBox="0 0 581 581"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="290.5"
        cy="290.498"
        r="145.25"
        fill="#2f4868"
        fill-opacity="0.4"
      />
      <ellipse
        cx="290.5"
        cy="290.498"
        rx="96.8334"
        ry="96.8333"
        fill="#2f4868"
        fill-opacity="0.7"
      />
      <ellipse
        cx="290.5"
        cy="290.499"
        rx="193.667"
        ry="193.667"
        fill="#2f4868"
        fill-opacity="0.3"
      />
      <ellipse
        cx="290.5"
        cy="290.5"
        rx="242.083"
        ry="242.083"
        fill="#2f4868"
        fill-opacity="0.2"
      />
      <circle
        cx="290.5"
        cy="290.5"
        r="290.5"
        fill="#2f4868"
        fill-opacity="0.1"
      />
      <ellipse cx="158.323" cy="128.303" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="107.969" cy="155.416" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="191.246" cy="69.235" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="75.0458" cy="333.587" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="99.2542" cy="420.736" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="130.241" cy="456.564" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="412.026" cy="470.121" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="389.754" cy="433.324" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="443.013" cy="387.813" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="420.741" cy="335.524" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="518.543" cy="272.583" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="392.659" cy="150.574" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="353.926" cy="80.855" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="463.347" cy="105.063" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="414.931" cy="50.8372" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="481.746" cy="310.348" rx="1.4" ry="1.4" fill="white" />
      <ellipse cx="523.384" cy="382.972" rx="1.4" ry="1.4" fill="white" />
    </SvgTotalContainer>
  );
};

export default BackLight;
