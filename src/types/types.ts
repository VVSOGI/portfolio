/*--------------------Map------------------  */

export interface MapStyleProps {
  match1: number;
  match2: number;
}

export interface MapComponentProps {
  id: number;
  name: string;
}

/*--------------------Map--------------------*/

/*------------------Loading------------------*/

export interface LoadingStyleProps {
  loading: string;
}

/*------------------Loading------------------*/

/*--------------------App--------------------*/

export interface AppMoveStyleProps {
  moveNumber: number;
}

/*--------------------App--------------------*/

/*--------------------Top--------------------*/

export interface TopStyleProps {
  componentIndex: number;
  propsIndex: number;
  mosPos?: number[];
  isMouseMove?: boolean;
}

export interface TopComponentProps {
  index: number;
}

export interface TopRockStyleProps {
  right: number;
  top: number;
  scale: string;
  rotate: string;
  componentIndex?: number;
  propsIndex?: number;
  mospos?: number[];
  isMouseMove?: boolean;
}

/*--------------------Top--------------------*/
