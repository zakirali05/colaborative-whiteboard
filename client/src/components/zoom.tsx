import { Minus, Plus, Redo, Undo } from "lucide-react";
import React from "react";

const Zoom = () => {
  return (
    <div className="flex items-center gap-5 absolute left-5 bottom-2">
      <div className="p-1 bg-zinc-900 rounded-md  shadow-md  flex items-center justify-center">
        <div className="flex rounded-md items-center justify-center p-2 hover:bg-zinc-800 cursor-pointer">
          <Plus className="text-white/40 h-5 w-5" />
        </div>
        <p className="text-white/50 text-sm mx-3">100%</p>
        <div className="flex rounded-md items-center justify-center p-2 hover:bg-zinc-800 cursor-pointer">
          <Minus className="text-white/40 h-5 w-5" />
        </div>
      </div>
      <div className="p-1 bg-zinc-900 rounded-md  shadow-md  flex items-center justify-center">
        <div className="flex rounded-md items-center justify-center p-2 hover:bg-zinc-800 cursor-pointer">
          <Undo className="text-white/40 h-5 w-5" />
        </div>
        <div className="flex rounded-md items-center justify-center p-2 hover:bg-zinc-800 cursor-pointer">
          <Redo className="text-white/40 h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Zoom;
