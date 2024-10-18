import { COLOURS } from "@/constants/colours";
import React from "react";

const ColourSelector = () => {
  return (
    <div className="absolute p-4 flex flex-col gap-4 rounded-md bg-zinc-900 shadow-md top-20 left-5">
      <div>
        <p className="text-xs text-white/40">Stroke</p>
        <div className="flex items-center gap-2">
          {COLOURS.STROKE_COLOURS.map((colour) => (
            <div
              key={colour}
              style={{ background: colour }}
              className="h-8 w-8 mt-3 rounded-md cursor-pointer border-2 border-white/40"
            ></div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/40" />

      <div>
        <p className="text-xs text-white/40">Background</p>
        <div className="flex items-center gap-2">
          {COLOURS.BACKGROUND_COLOURS.map((colour) => (
            <div
              key={colour}
              style={{ background: colour }}
              className="h-8 w-8 mt-3 rounded-md cursor-pointer border-2 border-white/40"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColourSelector;
