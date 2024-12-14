import React, { useEffect, useRef, useState } from "react";

// -------------------------------------------------------------------------- //
// Component - that can take over dragged components within an Area.
// -------------------------------------------------------------------------- //

export const Slot = (props) => {
  const { children, className, id, style } = props;

  return (
    <div id={id} className={className} style={style}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
