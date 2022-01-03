import React from "react";
import styled from "styled-components";

const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Test = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Graph = () => {
  return (
    <GraphContainer className="section 3">
      <Test>This is Graph.</Test>
    </GraphContainer>
  );
};

export default Graph;
