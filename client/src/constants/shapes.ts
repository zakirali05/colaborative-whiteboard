import {
  ArrowRight,
  Circle,
  Download,
  Eraser,
  Hand,
  MousePointerClick,
  Pencil,
  Square,
  Type,
} from "lucide-react";

export type SHAPES_TYPE =
  | "MOUSE_POINTER"
  | "HAND"
  | "SQUARE"
  | "CIRCLE"
  | "ARROW"
  | "PENCIL"
  | "ERASER"
  | "TYPE";

type shape = {
  id: number;
  icon: any;
  label: SHAPES_TYPE;
  short_cut?: string;
};

export const SHAPES: shape[] = [
  {
    id: 0,
    icon: MousePointerClick,
    label: "MOUSE_POINTER",
    short_cut: "1",
  },
  {
    id: 1,
    icon: Hand,
    label: "HAND",
    short_cut: "2",
  },
  {
    id: 2,
    icon: Square,
    label: "SQUARE",
    short_cut: "3",
  },
  {
    id: 3,
    icon: Circle,
    label: "CIRCLE",
    short_cut: "4",
  },
  {
    id: 4,
    icon: ArrowRight,
    label: "ARROW",
    short_cut: "5",
  },

  {
    id: 5,
    icon: Pencil,
    label: "PENCIL",
    short_cut: "6",
  },
  {
    id: 6,
    icon: Eraser,
    label: "ERASER",
    short_cut: "7",
  },
  {
    id: 7,
    icon: Type,
    label: "TYPE",
    short_cut: "8",
  },
];
