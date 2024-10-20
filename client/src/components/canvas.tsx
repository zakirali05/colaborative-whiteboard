"use client";

import { useWhiteBoard } from "@/contexts/board_context";
import { download } from "@/utils/download";
import { shapeInGivenBoundry } from "@/utils/utils";
import { useEffect, useRef, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
import { v4 as UUIDV4 } from "uuid";

const generator = rough.generator();

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const {
    BACKGROUND_COLOUR,
    STROKE_COLOUR,
    OPTION,
    STROKE,
    SET_OPTION,
    IS_LOCKED,

    SET_IS_LOCKED,
    FONT_SIZE,
    ZOOM,
  } = useWhiteBoard();

  const [shapes, setShapes] = useState<any[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [textValue, setTextValue] = useState("ZakirAli");
  const [selectedShape, setSelectedShape] = useState<any>(null);

  console.log("Selected shape is : ", selectedShape);

  useEffect(() => {
    const canvas = canvasRef.current;
    const roughCanvas = rough.canvas(canvas);
    if (!canvas) return;

    const context = canvas.getContext("2d");

    const handleMouseDown = (e: any) => {
      setIsDrawing(true);
      const x = e.clientX - canvas.offsetLeft;
      const y = e.clientY - canvas.offsetTop;
      switch (OPTION) {
        case "SQUARE":
          setShapes([
            ...shapes,
            {
              id: UUIDV4(),
              x,
              y,
              z: Date.now(),
              width: 0,
              height: 0,
              BACKGROUND_COLOUR,
              STROKE_COLOUR,
              type: OPTION,
            },
          ]);
          break;
        case "CIRCLE":
          setShapes([
            ...shapes,
            {
              id: UUIDV4(),
              x,
              y,
              z: Date.now(),
              radius: 0,
              BACKGROUND_COLOUR,
              STROKE_COLOUR,
              type: OPTION,
            },
          ]);
          break;

        case "ARROW":
          setShapes([
            ...shapes,
            {
              id: UUIDV4(),
              x1: x,
              y1: y,
              x2: x,
              y2: y,
              z: Date.now(),
              STROKE_COLOUR,
              type: OPTION,
            },
          ]);
          break;
        case "PENCIL":
          setShapes([
            ...shapes,
            {
              id: UUIDV4(),
              x,
              y,
              z: Date.now(),
              points: [[x, y]],
              STROKE_COLOUR,
              type: OPTION,
              STROKE,
            },
          ]);
          break;
        case "TYPE":
          setShapes([
            ...shapes,
            {
              id: UUIDV4(),
              x,
              y,
              z: Date.now(),
              TEXT_COLOUR: STROKE_COLOUR,
              type: OPTION,
            },
          ]);

          if (!context) {
            return;
          }
          context.font = `${FONT_SIZE}px Arial`;
          context.fillStyle = STROKE_COLOUR;
          context.fillText(textValue, x, y);
          break;
        case "MOUSE_POINTER":
          const shapeInBoundry = shapeInGivenBoundry(x, y, shapes);
          if (shapeInBoundry.z != 0) {
            setSelectedShape(shapeInBoundry);
          } else {
            setSelectedShape(null);
          }
          break;
        case "ERASER":
          const shapeInBoundryEraser = shapeInGivenBoundry(
            e.clientX,
            e.clientY,
            shapes
          );
          let shapesCopy = shapes.filter(
            (shape) => shape.id !== shapeInBoundryEraser.id
          );
          setShapes(shapesCopy);

          break;
        default:
          break;
      }
    };

    const handleMouseMove = (e: any) => {
      if (isDrawing) {
        const currentShape = shapes[shapes.length - 1];
        const x = e.clientX - canvas.offsetLeft;
        const y = e.clientY - canvas.offsetTop;
        switch (OPTION) {
          case "SQUARE":
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

            break;
          case "CIRCLE":
            const radius = Math.sqrt(
              Math.pow(x - currentShape.x, 2) + Math.pow(y - currentShape.y, 2)
            );

            setShapes(
              shapes.map((shape, index) => {
                if (index === shapes.length - 1) {
                  return {
                    ...shape,
                    radius,
                  };
                }
                return shape;
              })
            );
            break;

          case "ARROW":
            setShapes(
              shapes.map((shape, index) => {
                if (index === shapes.length - 1) {
                  return { ...shape, x2: x, y2: y };
                }
                return shape;
              })
            );
            break;

          case "PENCIL":
            setShapes(
              shapes.map((shape, index) => {
                if (index === shapes.length - 1) {
                  return { ...shape, points: [...shape.points, [x, y]] };
                }
                return shape;
              })
            );
            break;
          case "TYPE":
            break;
          case "MOUSE_POINTER":
            if (selectedShape) {
              switch (selectedShape.type) {
                case "SQUARE":
                  let shapesCopy = [...shapes];
                  shapesCopy[
                    shapesCopy.findIndex(
                      (shape) => shape.id === selectedShape.id
                    )
                  ] = {
                    ...selectedShape,
                    x: x,
                    y: y,
                  };
                  setShapes(shapesCopy);
                  break;
                case "CIRCLE":
                  let shapesCopyCircle = [...shapes];
                  shapesCopyCircle[
                    shapesCopyCircle.findIndex(
                      (shape) => shape.id === selectedShape.id
                    )
                  ] = {
                    ...selectedShape,
                    x: x,
                    y: y,
                  };
                  setShapes(shapesCopyCircle);
                  break;
                case "ARROW":
                  let shapesCopyArrow = [...shapes];
                  shapesCopyArrow[
                    shapesCopyArrow.findIndex(
                      (shape) => shape.id === selectedShape.id
                    )
                  ] = {
                    ...selectedShape,
                    x1: x,
                    y2: y,
                  };
                  setShapes(shapesCopyArrow);
                  break;
                default:
                  break;
              }
            }
            break;
          default:
            break;
        }
        context?.clearRect(0, 0, canvas.width, canvas.height);
        drawShapes(context!, roughCanvas);
      }
    };

    const handleMouseUp = () => {
      setIsDrawing(false);

      // setSelectedShape(null);
      if (!IS_LOCKED && OPTION !== "TYPE" && OPTION !== "PENCIL") {
        SET_OPTION("MOUSE_POINTER");
      }
    };

    const onKeyPress = (e: any) => {
      switch (e.key) {
        case "Delete":
          if (selectedShape !== null) {
            let shapesCopy = shapes.filter(
              (shape) => shape.id !== selectedShape.id
            );
            setSelectedShape(null);
            setShapes(shapesCopy);
          }
          break;
        case "l":
          SET_IS_LOCKED(!IS_LOCKED);
          break;
        case "h":
          SET_OPTION("HAND");
          break;
        case "1":
          SET_OPTION("MOUSE_POINTER");
          break;

        case "2":
          SET_OPTION("HAND");
          break;
        case "3":
          SET_OPTION("SQUARE");
          break;
        case "4":
          SET_OPTION("CIRCLE");
          break;
        case "5":
          SET_OPTION("ARROW");
          break;
        case "6":
          SET_OPTION("PENCIL");
          break;
        case "7":
          SET_OPTION("ERASER");
          break;
        case "8":
          SET_OPTION("TYPE");
          break;
        case "s":
          // download img logic
          download();
          break;
        default:
          break;
      }
    };
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("keydown", onKeyPress);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("keydown", onKeyPress);
    };
  }, [
    isDrawing,
    shapes,
    BACKGROUND_COLOUR,
    STROKE_COLOUR,
    OPTION,
    STROKE,
    FONT_SIZE,
    textValue,
    IS_LOCKED,
  ]);

  const drawShapes = (context: CanvasRenderingContext2D, roughCanvas: any) => {
    shapes.forEach((shape) => {
      switch (shape.type) {
        case "SQUARE":
          roughCanvas.draw(
            generator.rectangle(shape.x, shape.y, shape.width, shape.height, {
              fill: shape?.BACKGROUND_COLOUR,
              stroke: shape?.STROKE_COLOUR,
            })
          );
          break;

        case "CIRCLE":
          roughCanvas.draw(
            generator.circle(shape.x, shape.y, shape.radius, {
              fill: shape?.BACKGROUND_COLOUR,
              stroke: shape?.STROKE_COLOUR,
            })
          );
          break;

        case "ARROW":
          roughCanvas.draw(
            generator.line(shape.x1, shape.y1, shape.x2, shape.y2, {
              stroke: shape?.STROKE_COLOUR,
            })
          );
          break;
        case "PENCIL":
          context.beginPath();
          context.moveTo(shape.points[0][0], shape.points[0][1]);
          shape.points.forEach((point: any) => {
            context.lineTo(point[0], point[1]);
          });
          context.strokeStyle = shape.STROKE_COLOUR;
          context.lineWidth = shape.STROKE; // Adjust stroke width as needed
          context.stroke();
          break;
        case "TYPE":
          break;
        default:
          break;
      }
    });
  };

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      style={{ scale: `${ZOOM}%` }}
      height={window.innerHeight}
      width={window.innerWidth}
    ></canvas>
  );
};

export default Canvas;
