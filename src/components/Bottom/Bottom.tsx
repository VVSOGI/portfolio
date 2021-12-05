import React from "react";
import styled from "styled-components";

const BottomTotalContainer = styled.div`
  height: 100vh;
  background-color: transparent;
  position: relative;
  z-index: 5;
  background-color: brown;
`;

const Bottom = () => {
  return (
    <BottomTotalContainer
      id="bottom"
      className="section 4"
    ></BottomTotalContainer>
  );
};

export default Bottom;
