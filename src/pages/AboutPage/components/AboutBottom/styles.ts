import styled from "styled-components";
import { Vimeo, Github } from "@styled-icons/entypo-social";
import { TextAndImageStyleProps } from "../../../MainPage/types/types";
import { AboutBottomStylesProp } from "../../types/types";

export const AboutBottomContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const AboutBottomMainContainer = styled.div<AboutBottomStylesProp>`
  width: 100%;
  height: 105%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutBottomTextForm = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0%;
  margin-left: 9.5%;
  overflow: hidden;
  height: 50%;
  color: #fff;
  z-index: 5;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

export const AboutBottomTilteText = styled.div<TextAndImageStyleProps>`
  font-size: 120px;
  transform: ${(props) => {
    return props.isMatch ? `translateX(0%)` : `translateX(-70%)`;
  }};
  transition: 1s;
  transition-delay: ${(props) => {
    return props.isMatch ? `1.2s` : `0s`;
  }};
  @media only screen and (max-width: 1024px) {
    font-size: 120px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 72px;
  }
`;

export const AboutBottomLine = styled.div<TextAndImageStyleProps>`
  width: 50%;
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
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 65%;
  }
`;

export const AboutBottomEtcContainer = styled.div<TextAndImageStyleProps>`
  display: flex;
  flex-direction: column;
  a {
    font-size: 28px;
    color: #fff;
    text-decoration: none;
    max-width: 30%;
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
  @media only screen and (max-width: 1024px) {
    a {
      font-size: 34px;
    }
    span {
      font-size: 34px;
    }
  }
`;

export const AboutBottomIconContainer = styled.div`
  display: flex;
`;

export const AboutBottomLink = styled.a`
  z-index: 10;
  cursor: pointer;
  color: #fff;
  margin-top: 0.5em;
`;

export const AboutBottomVimeoIcons = styled(Vimeo)`
  width: 32px;
`;

export const AboutBottomGithubIcons = styled(Github)`
  width: 32px;
  margin-left: 1em;
`;

export const AboutBottomBackIcon = styled.div<TextAndImageStyleProps>`
  width: 30%;
  height: 10%;
  position: absolute;
  background-color: transparent;
  left: ${(props) => {
    return props.isMatch ? "10%" : "-50%";
  }};
  bottom: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: 2s, transform 0.5s;
  opacity: ${(props) => {
    return props.isMatch ? "1" : "0";
  }};
  z-index: 100;
  :hover {
    transform: translate(-5%);
  }
  .line {
    background-color: #fff;
    height: 5%;
    width: 80%;
    ::before {
      width: 10%;
      height: 5%;
      background-color: #fff;
      position: absolute;
      content: "";
      left: 0;
      top: 40%;
      transform: rotate(-15deg);
    }
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    bottom: 15%;
    .line {
      ::before {
        top: 32%;
      }
    }
  }
`;

export const AboutSudoContainter = styled.div`
  position: absolute;
  width: 60%;
  height: 100%;
  right: 0;
  background-color: #333;
`;
