"use client";

import { useWhiteBoard } from "@/contexts/board_context";
import ColourSelector from "./colour-selector";
import ShapeSelector from "./shape-selector";
import ShareButton from "./share-button";
import Zoom from "./zoom";
import Canvas from "./canvas";

const WhiteBoard = () => {
  const { OPTION } = useWhiteBoard();
  return (
    <div
      className={`bg-zinc-950 h-screen w-screen relative  ${
        OPTION === "HAND"
          ? "cursor-grab"
          : OPTION === "TYPE"
          ? "cursor-text"
          : OPTION == "PENCIL"
          ? "cursor-crosshair"
          : ""
      }  `}
    >
      <ShapeSelector />
      <ColourSelector />
      <Zoom />
      <ShareButton />
      <Canvas />
    </div>
  );
};

export default WhiteBoard;
