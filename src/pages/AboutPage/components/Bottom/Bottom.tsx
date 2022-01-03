import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const BottomContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const BottomMainContainer = styled.div<BottomStylesProp>`
  width: 100%;
  height: 105%;
  position: relative;
  background-color: ${(props) => {
    return props.bgColor;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface BottomPropsType {
  scroll: { bgColor: string };
}

interface BottomStylesProp {
  bgColor: string;
}

const Bottom: React.FC<BottomPropsType> = (props) => {
  return (
    <BottomContainer className="section 04">
      <BottomMainContainer bgColor={props.scroll?.bgColor}>
        This is Bottom.
      </BottomMainContainer>
    </BottomContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    scroll: state.scrollReducer,
  };
};

export default connect(mapStateToProps, null)(Bottom);
