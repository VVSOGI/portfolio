import styled from "styled-components";

export const ConceptContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 1;
  img {
    z-index: 1;
    height: 170vh;
    width: 100%;
    object-fit: cover;
  }
`;

export const ContentContainer = styled.div`
  z-index: 1;
  padding: 4em 12em;
  .dede {
    display: flex;
    align-items: center;
    margin-bottom: 7.5em;
    h1 {
      flex: 1;
      span {
        margin-right: 10%;
        color: #fa4c4c;
      }
    }
    h4 {
      flex: 1.3;
    }
  }
  .tete {
    display: flex;
    align-items: center;
    margin-bottom: 1.5em;
    h1 {
      flex: 1;
      span {
        margin-right: 10%;
        color: #fa4c4c;
      }
    }
    h4 {
      flex: 1.3;
    }
  }
`;
