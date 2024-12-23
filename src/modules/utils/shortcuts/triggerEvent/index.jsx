// -------------------------------------------------------------------------- //
// A helper function to send customizable events.
// -------------------------------------------------------------------------- //

export const triggerEvent = (element, name, props) => {
  const customEvent = new CustomEvent(name, { ...props, bubbles: true });
  element.dispatchEvent(customEvent);
};

// -------------------------------------------------------------------------- //
