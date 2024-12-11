// -------------------------------------------------------------------------- //
// Helper functions.
// -------------------------------------------------------------------------- //

export const filter = function (item, props) {
  return item.label != props.value && item.label.includes(props.value);
};

// -------------------------------------------------------------------------- //
