"use client";
import { useWhiteBoard } from "@/contexts/board_context";
import { Minus, Plus, Redo, Undo } from "lucide-react";
import React from "react";

const Zoom = () => {
  const { ZOOM, SET_ZOOM } = useWhiteBoard();
  const undo = () => {};
  const redo = () => {};
  return (
    <div className="flex z-[1000] items-center gap-5 fixed left-5 bottom-2">
      <div className="p-1 bg-zinc-900 rounded-md  shadow-md  flex items-center justify-center">
        <div
          onClick={() => {
            if (ZOOM === 400) {
              SET_ZOOM(400);
            } else {
              SET_ZOOM(ZOOM + 10);
            }
          }}
          className="flex rounded-md items-center justify-center p-2 hover:bg-rose-500/30 cursor-pointer"
        >
          <Plus className="text-white/60 h-5 w-5" />
        </div>
        <p className="text-white/50 text-sm mx-3">{ZOOM}%</p>
        <div
          onClick={() => {
            if (ZOOM === 10) {
              SET_ZOOM(10);
            } else {
              SET_ZOOM(ZOOM - 10);
            }
          }}
          className="flex rounded-md items-center justify-center p-2 hover:bg-rose-500/30 cursor-pointer"
        >
          <Minus className="text-white/60 h-5 w-5" />
        </div>
      </div>
      <div className="p-1 bg-zinc-900 rounded-md  shadow-md  flex items-center justify-center">
        <div
          onClick={undo}
          className="flex rounded-md items-center justify-center p-2 hover:bg-rose-500/30 cursor-pointer"
        >
          <Undo className="text-white/60 h-5 w-5" />
        </div>
        <div className="flex rounded-md items-center justify-center p-2 hover:bg-rose-500/30 cursor-pointer">
          <Redo onClick={redo} className="text-white/60 h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Zoom;
