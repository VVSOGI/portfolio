/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Vimeo, Github } from "@styled-icons/entypo-social";
import { Notion } from "@styled-icons/simple-icons/Notion";

interface NavStyleProps {
  navChange: boolean;
  aboutChange?: boolean;
}

const NavTotalContainer = styled.div<NavStyleProps>`
  width: 100%;
  padding: 1em 1.5em;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  font-size: 1.3rem;
  z-index: 10000;
  transition: color 0.2s, top 1s;
  top: ${(props) => {
    return props.aboutChange ? "-7%" : "0%";
  }};

  svg {
    color: ${(props) => {
      return props.navChange ? "#000" : "#db3d3d";
    }};
  }
`;

const NavLeftContainer = styled.div<NavStyleProps>`
  font-weight: 900;
  cursor: pointer;
  transition: 0.4s;
  a {
    color: ${(props) => {
      return props.navChange ? "#000" : "#fff";
    }};
    text-decoration: none;
  }
  :hover {
    opacity: 0.5;
  }
`;

const NavRightContainer = styled.div`
  ul {
    display: flex;
    z-index: 10;
    a {
      color: #fff;
      margin-left: 3em;
    }
    svg {
      list-style: none;
      cursor: pointer;
      transition: 0.4s;
      :hover {
        opacity: 0.5;
      }
    }
  }
`;

const NavGithubIcon = styled(Github)`
  width: 30px;
`;

const NavVelogIcon = styled(Vimeo)`
  width: 30px;
`;

const NavNotionIcon = styled(Notion)`
  width: 30px;
`;

const Nav = (props: any) => {
  return (
    <NavTotalContainer
      aboutChange={props.scroll.aboutChange}
      navChange={props.scroll.navChange}
    >
      <NavLeftContainer navChange={props.scroll.navChange}>
        <a href="/">Wooseok Kim</a>
      </NavLeftContainer>
      <NavRightContainer>
        <ul>
          <a href="https://github.com/VVSOGI" target="_blank">
            <NavGithubIcon />
          </a>
          <a href="https://velog.io/@vvsogi" target="_blank">
            <NavVelogIcon />
          </a>
          <a
            href="https://www.notion.so/0d871baba2cb4827a37288198fb248e2"
            target="_blank"
          >
            <NavNotionIcon />
          </a>
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
