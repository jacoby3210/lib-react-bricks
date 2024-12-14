// -------------------------------------------------------------------------- //
// A helper function to send customizable events.
// -------------------------------------------------------------------------- //

const dispatchCustomEvent = ({ name, ...detail }) => {
  const customEvent = new CustomEvent(name, { detail });
  window.dispatchEvent(customEvent);
};

// -------------------------------------------------------------------------- //
