declare module "react-slick" {
  import * as React from "react";

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    centerMode?: boolean;
    centerPadding?: string;
    beforeChange?: (current: number, next: number) => void;
    responsive?: Array<{
      breakpoint: number;
      settings: Settings;
    }>;
    [key: string]: unknown;
  }

  export default class Slider extends React.Component<Settings> {
    slickGoTo(slide: number, dontAnimate?: boolean): void;
    slickNext(): void;
    slickPrev(): void;
    slickPause(): void;
    slickPlay(): void;
  }
}
