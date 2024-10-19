import { Dispatch, SetStateAction } from "react";
import { SHAPES_TYPE } from "./constants/shapes";
import { strokesType } from "./constants/strokes";
import { FontSizeType } from "./constants/font_size";

export type BoardContextType = {
  BACKGROUND_COLOUR: string;
  SET_BACKGROUND_COLOUR: Dispatch<SetStateAction<string>>;
  STROKE_COLOUR: string;
  SET_STROKE_COLOUR: Dispatch<SetStateAction<string>>;
  ZOOM: number;
  SET_ZOOM: Dispatch<SetStateAction<number>>;
  OPTION: string;
  SET_OPTION: Dispatch<SetStateAction<SHAPES_TYPE>>;
  IS_LOCKED: boolean;
  SET_IS_LOCKED: Dispatch<SetStateAction<boolean>>;
  STROKE: number;
  SET_STROKE: Dispatch<SetStateAction<strokesType>>;
  FONT_SIZE: number;
  SET_FONT_SIZE: Dispatch<SetStateAction<FontSizeType>>;
};
