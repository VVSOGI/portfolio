import { MouseEvent } from "react";

export const Mousemove = (e: any) => {
  let pageX = 0,
    pageY = 0,
    standardX = 0,
    standardY = 0,
    maxX = 0,
    maxY = 0,
    angleX = 0,
    angleY = 0,
    softX = 0,
    softY = 0;

  pageX = e.pageX;
  pageY = e.pageY;

  standardX = window.innerWidth / 2 - pageX;
  standardY = window.innerHeight / 2 - pageY;

  maxX = Math.max(-150, Math.min(150, standardX));
  maxY = Math.max(-150, Math.min(150, standardY));

  angleX = maxX * 0.22;
  angleY = maxY * 0.22;

  softX += (angleX - softX) * 0.4;
  softY += (angleY - softY) * 0.4;

  return [softX, softY];
};
