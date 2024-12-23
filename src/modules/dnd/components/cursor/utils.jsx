// -------------------------------------------------------------------------- //
// Helper functions.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// calculate the bounding box for moving an drag element
// -------------------------------------------------------------------------- //

export const getEdge = (components, { pageX, pageY }) => {
  // Get bounding rectangles for the container and draggable element
  const outerBounds = components.area.current.getBoundingClientRect();
  const innerBounds = components.source.current.getBoundingClientRect();

  // Calculate edge boundaries for the draggable element within the container
  return {
    left: outerBounds.x + (pageX - Math.abs(innerBounds.x)),
    top: outerBounds.y + (pageY - Math.abs(innerBounds.y)),
    right: outerBounds.width - innerBounds.width,
    bottom: outerBounds.height - innerBounds.height,
  };
};

// -------------------------------------------------------------------------- //
