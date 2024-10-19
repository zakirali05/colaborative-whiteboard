import {
  ArrowRight,
  Circle,
  Download,
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
  | "TYPE";

type shape = {
  id: number;
  icon: any;
  label: SHAPES_TYPE;
};

export const SHAPES: shape[] = [
  {
    id: 0,
    icon: MousePointerClick,
    label: "MOUSE_POINTER",
  },
  {
    id: 1,
    icon: Hand,
    label: "HAND",
  },
  {
    id: 2,
    icon: Square,
    label: "SQUARE",
  },
  {
    id: 3,
    icon: Circle,
    label: "CIRCLE",
  },
  {
    id: 4,
    icon: ArrowRight,
    label: "ARROW",
  },

  {
    id: 5,
    icon: Pencil,
    label: "PENCIL",
  },
  {
    id: 6,
    icon: Type,
    label: "TYPE",
  },
];
