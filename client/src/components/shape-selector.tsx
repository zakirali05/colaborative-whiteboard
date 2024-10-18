import { SHAPES } from "@/constants/shapes";
import React from "react";

const ShapeSelector = () => {
  return (
    <div
      className={`p-1 rounded-md   shadow-lg bg-zinc-900 flex items-center justify-around gap-2 absolute top-2.5      left-[calc(50%-130px)]`}
    >
      {SHAPES.map((shape) => (
        <div
          key={shape.id}
          className="flex items-center   justify-center rounded-md p-2 cursor-pointer hover:bg-zinc-800"
        >
          <shape.icon className="h-5 w-5 text-white/40" />
        </div>
      ))}
    </div>
  );
};

export default ShapeSelector;
