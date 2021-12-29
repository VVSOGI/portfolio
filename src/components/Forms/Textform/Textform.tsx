import { TextformProps } from "../../../pages/MainPage/types/types";
import {
  TextComingContainer,
  HeadText,
  SummaryText,
  ComingButton,
  ComingLine,
  LinkButton,
} from "./styles";
import { connect } from "react-redux";
import { pageChange } from "../../../redux/actions";
import { useNavigate } from "react-router";

import $ from "jquery";

const Textform: React.FC<TextformProps> = (props: any) => {
  console.log(props);

  const history = useNavigate();
  const handleButton = () => {
    if (props.pageIndex === 2) {
      $.fn.fullpage.destroy("all");
      history("project");
    } else if (props.pageIndex === 3) {
      $.fn.fullpage.destroy("all");
      history("about");
    }
  };

  return (
    <TextComingContainer position={props.position ? props.position : null}>
      <HeadText
        animationOn={props.pageIndex === 0 ? false : true}
        isMatch={props.indexMatch}
      >
        {props.headText}
      </HeadText>
      <ComingLine
        pageChange={props.page.isPageMove}
        animationOn={props.pageIndex === 0 ? false : true}
        isMatch={props.indexMatch}
      />
      <SummaryText
        animationOn={props.pageIndex === 0 ? false : true}
        isMatch={props.indexMatch}
      >
        {props.summaryText}
      </SummaryText>
      <ComingButton
        pageChange={props.page.isPageMove}
        animationOn={props.pageIndex === 0 ? false : true}
        onClick={() => handleButton()}
        isMatch={props.indexMatch}
      >
        {props.pageIndex === 0 ? (
          <LinkButton href="https://www.bobpago.com/" target="_blank">
            Visit Site
          </LinkButton>
        ) : (
          <span>More Details.</span>
        )}
      </ComingButton>
    </TextComingContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    pageChange: () => dispatch(pageChange(true)),
  };
};

const mapStateToProps = (state: any) => {
  return {
    page: state.pageReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Textform);
