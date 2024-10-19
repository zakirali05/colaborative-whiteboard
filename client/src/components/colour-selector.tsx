"use client";
import { COLOURS } from "@/constants/colours";
import { FONT_SIZE as FONT_SIZE_ARRAY } from "@/constants/font_size";
import { STROKE_WIDTH } from "@/constants/strokes";
import { useWhiteBoard } from "@/contexts/board_context";
import Image from "next/image";
import React from "react";

const ColourSelector = () => {
  const {
    BACKGROUND_COLOUR,
    SET_BACKGROUND_COLOUR,
    STROKE_COLOUR,
    SET_STROKE_COLOUR,
    STROKE,
    SET_STROKE,
    FONT_SIZE,
    SET_FONT_SIZE,
  } = useWhiteBoard();
  return (
    <div className="absolute z-[1000] p-4 flex flex-col gap-4 rounded-md bg-zinc-900 shadow-md top-12 left-5">
      <div>
        <p className="text-xs text-white/60">Background</p>
        <div className="flex items-center gap-2">
          {COLOURS.BACKGROUND_COLOURS.map((colour) => (
            <div
              onClick={() => SET_BACKGROUND_COLOUR(colour)}
              key={colour}
              className={`border h-10 w-10 rounded-md flex items-center justify-center mt-3  ${
                BACKGROUND_COLOUR === colour
                  ? "border-rose-500"
                  : "border-transparent "
              } `}
            >
              <div
                style={{ background: colour }}
                className={`h-8 w-8  rounded-md cursor-pointer   `}
              >
                {colour === "transparent" ? (
                  <Image
                    alt="transparent"
                    height={50}
                    width={50}
                    src={"/transparent.png"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/40" />

      <div>
        <p className="text-xs text-white/60">Stroke</p>
        <div className="flex items-center gap-2">
          {COLOURS.STROKE_COLOURS.map((colour) => (
            <div
              onClick={() => SET_STROKE_COLOUR(colour)}
              key={colour}
              className={`border h-10 w-10 rounded-md flex items-center justify-center mt-3  ${
                STROKE_COLOUR === colour
                  ? "border-rose-500"
                  : "border-transparent "
              } `}
            >
              <div
                style={{ background: colour }}
                className={`h-8 w-8  rounded-md cursor-pointer   `}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/40" />

      <div>
        <p className="text-xs text-white/60">Brush Size</p>
        <div className="flex items-center gap-2">
          {STROKE_WIDTH.map((width) => (
            <div
              onClick={() => SET_STROKE(width)}
              key={width}
              className={`border h-10 w-10 rounded-md flex items-center justify-center mt-3  ${
                STROKE === width ? "border-rose-500" : "border-white/40 "
              } `}
            >
              <div
                className={`h-8 w-8 text-white/40  rounded-md cursor-pointer  flex items-center justify-center `}
              >
                {width}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/40" />
      <div>
        <p className="text-xs text-white/60">Font Size</p>
        <div className="flex items-center gap-2">
          {FONT_SIZE_ARRAY.map((size) => (
            <div
              onClick={() => SET_FONT_SIZE(size)}
              key={size}
              className={`border h-10 w-10 rounded-md flex items-center justify-center mt-3  ${
                FONT_SIZE === size ? "border-rose-500" : "border-white/40 "
              } `}
            >
              <div
                className={`h-8 w-8  text-xs text-white/40 uppercase rounded-md cursor-pointer  flex items-center justify-center `}
              >
                {size === 20 && "sm"}
                {size === 30 && "md"}
                {size === 40 && "lg"}
                {size === 50 && "xl"}
                {size === 60 && "2xl"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColourSelector;
