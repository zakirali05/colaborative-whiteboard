"use client";

import ColourSelector from "./colour-selector";
import ShapeSelector from "./shape-selector";
import ShareButton from "./share-button";
import Zoom from "./zoom";

const Canvas = () => {
  return (
    <div className="bg-zinc-950 h-screen w-screen relative">
      <ShapeSelector />
      <ColourSelector />
      <Zoom />
      <ShareButton />
    </div>
  );
};

export default Canvas;
