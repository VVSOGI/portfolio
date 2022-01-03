import React from "react";
import styled from "styled-components";

const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

const GraphMainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Graph = () => {
  return (
    <GraphContainer className="section 3">
      <GraphMainContainer>This is Graph.</GraphMainContainer>
    </GraphContainer>
  );
};

export default Graph;
