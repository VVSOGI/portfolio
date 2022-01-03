import React, { useEffect, useState } from "react";

import Imageform from "../../components/Forms/Imageform/Imageform";
import Textform from "../../components/Forms/Textform/Textform";
import Nav from "../../components/Nav/Nav";
import Basic from "../../components/StyleOnly/BackLight/Basic";
import MapNumber from "../../components/StyleOnly/MapNumber/MapNumber";

import { connect } from "react-redux";
import { aboutPageScroll } from "../../redux/actions";

import { useLocation } from "react-router";

import styled from "styled-components";
import { ProjectPageStyleProps } from "../MainPage/types/types";
import Skill from "./components/Skill/Skill";
import Graph from "./components/Graph/Graph";

import $ from "jquery";

require("fullpage.js/vendors/scrolloverflow");
require("fullpage.js");
require("fullpage.js/dist/jquery.fullpage.min.css");

const AboutTotalContainer = styled.div`
  position: relative;
  height: 300vh;
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
        <Graph />
      </AboutFullpage>
    </AboutTotalContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    aboutPageScrollTrue: () => dispatch(aboutPageScroll(true)),
    aboutPageScrollFalse: () => dispatch(aboutPageScroll(false)),
  };
};

const mapStateToProps = (state: any) => {
  return {
    page: state.pageReducer,
    scroll: state.scrollReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
