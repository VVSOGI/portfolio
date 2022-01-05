import React from "react";
import { ImageformProps } from "../../../pages/MainPage/types/types";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import $ from "jquery";

import { ImageTotalContianer, SudoContainer, Image } from "./styles";

const Imageform: React.FC<ImageformProps> = (props) => {
  const history = useNavigate();
  const handleButton = () => {
    let pageIndex = props.page?.page;
    if (pageIndex === 2) {
      $.fn.fullpage.destroy("all");
      history("about");
    } else if (pageIndex === 3) {
      $.fn.fullpage.destroy("all");
      history("project");
    }
  };
  return (
    <ImageTotalContianer
      animationOn={props.pageIndex === 0 ? false : true}
      pageRender={props.pageRender}
      isMatch={props.indexMatch}
      onClick={() => handleButton()}
    >
      <Image
        src={props.imageSrc}
        pageChange={props.page ? props.page.isPageMove : false}
      />
      <SudoContainer
        animationOn={props.pageIndex === 0 ? false : true}
        isMatch={props.indexMatch}
      />
    </ImageTotalContianer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    page: state.pageReducer,
  };
};

export default connect(mapStateToProps, null)(Imageform);
