import React from "react";
import $ from "jquery";
import { useNavigate } from "react-router";
import { scrollMoving } from "../../../../redux/actions";
import { connect } from "react-redux";
import { DevelopmentContainer, ContentContainer, Title, Back } from "./styles";

interface DevelopmentPropsType {
  scrollFalse: () => {};
}

const Development: React.FC<DevelopmentPropsType> = (props) => {
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
