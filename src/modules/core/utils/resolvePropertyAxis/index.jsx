
// -------------------------------------------------------------------------- //
// A helper function to resolve the property axis to a set of properties 
// (vertically or horizontally).
// -------------------------------------------------------------------------- //

export const resolvePropertyAxis = (axis) => {

  const horizontalProps = {
    axis: "horizontal",
    cursor: "clientX",
    elementSize: "offsetWidth",
    rectOffset: "x",
    rectSize: "width",
    scrollDirect: "left",
    scrollOffset: "scrollLeft",
    scrollSize: "scrollWidth",
  }
  
  const verticalProps = {
    axis: "vertical",
    cursor: "clientY",
    elementSize: "offsetHeight",
    rectOffset: "y",
    rectSize: "height",
    scrollDirect: "top",
    scrollOffset: "scrollTop",
    scrollSize: "scrollHeight",
  }

  return axis ? horizontalProps : verticalProps;

};

// -------------------------------------------------------------------------- //