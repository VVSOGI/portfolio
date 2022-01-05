/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import Imageform from "../../components/Forms/Imageform/Imageform";
import Textform from "../../components/Forms/Textform/Textform";
import Nav from "../../components/Nav/Nav";
import MapNumber from "../../components/StyleOnly/MapNumber/MapNumber";

import { connect } from "react-redux";
import { aboutPageScroll, pageIndexChange } from "../../redux/actions";
import { useLocation, useNavigate } from "react-router";

import Skill from "./components/Skill/Skill";
import Passion from "./components/Passion/Passion";

import $ from "jquery";
import Bottom from "./components/AboutBottom/AboutBottom";

import {
  AboutTotalContainer,
  AboutFullpage,
  ProjectRenderContainer,
  BackgroundGrad,
  BackIconContainer,
} from "./styles";
import BackLight from "../../components/StyleOnly/BackLight/BackLight";
import ScrollDown from "../../components/StyleOnly/ScrollDown/ScrollDown";

require("fullpage.js/vendors/scrolloverflow");
require("fullpage.js");
require("fullpage.js/dist/jquery.fullpage.min.css");

const AboutPage: React.FC = (props: any) => {
  const [isRender, setIsRender] = useState<boolean>(false);
  const { key } = useLocation();
  const history = useNavigate();

  const handlePageBack = () => {
    history("/");
    $.fn.fullpage.destroy("all");
  };

  useEffect(() => {
    props.pageIndexChange(1);

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

  useEffect(() => {
    if (props.page.page === 1) {
      setIsRender(true);
    } else {
      setIsRender(false);
    }
  }, [props.page.page]);

  const aboutObject = {
    headText: `About Me`,
    summaryText:
      "Love Development, Love Planning \nAlso Love Design and Communicate",
  };
  const imageSource = "/images/paintingme.png";

  return (
    <AboutTotalContainer>
      <Nav />
      <BackLight isLoading={false} />

      <AboutFullpage id="fullpage2">
        <ProjectRenderContainer className="section 1">
          <BackIconContainer
            onClick={() => {
              handlePageBack();
            }}
            pageRender={isRender}
          >
            <div className="line" />
          </BackIconContainer>
          <ScrollDown pageRender={isRender} />
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
