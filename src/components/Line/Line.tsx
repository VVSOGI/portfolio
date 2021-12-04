import React from "react";
import styled from "styled-components";

const LineContainer = styled.div`
  position: absolute;
  width: 13%;
  top: 55%;
  height: 5px;
  background-color: #ffed9b;
  box-shadow: 0 0px 5px #ffed9b61;
  border-radius: 5px;
  left: 10%;
`;

const Line = () => {
  return <LineContainer />;
};

export default Line;
