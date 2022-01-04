export interface SkillStylesProps {
  index: number;
  active: [number, boolean];
  mouseIn?: boolean;
  bgColor?: string;
  isMouseover?: number;
}

export interface SkillPropsType {
  passionBgColorChange: (bgColor: string) => {};
}

// Skill Components

export interface PassionStylesProps {
  bgColor?: string;
  passionEnter?: boolean;
  pos?: string;
}

export interface PassionPropsType {
  scroll?: { bgColor: string };
  page?: { page: number };
}

// Passion Components

export interface AboutBottomStylesProp {
  bgColor: string;
}

export interface AboutBottomPropsType {
  scroll: { bgColor: string };
  page?: { page: number };
}

// AboutBottom Components
