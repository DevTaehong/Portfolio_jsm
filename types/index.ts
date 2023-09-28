import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ProjectProps = {
  name: string;
  description: string;
  techStack: string[];
  image: string;
};
