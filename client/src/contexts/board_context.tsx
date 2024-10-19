"use client";

import { COLOURS } from "@/constants/colours";
import { FontSizeType } from "@/constants/font_size";
import { SHAPES_TYPE } from "@/constants/shapes";
import { strokesType } from "@/constants/strokes";
import { BoardContextType } from "@/types";
import { createContext, useContext, useState } from "react";

const BoardContext = createContext<BoardContextType | null>(null);

const BoardContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [BACKGROUND_COLOUR, SET_BACKGROUND_COLOUR] = useState(
    COLOURS.BACKGROUND_COLOURS[0]
  );
  const [STROKE_COLOUR, SET_STROKE_COLOUR] = useState(
    COLOURS.STROKE_COLOURS[0]
  );

  const [ZOOM, SET_ZOOM] = useState(100);
  const [OPTION, SET_OPTION] = useState<SHAPES_TYPE>("MOUSE_POINTER");
  const [IS_LOCKED, SET_IS_LOCKED] = useState(false);
  const [STROKE, SET_STROKE] = useState<strokesType>(3);
  const [FONT_SIZE, SET_FONT_SIZE] = useState<FontSizeType>(20);

  return (
    <BoardContext.Provider
      value={{
        BACKGROUND_COLOUR,
        SET_BACKGROUND_COLOUR,
        STROKE_COLOUR,
        SET_STROKE_COLOUR,
        ZOOM,
        SET_ZOOM,
        OPTION,
        SET_OPTION,
        IS_LOCKED,
        SET_IS_LOCKED,
        STROKE,
        SET_STROKE,
        FONT_SIZE,
        SET_FONT_SIZE,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContextWrapper;

export const useWhiteBoard = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("Component is outside the wrapper");
  }
  return context;
};
