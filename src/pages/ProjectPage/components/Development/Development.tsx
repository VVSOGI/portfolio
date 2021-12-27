import React from "react";
import styled from "styled-components";

const DevelopmentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Development = () => {
  return <DevelopmentContainer>This is Development.</DevelopmentContainer>;
};

export default Development;
