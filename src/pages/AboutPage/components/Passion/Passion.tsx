import React, { useEffect, useState } from "react";
import { PassionPropsType } from "../../types/types";
import { connect } from "react-redux";
import {
  PassionContainer,
  PassionMainContainer,
  PassionBigText,
  PassionTextContainer,
  PassionHeadText,
  PassionMainText,
  PassionBelt,
} from "./styles";

const Passion: React.FC<PassionPropsType> = (props) => {
  const [isPageIndexSame, setIsPageIndexSame] = useState<boolean>(false);
  const backgroundColor = [
    { backgroundColor: "#1a2f66", position: "84", id: 10 },
    { backgroundColor: "#3140ca", position: "72", id: 20 },
    { backgroundColor: "#237add", position: "60", id: 30 },
    { backgroundColor: "#be3329", position: "48", id: 40 },
    { backgroundColor: "#943220", position: "36", id: 50 },
    { backgroundColor: "#662511", position: "24", id: 60 },
    { backgroundColor: "#181818", position: "12", id: 70 },
    { backgroundColor: "#666666", position: "0", id: 80 },
  ];
  const pageIndex = 3;

  useEffect(() => {
    if (props.page?.page === pageIndex) {
      setIsPageIndexSame(true);
    } else {
      setIsPageIndexSame(false);
    }
  }, [props.page?.page]);

  return (
    <PassionContainer className="section 3">
      <PassionMainContainer bgColor={props.scroll?.bgColor}>
        {/* <PassionBelt /> */}
        {backgroundColor.map((item) => {
          return (
            <PassionBigText
              key={item.id}
              bgColor={item.backgroundColor}
              pos={item.position}
              passionEnter={isPageIndexSame}
            >
              PASSION
            </PassionBigText>
          );
        })}
        <PassionTextContainer passionEnter={isPageIndexSame}>
          <PassionHeadText>
            <div className="only">ONLY</div>
            <div className="better">BETTER</div>
            <div className="than">THAN</div>
            <div className="yesterday">YESTERDAY</div>
          </PassionHeadText>
        </PassionTextContainer>
      </PassionMainContainer>
    </PassionContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    page: state.pageReducer,
    scroll: state.scrollReducer,
  };
};

export default connect(mapStateToProps, null)(Passion);
