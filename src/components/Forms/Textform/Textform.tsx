import styled from "styled-components";
import {
  TextformProps,
  TextAndImageStyleProps,
  TextContainerStyleProps,
} from "../../../types/types";

const TextComingContainer = styled.div<TextContainerStyleProps>`
  position: absolute;
  left: 0%;
  top: ${(props) => {
    return props.position ? `${props.position}` : "20%";
  }};
  margin-left: 9.5%;
  width: 45%;
  overflow: hidden;
  height: 100%;
  color: #fff;
  z-index: 5;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

const HeadText = styled.pre<TextAndImageStyleProps>`
  font-size: 100px;
  font-weight: 600;
  line-height: 1.1em;
  transform: ${(props) => {
    return props.isMatch ? `translateX(0%)` : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `1.2s` : `0s`;
  }};
`;

const SummaryText = styled.pre<TextAndImageStyleProps>`
  margin-top: 2em;
  font-size: 24px;
  font-weight: 400;
  transform: ${(props) => {
    return props.isMatch ? `translateX(0%)` : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `1.5s` : `0s`;
  }};
`;

const ComingButton = styled.div<TextAndImageStyleProps>`
  background-color: #ff6c6c;
  width: 200px;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 3em;
  border-radius: 20px;
  transform: ${(props) => {
    return props.isMatch ? `translateX(0%)` : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `2s` : `0s`;
  }};
  span {
    position: relative;
    ::before {
      content: "";
      position: absolute;
      bottom: 5%;
      width: 0%;
      height: 2px;
      background-color: #ffffff;
      transition: 0.5s;
    }
  }
  :hover {
    span {
      ::before {
        width: 100%;
      }
    }
  }
`;

const ComingLine = styled.div<TextAndImageStyleProps>`
  width: 69%;
  height: 0.5%;
  background-color: #ff6c6c;
  /* position: absolute; */
  top: 30%;
  left: 0;
  transform: ${(props) => {
    return props.isMatch ? `translateX(0%)` : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `1.5s` : `0s`;
  }};
`;

const Textform: React.FC<TextformProps> = (props) => {
  return (
    <TextComingContainer position={props.position ? props.position : null}>
      <HeadText isMatch={props.indexMatch}>{props.headText}</HeadText>
      <ComingLine isMatch={props.indexMatch} />
      <SummaryText isMatch={props.indexMatch}>{props.summaryText}</SummaryText>
      <ComingButton isMatch={props.indexMatch}>
        <span>More Details.</span>
      </ComingButton>
    </TextComingContainer>
  );
};

export default Textform;
