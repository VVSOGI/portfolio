import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Imageform from "../../components/Forms/Imageform/Imageform";
import Textform from "../../components/Forms/Textform/Textform";
import Nav from "../../components/Nav/Nav";
import Basic from "../../components/StyleOnly/BackLight/Basic";
import MapNumber from "../../components/StyleOnly/MapNumber/MapNumber";

import { connect } from "react-redux";
import {
  aboutPageScroll,
  pageIndexChange,
  passionPageEnter,
} from "../../redux/actions";
import { useLocation } from "react-router";

import Skill from "./components/Skill/Skill";
import Passion from "./components/Passion/Passion";

import { ProjectPageStyleProps } from "../MainPage/types/types";

import $ from "jquery";
import Bottom from "./components/Bottom/Bottom";

require("fullpage.js/vendors/scrolloverflow");
require("fullpage.js");
require("fullpage.js/dist/jquery.fullpage.min.css");

const AboutTotalContainer = styled.div`
  position: relative;
  height: 400vh;
  transition: 1s;
  background: linear-gradient(90deg, #000000 5%, rgb(13, 41, 70) 65%);
  overflow-x: hidden;

  #fullpage2 {
    width: 100%;
    position: relative;
    height: 100vh;
  }
`;

const AboutFullpage = styled.div`
  width: 100%;
  height: 100%;
  /* position: relative; */
  transition: 1s;
`;

const ProjectRenderContainer = styled.div`
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const BackgroundGrad = styled.div<ProjectPageStyleProps>`
  position: absolute;
  top: 0;
  left: ${(props) => {
    return props.pageRender ? "-60%" : "-84.5%";
  }};
  width: 100%;
  height: 100vh;
  transform: skew(0deg);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 10%, #000311 70%);
  z-index: 0;
  transition: 1s;
  transition-timing-function: cubic-bezier(0.74, 0.22, 0.26, 1.01); //
`;

const AboutPage: React.FC = (props: any) => {
  const [isRender, setIsRender] = useState<boolean>(false);
  const { key } = useLocation();

  useEffect(() => {
    setIsRender(true);

    $("#fullpage2").fullpage({
      autoScrolling: true,
      navigation: true,
      scrollingSpeed: 1200,
      navigationPosition: "left",
      css3: true,
      easingcss3: "cubic-bezier(.74,.22,.26,1.01)",
      onLeave: (origin: object, destination: number, direction: string) => {
        props.pageIndexChange(destination);
        if (destination === 2) {
          props.aboutPageScrollTrue();
        } else {
          props.aboutPageScrollFalse();
        }
      },
    });

    const localKey = localStorage.getItem("key");
    if (localKey !== undefined && key === localKey) {
      localStorage.removeItem("key");
      window.location.reload();
    } else {
      localStorage.setItem("key", key);
    }
  }, []);

  const aboutObject = {
    headText: `About Me`,
    summaryText:
      "Love Development, Love Planning \nAlso Love Design and Communicate",
  };
  const imageSource: string = "/images/paintingme.png";

  return (
    <AboutTotalContainer>
      <div className="etc">
        <Nav />
        <Basic />
      </div>
      <AboutFullpage id="fullpage2">
        <ProjectRenderContainer className="section 1">
          <BackgroundGrad pageRender={isRender} />
          <Textform
            headText={aboutObject.headText}
            summaryText={aboutObject.summaryText}
            indexMatch={false}
            pageIndex={5}
          />
          <Imageform
            indexMatch={false}
            imageSrc={imageSource}
            pageIndex={0}
            pageRender={isRender}
          />
          <MapNumber
            pageIndex={0}
            indexMatch={false}
            number={`02`}
            pageRender={isRender}
          />
        </ProjectRenderContainer>
        <Skill />
        <Passion />
        <Bottom scroll={{ bgColor: "#fff" }} />
      </AboutFullpage>
    </AboutTotalContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    aboutPageScrollTrue: () => dispatch(aboutPageScroll(true)),
    aboutPageScrollFalse: () => dispatch(aboutPageScroll(false)),
    passionPageEnterTrue: () => dispatch(passionPageEnter(true)),
    passionPageEnterFalse: () => dispatch(passionPageEnter(false)),
    pageIndexChange: (index: number) => dispatch(pageIndexChange(index)),
  };
};

const mapStateToProps = (state: any) => {
  return {
    page: state.pageReducer,
    scroll: state.scrollReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
