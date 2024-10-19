import { SHAPES } from "@/constants/shapes";
import { useWhiteBoard } from "@/contexts/board_context";
import { Download, Lock } from "lucide-react";
import React from "react";

const ShapeSelector = () => {
  const { OPTION, SET_OPTION, IS_LOCKED, SET_IS_LOCKED } = useWhiteBoard();
  const download = () => {};
  return (
    <div
      className={`p-1 rounded-md z-[1000]   shadow-lg bg-zinc-900 flex items-center justify-around gap-2 absolute top-2.5      left-[calc(50%-200px)]`}
    >
      <div
        onClick={() => SET_IS_LOCKED(!IS_LOCKED)}
        className={`flex items-center  ${
          IS_LOCKED ? "bg-rose-500/30" : ""
        }  justify-center  p-2 cursor-pointer hover:bg-rose-500/30 
         
             border-r border-white/20 rounded-l-md px-4
            
        `}
      >
        <Lock className="h-5 w-5 text-white/60 " />
      </div>
      {SHAPES.map((shape) => (
        <div
          onClick={() => SET_OPTION(shape.label)}
          key={shape.id}
          className={`flex items-center ${
            OPTION === shape.label ? "bg-rose-500/30" : ""
          }    justify-center rounded-md p-2 cursor-pointer hover:bg-rose-500/30 
            
          `}
        >
          <shape.icon className="h-5 w-5 text-white/60" />
        </div>
      ))}
      <div
        onClick={download}
        className={`flex items-center   justify-center  p-2 cursor-pointer hover:bg-rose-500/30  border-l border-white/20 rounded-r-md px-4 `}
      >
        <Download className="h-5 w-5 text-white/60 " />
      </div>
    </div>
  );
};

export default ShapeSelector;
