import React from "react";
import { NumberformProps } from "../../../pages/MainPage/types/types";
import { MapNumberContainer } from "./styles";

const MapNumber: React.FC<NumberformProps> = (props) => {
  return (
    <MapNumberContainer
      animationOn={props.pageIndex === 0 ? false : true}
      isMatch={props.indexMatch}
    >
      {props.number}
    </MapNumberContainer>
  );
};

export default MapNumber;
