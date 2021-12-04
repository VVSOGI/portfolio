import React from "react";
import styled from "styled-components";

const AboutTotalContainer = styled.div`
  height: 100vh;
  background-color: transparent;
  position: relative;
  z-index: 5;
`;

const About = () => {
  return (
    <AboutTotalContainer id="about" className="section 3"></AboutTotalContainer>
  );
};

export default About;
