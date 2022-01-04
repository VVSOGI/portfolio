import React from "react";
import styled from "styled-components";
import $ from "jquery";
import { useNavigate } from "react-router";
import { scrollMoving } from "../../../../redux/actions";
import { connect } from "react-redux";

const DevelopmentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: #ffffff;
  z-index: 1;
`;

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  position: relative;
  font-size: 32px;
  cursor: pointer;
  :hover {
    div {
      left: -140%;
      ::before {
        transform: rotate(-30deg);
        transition: 0.2s;
        left: -1%;
        top: -280%;
      }
    }
  }
`;

const Back = styled.div`
  width: 100%;
  height: 5%;
  background-color: #000;
  position: absolute;
  transition: 1s;
  top: 50%;
  left: -110%;
  ::before {
    content: "";
    width: 25%;
    height: 100%;
    left: -1%;
    top: 0%;
    background-color: #000;
    position: absolute;
    transition: 0.2s;
  }
`;

const Development = (props: { scrollFalse: () => {} }) => {
  const history = useNavigate();
  const handlePageBack = () => {
    props.scrollFalse();
    $.fn.fullpage.destroy("all");
    history("/");
  };

  return (
    <DevelopmentContainer>
      <ContentContainer>
        <Title
          onClick={() => {
            handlePageBack();
          }}
        >
          뒤로가기
          <Back></Back>
        </Title>
      </ContentContainer>
    </DevelopmentContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    scrollFalse: () => dispatch(scrollMoving(false)),
  };
};

export default connect(null, mapDispatchToProps)(Development);
