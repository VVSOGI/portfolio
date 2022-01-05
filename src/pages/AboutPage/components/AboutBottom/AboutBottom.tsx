import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { AboutBottomPropsType } from "../../types/types";
import {
  AboutBottomContainer,
  AboutBottomMainContainer,
  AboutBottomTextForm,
  AboutBottomTilteText,
  AboutBottomLine,
  AboutBottomEtcContainer,
  AboutBottomIconContainer,
  AboutBottomLink,
  AboutBottomVimeoIcons,
  AboutBottomGithubIcons,
  AboutBottomBackIcon,
  AboutSudoContainter,
} from "./styles";
import Imageform from "../../../../components/Forms/Imageform/Imageform";

import $ from "jquery";

const AboutBottom: React.FC<AboutBottomPropsType> = (props) => {
  const BottomIndex = 4;
  const imageSource = "/images/art.png";
  const history = useNavigate();

  const handlePageBack = () => {
    history("/");
    $.fn.fullpage.destroy("all");
  };

  return (
    <AboutBottomContainer className="section 04">
      <AboutBottomMainContainer bgColor={props.scroll?.bgColor}>
        <AboutBottomBackIcon
          onClick={() => {
            handlePageBack();
          }}
          isMatch={props.page?.page === BottomIndex}
        >
          <div className="line"></div>
        </AboutBottomBackIcon>
        <AboutBottomTextForm>
          <AboutBottomTilteText isMatch={props.page?.page === BottomIndex}>
            Contact Me.
          </AboutBottomTilteText>
          <AboutBottomLine isMatch={props.page?.page === BottomIndex} />
          <AboutBottomEtcContainer isMatch={props.page?.page === BottomIndex}>
            <a href="mailto:vvsogi@gmail.com">vvsogi@gmail.com</a>
            <span>+82 10-2472-8825</span>
            <AboutBottomIconContainer>
              <AboutBottomLink href="https://velog.io/@vvsogi">
                <AboutBottomVimeoIcons />
              </AboutBottomLink>
              <AboutBottomLink href="https://github.com/VVSOGI">
                <AboutBottomGithubIcons />
              </AboutBottomLink>
            </AboutBottomIconContainer>
          </AboutBottomEtcContainer>
        </AboutBottomTextForm>

        <Imageform
          indexMatch={props.page?.page === BottomIndex}
          imageSrc={imageSource}
        />
      </AboutBottomMainContainer>
    </AboutBottomContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    page: state.pageReducer,
    scroll: state.scrollReducer,
  };
};

export default connect(mapStateToProps, null)(AboutBottom);
