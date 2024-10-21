export const shapeInGivenBoundry = (x: number, y: number, shapes: any[]) => {
  return shapes
    .filter((shape, index) => {
      switch (shape.type) {
        case "SQUARE":
          return (
            x >= shape.x &&
            x <= shape.x + shape.width &&
            y >= shape.y &&
            y <= shape.y + shape.height
          );
        case "CIRCLE":
          const dx = x - shape.x;
          const dy = y - shape.y;
          return Math.sqrt(dx * dx + dy * dy) <= shape.radius;
        case "ARROW":
          // Calculate the vectors
          const v1x = shape?.x2 - shape?.x1;
          const v1y = shape?.y2 - shape?.y1;
          const v2x = x - shape?.x1;
          const v2y = y - shape?.y1;

          // Calculate the cross product
          const crossProduct = v1x * v2y - v1y * v2x;

          // Check if the cross product is zero
          return crossProduct === 0;
        case "PENCIL":
          // const isPencil = shape.points.map((point: any) => {
          //   if (point.x === x && point.y === y) {
          //     return shape;
          //   }
          // });
          return !!shape;
        case "TYPE":
          return shape.x == x && shape.y == y;
        default:
          return false;
      }
    })
    .reduce((max, obj) => (obj.z > max.z ? obj : max), { z: 0 });
};
