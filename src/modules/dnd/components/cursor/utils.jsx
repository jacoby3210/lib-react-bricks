// -------------------------------------------------------------------------- //
// Helper functions.
// -------------------------------------------------------------------------- //

// search for an available slot by current mouse coordinates.
export const scan = (cursor, event) => {
  cursor.current.hidden = true;
  const element = document.elementFromPoint(event.clientX, event.clientY);
  cursor.current.hidden = false;
  const target = element.closest(".rc-dnd-slot");
  console.log(target);
  return target;
};

// -------------------------------------------------------------------------- //
