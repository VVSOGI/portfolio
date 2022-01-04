import React from "react";
import { ConceptContainer, ContentContainer } from "./styles";

const Concept: React.FC = () => {
  return (
    <ConceptContainer>
      <ContentContainer>
        <div className="dede">
          <h1>
            <span>01</span> 밥파고를 만든 이유
          </h1>
          <h4>
            혼자 지내는 시간이 많아지고, 밖을 나가는 것이 제한되는 상황이
            늘어나는 시간이 늘어났습니다. 이런 상황에서 밥까지 대충 먹어버리면
            그것이 가장 최악인 거라고 생각해요. 밥은 잘 챙겨먹어야죠! 밥파고를
            만든 4인의 개발자는 집에서 개발만 하다보니 건강도 마음도 많이
            지쳐갔었습니다. 할 줄 아는 건 개발이고 나가서 놀 수도 없는 상황이니
            집에서 맛있는 거라도 잔뜩 만들어서 먹어보자! 배달과 컵 라면은 그만
            먹고 싶다! 라는 생각에서 나온 앱입니다.
          </h4>
        </div>
        <div className="dede">
          <h1>
            <span>02</span> 개발 파트
          </h1>
          <h4>
            밥파고 프로젝트에서 UI와 UX를 주로 다루는 프론트엔드 개발자였습니다.
            그리고 사용하는 유저들의 시각적인 즐거움을 주기 위해서 다양한
            애니메이션 이펙트를 제작했습니다. 특히 원하는 레시피를 찾았을 때
            화면이 한 섹션마다 움직이는 애니메이션이 있는데 GSAP을 이용한
            효과이고 제가 정말 열심히 만들었으니까 꼭 한번 구경해주세요! 아 물론
            이 부분 말고는 다 직접 제작한 효과라는 것도 기억해주세요. 😙
          </h4>
        </div>
        <div className="dede">
          <h1>
            <span>03</span> 제작 기간 / 아쉬운 점
          </h1>
          <h4>
            제작 기간은 9월 초 부터 약 4주의 시간이 걸렸습니다! 정말 공들여서
            만들었지만, 지금 2달 정도가 지나고 다시 프로젝트를 보니, 초기에 랜딩
            페이지에서 스크롤 단위에 맞춰서 글자가 나오는 효과가 최적화가
            완벽하지 않았던 것 같습니다. 유저의 컴퓨터에서 인터넷 환경이 좋지
            않다던가 컴퓨터에 여러가지 다른 업무를 보고있는 상황이라면 많이
            버벅이는 느낌을 받는다는 것을 알게되었습니다. 지금 수정 작업에
            들어갔으니 좀만 기다려주세요~
          </h4>
        </div>
      </ContentContainer>
      <img src="/images/slide.png" alt="" />
    </ConceptContainer>
  );
};

export default Concept;
