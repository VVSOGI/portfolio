import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

interface NavStyleProps {
  navChange: boolean;
}

const NavTotalContainer = styled.div<NavStyleProps>`
  width: 100%;
  padding: 1em 1.5em;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: ${(props) => {
    return props.navChange ? "#000" : "#fff";
  }};
  font-size: 1.5rem;
  z-index: 10;
  transition: 0.2s;
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

const Nav = (props: any) => {
  return (
    <NavTotalContainer navChange={props.scroll.navChange}>
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

const mapStateToProps = (state: any) => {
  return {
    scroll: state.scrollReducer,
  };
};

export default connect(mapStateToProps, null)(Nav);
