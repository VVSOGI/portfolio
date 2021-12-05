import React from "react";
import styled from "styled-components";

const ProjectTotalContainer = styled.div`
  height: 100vh;
  background-color: transparent;
  position: relative;
  z-index: 5;
  background-color: blanchedalmond;
`;

const Project = () => {
  return (
    <ProjectTotalContainer
      id="project"
      className="section 2"
    ></ProjectTotalContainer>
  );
};

export default Project;
