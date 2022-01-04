import styled from "styled-components";
import { TextAndImageStyleProps } from "../../types/types";
import { Vimeo, Github } from "@styled-icons/entypo-social";

export const BottomTotalContainer = styled.div`
  height: 100vh;
  background-color: transparent;
  position: relative;
  z-index: 5;
`;

export const BottomTextForm = styled.div`
  position: relative;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0%;
  /* top: 22%; */
  margin-left: 9.5%;
  width: 70%;
  overflow: hidden;
  height: 50%;
  color: #fff;
  z-index: 5;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const BottomTilteText = styled.div<TextAndImageStyleProps>`
  font-size: 120px;
  transform: ${(props) => {
    return props.isMatch ? `translateX(0%)` : `translateX(-70%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `1.2s` : `0s`;
  }};
  @media only screen and (max-width: 1024px) {
    font-size: 100px;
    transform: ${(props) => {
      return props.isMatch ? `translateX(0%)` : `translateX(-100%)`;
    }};
  }
  @media only screen and (max-width: 768px) {
    font-size: 72px;
  }
`;

export const BottomLine = styled.div<TextAndImageStyleProps>`
  width: 30%;
  height: 1%;
  background-color: #ff6c6c;
  margin-bottom: 1em;
  transform: ${(props) => {
    return props.isMatch ? `translateX(0%)` : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `1.5s` : `0s`;
  }};
  @media only screen and (max-width: 1024px) {
    width: 60%;
  }
`;

export const BottomEtcContainer = styled.div<TextAndImageStyleProps>`
  display: flex;
  flex-direction: column;
  a {
    font-size: 28px;
    color: #fff;
    text-decoration: none;
    :hover {
      color: #ff6c6c;
    }
    transition: 0.3s;
  }
  span {
    font-size: 28px;
  }
  transform: ${(props) => {
    return props.isMatch ? `translateX(0%)` : `translateX(-100%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `1.5s` : `0s`;
  }};
`;

export const BottomIconContainer = styled.div`
  display: flex;
`;

export const BottomLink = styled.a`
  z-index: 10;
  cursor: pointer;
  color: #fff;
  margin-top: 0.5em;
`;

export const BottomVimeoIcons = styled(Vimeo)`
  width: 32px;
`;

export const BottomGithubIcons = styled(Github)`
  width: 32px;
  margin-left: 1em;
`;
