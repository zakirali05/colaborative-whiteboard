"use client";

import React, { useState, useRef, useEffect } from "react";

interface Shape {
  x: number;
  y: number;
  width: number;
  height: number;
}

function CanvasDrawing() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");

    const handleMouseDown = (e: MouseEvent) => {
      setIsDrawing(true);
      const x = e.clientX - canvas.offsetLeft;
      const y = e.clientY - canvas.offsetTop;
      setShapes([...shapes, { x, y, width: 0, height: 0 }]);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDrawing) {
        const currentShape = shapes[shapes.length - 1];
        const x = e.clientX - canvas.offsetLeft;
        const y = e.clientY - canvas.offsetTop;
        const width = x - currentShape.x;
        const height = y - currentShape.y;
        setShapes(
          shapes.map((shape, index) => {
            if (index === shapes.length - 1) {
              return { ...shape, width, height };
            }
            return shape;
          })
        );
        context?.clearRect(0, 0, canvas.width, canvas.height);
        drawShapes(context!);
      }
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDrawing, shapes]);

  const drawShapes = (context: CanvasRenderingContext2D) => {
    shapes.forEach((shape) => {
      context.fillRect(shape.x, shape.y, shape.width, shape.height);
      context.fillStyle = "white";
      context.fill();
    });
  };

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerWidth}
      className="bg-black"
    />
  );
}

export default CanvasDrawing;
