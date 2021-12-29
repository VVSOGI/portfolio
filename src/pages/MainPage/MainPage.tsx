import React, { useEffect, useState } from "react";

import $ from "jquery";

import Nav from "../../components/Nav/Nav";
import Top from "./components/Sections/Top/Top";
import Project from "./components/Sections/Project/Project";
import About from "./components/Sections/About/About";
import Bottom from "./components/Sections/Bottom/Bottom";
import BackLight from "../../components/StyleOnly/BackLight/BackLight";

import {
  AppTotalContainer,
  AppMeaningfulSection,
  AppMeaningfulnessSection,
  BackgroundGrad,
  FirstLoadingGround,
} from "./styles";

import { connect } from "react-redux";
import { pageChange } from "../../redux/actions";
import Spacecloud from "../../components/StyleOnly/Spacecloud/Spacecloud";

require("fullpage.js/vendors/scrolloverflow");
require("fullpage.js");
require("fullpage.js/dist/jquery.fullpage.min.css");

const MainPage: React.FC<any> = (props) => {
  const [mapIndex, setMapIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, [setMapIndex]);

  useEffect(() => {
    setMapIndex(1);
    props.pageChange();

    /* Fullpage.js */

    $("#fullpage").fullpage({
      autoScrolling: true,
      navigation: true,
      scrollingSpeed: 1200,
      navigationPosition: "left",
      css3: true,
      easingcss3: "cubic-bezier(.74,.22,.26,1.01)",
      onLeave: (origin: object, destination: number, direction: string) => {
        setMapIndex(destination);
      },
    });
    /* Fullpage.js */
  }, []);
  return (
    <AppTotalContainer>
      <Nav />
      <AppMeaningfulSection id="fullpage">
        <Top index={mapIndex} />
        <Project index={mapIndex} />
        <About index={mapIndex} />
        <Bottom index={mapIndex} />
      </AppMeaningfulSection>
      <AppMeaningfulnessSection>
        <BackgroundGrad />
        <BackLight />
        <Spacecloud />
      </AppMeaningfulnessSection>
      <FirstLoadingGround loading={isLoading ? "1" : "0"} />
    </AppTotalContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    pageChange: () => dispatch(pageChange(false)),
  };
};

export default connect(null, mapDispatchToProps)(MainPage);
