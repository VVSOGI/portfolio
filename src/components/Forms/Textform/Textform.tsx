import { TextformProps } from "../../../types/types";
import {
  TextComingContainer,
  HeadText,
  SummaryText,
  ComingButton,
  ComingLine,
} from "./styles";
import { connect } from "react-redux";
import { pageChange } from "../../../redux/actions";

const Textform: React.FC<TextformProps> = (props: any) => {
  const handleButton = () => {
    props.pageChange();
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
        animationOn={props.pageIndex === 0 ? false : true}
        onClick={() => handleButton()}
        isMatch={props.indexMatch}
      >
        <span>More Details.</span>
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
