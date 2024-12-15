// -------------------------------------------------------------------------- //
// Helper functions.
// -------------------------------------------------------------------------- //

// calculate the bounding box for moving an drag element
export const getEdge = (area, drag, x, y) => {
  const areaRect = area.getBoundingClientRect();
  const dragRect = drag.getBoundingClientRect();
  const edge = {
    x1: areaRect.x + (x - Math.abs(dragRect.x)),
    y1: areaRect.y + (y - Math.abs(dragRect.y)),
    x2: areaRect.width - dragRect.width,
    y2: areaRect.height - dragRect.height,
  };
  return edge;
};

// -------------------------------------------------------------------------- //
