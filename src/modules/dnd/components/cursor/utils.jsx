// calculate the bounding box for moving an drag element
export const getEdge = (area, drag, event = { pageX: 0, pageY: 0 }) => {
  const { pageX: x, pageY: y } = event;
  console.log(x, y);

  const areaRect = area.getBoundingClientRect();
  const dragRect = drag.getBoundingClientRect();
  const edge = {
    left: areaRect.x + (x - Math.abs(dragRect.x)),
    top: areaRect.y + (y - Math.abs(dragRect.y)),
    right: areaRect.width - dragRect.width,
    bottom: areaRect.height - dragRect.height,
  };
  return edge;
};
