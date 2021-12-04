import React from "react";
import styled from "styled-components";

const NavTotalContainer = styled.div`
  width: 100%;
  padding: 2em 1.5em;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: #ffffff;
  font-size: 1.5rem;
  z-index: 10;
`;

const NavLeftContainer = styled.div`
  font-weight: 900;
`;

const NavRightContainer = styled.div`
  ul {
    display: flex;
    z-index: 10;
    li {
      margin-left: 3em;
      list-style: none;
    }
  }
`;

const Nav = () => {
  return (
    <NavTotalContainer>
      <NavLeftContainer>Wooseok Kim</NavLeftContainer>
      <NavRightContainer>
        <ul>
          <li>GitHub</li>
          <li>Blog</li>
          <li>menu</li>
        </ul>
      </NavRightContainer>
    </NavTotalContainer>
  );
};

export default Nav;
