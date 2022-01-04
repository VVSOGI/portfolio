import React, { useEffect, useState } from "react";

import Imageform from "../../components/Forms/Imageform/Imageform";
import Textform from "../../components/Forms/Textform/Textform";
import Nav from "../../components/Nav/Nav";
import Basic from "../../components/StyleOnly/BackLight/Basic";
import MapNumber from "../../components/StyleOnly/MapNumber/MapNumber";
import Concept from "./components/Concept/Concept";
import Development from "./components/Development/Development";
import Summary from "./components/Summary/Summary";

import { connect } from "react-redux";
import { pageChange, scrollMoving } from "../../redux/actions";

import { useLocation } from "react-router";

import {
  ProjectTotalContainer,
  ProjectRenderContainer,
  BackgroundGrad,
} from "./styles";

const ProjectPage: React.FC = (props: any) => {
  const [isRender, setIsRender] = useState<boolean>(false);
  const { key } = useLocation();

  useEffect(() => {
    setIsRender(true);
    props.pageChange();

    let check: boolean;
    const localKey = localStorage.getItem("key");
    if (localKey !== undefined && key === localKey) {
      localStorage.removeItem("key");
      window.location.reload();
    } else {
      localStorage.setItem("key", key);
    }

    window.addEventListener("scroll", () => {
      let target = document.querySelector(".summary")?.getClientRects();
      if (target) {
        let targetPos = target[0].y - 40;
        if (targetPos < 0 && !check) {
          props.scrollTrue();
          check = true;
        } else if (targetPos > 0 && check) {
          props.scrollFalse();
          check = false;
        }
      }
    });
  }, []);

  const projectObject = {
    headText: `FIND RECIPES \nBOBPAGO`,
    summaryText: "Enjoy the Recipe that Alphago AI recommends.",
  };
  const imageSource: string = "/images/bobpago.png";

  return (
    <ProjectTotalContainer id="fullpage2">
      <Nav />

      <ProjectRenderContainer>
        <BackgroundGrad pageRender={isRender} />
        <Textform
          headText={projectObject.headText}
          summaryText={projectObject.summaryText}
          indexMatch={false}
          pageIndex={0}
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
          number={"01"}
          pageRender={isRender}
        />
      </ProjectRenderContainer>

      <Basic />

      {/* 구성 */}

      <Summary />
      <Concept />
      <Development />

      {/* 구성 */}
    </ProjectTotalContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    scrollTrue: () => dispatch(scrollMoving(true)),
    scrollFalse: () => dispatch(scrollMoving(false)),
    pageChange: () => dispatch(pageChange(true)),
  };
};

const mapStateToProps = (state: any) => {
  return {
    page: state.pageReducer,
    scroll: state.scrollReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
