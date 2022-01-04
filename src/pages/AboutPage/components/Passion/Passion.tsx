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
    { backgroundColor: "#1a2f66", position: "42", id: 10 },
    { backgroundColor: "#3140ca", position: "35", id: 20 },
    { backgroundColor: "#237add", position: "28", id: 30 },
    { backgroundColor: "#be3329", position: "21", id: 40 },
    { backgroundColor: "#943220", position: "14", id: 50 },
    { backgroundColor: "#662511", position: "7", id: 60 },
    { backgroundColor: "#000000", position: "0", id: 70 },
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
        <PassionBelt passionEnter={isPageIndexSame} />
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
            배우려는 <span>자세</span>와 <span>의지</span>는 누구보다 뛰어나다고
            생각합니다.
          </PassionHeadText>
          <PassionMainText>
            저는 이제 개발을 시작한 지 1년이 된 주니어 개발자입니다. 하지만
            1년간 이뤘던 성과는 결코 적다고 생각하지 않습니다. 처음에 html을
            메모장에 직접 작성해가며 브라우저에 띄워놓았던 시기가 생각이 납니다.
            이후에 css라는 것을 알게 되었고, Javascript가 무엇인지 알게 되었고
            React, Typescript, React-Native 같은 여러가지 기술들을 다루게
            되었습니다. 운이좋게도 이 스택들을 배우는 데 투자한 시간들이
            너무나도 즐거웠습니다. 그리고 의지할 수 있는 팀원들을 만나서 더더욱
            많은 도전을 할 수 있었습니다. 저는 앞으로도 뛰어난 개발자들의
            작업물이나 지식들을 깊이있게 공부할 것이고 개발 뿐만 아니라 여러가지
            방면의 훌륭한 사람들과 대화하면서 깨달은 것들을 코드로 작성해서
            사람들에게 보여줄 수 있게끔 하고싶습니다. 아직은 여러가지로 부족한
            개발자이고 미숙한 사회초년생이지만 제가 가진 개발이란 무기를 더 갈고
            닦아서 향후 5년안에 깜짝 놀랄만한 작업물을 만들 수 있는 사람이 될 것
            입니다. 데일 카네기의 명언 중에{" "}
            <span className="emphasis">
              "과정에서 재미를 느끼지 못하는데 성공하는 일은 거의 없다"
            </span>
            라는 말이 있습니다.
            <br />
            <br /> 지금 즐겁게 개발을 할 수 있음에 감사하며, 앞으로도 다양한
            기술들을 익혀서 남들이 생각 하지 못했던 것들을 마법처럼 완성시킬 수
            있는 개발자가 되도록 노력하겠습니다.
          </PassionMainText>
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
