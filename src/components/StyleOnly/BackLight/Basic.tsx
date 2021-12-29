import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

interface BackLightStyleProps {
  mosPos: number[];
  pageMove?: boolean;
}

const SvgTotalContainer = styled.svg<BackLightStyleProps>`
  position: fixed;
  top: ${(props) => {
    return props.mosPos ? `${0 + props.mosPos[1]}px` : null;
  }};
  right: ${(props) => {
    return props.mosPos ? `${-180 - props.mosPos[0]}px` : null;
  }};
  transform: scale(1.5);
  transition: 1s;
  opacity: ${(props) => {
    return props.pageMove ? "0" : "1";
  }};
`;

interface BackLightIsAnimation {
  animationOff?: boolean;
  page?: any;
}

const Basic: React.FC<BackLightIsAnimation> = (props) => {
  const [mosPos, setMosPos] = useState<number[]>([29.7, -29.7]);

  return (
    <SvgTotalContainer
      mosPos={mosPos}
      pageMove={props.page.isPageMove ? true : false}
      id="background"
      width="920"
      height="920"
      viewBox="0 0 920 920"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="459.5"
        cy="460.498"
        r="145.25"
        fill="#396fb4"
        fill-opacity="0.8"
      />
      <ellipse
        cx="459.5"
        cy="460.498"
        rx="96.8334"
        ry="96.8333"
        fill="#a59f69"
      />
      <ellipse
        cx="459.5"
        cy="460.499"
        rx="193.667"
        ry="193.667"
        fill="#a59f69"
        fill-opacity="0.7"
      />
      <ellipse
        cx="459.5"
        cy="460.5"
        rx="242.083"
        ry="242.083"
        fill="#a59f69"
        fill-opacity="0.5"
      />
      <circle
        cx="459.5"
        cy="460.5"
        r="290.5"
        fill="#a59f69"
        fill-opacity="0.3"
      />
      <circle cx="460" cy="460" r="340" fill="#a59f69" fill-opacity="0.3" />
      <circle cx="460" cy="460" r="385" fill="#a59f69" fill-opacity="0.5" />
      <circle cx="460" cy="460" r="425" fill="#e6d96b" fill-opacity="0.5" />
      <circle cx="460" cy="460" r="460" fill="#b9af51" fill-opacity="0.8" />
      <ellipse
        cx="327.323"
        cy="298.303"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="276.969"
        cy="325.416"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="360.246"
        cy="239.235"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="244.046"
        cy="503.587"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="268.254"
        cy="590.736"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="299.241"
        cy="626.564"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="233.421"
        cy="700.421"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="319.241"
        cy="716.564"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="429.741"
        cy="756.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="539.741"
        cy="756.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="469.741"
        cy="806.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="429.741"
        cy="626.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="169.741"
        cy="576.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="139.741"
        cy="456.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="139.741"
        cy="336.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="169.741"
        cy="216.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="259.741"
        cy="246.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="189.741"
        cy="306.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="369.741"
        cy="136.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="349.741"
        cy="66.5639"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="489.741"
        cy="106.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="459.741"
        cy="157.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="649.741"
        cy="136.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="749.741"
        cy="255.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="799.741"
        cy="366.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="799.741"
        cy="666.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="719.741"
        cy="376.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="799.741"
        cy="486.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="699.741"
        cy="697.564"
        rx="2.92083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="581.026"
        cy="640.121"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="558.754"
        cy="603.324"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="612.013"
        cy="557.813"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="589.741"
        cy="505.524"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="687.543"
        cy="442.583"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="561.659"
        cy="320.574"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="522.926"
        cy="250.855"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="632.347"
        cy="275.063"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="583.931"
        cy="220.837"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="650.746"
        cy="480.348"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
      <ellipse
        cx="692.384"
        cy="552.972"
        rx="2.42083"
        ry="2.42081"
        fill="white"
      />
    </SvgTotalContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    page: state.pageReducer,
  };
};

export default connect(mapStateToProps, null)(Basic);
