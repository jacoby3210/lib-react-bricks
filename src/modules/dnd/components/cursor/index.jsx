import React, { useEffect, useRef, useState } from "react";
import { useDnD } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - to display dragging an item on the area.
// -------------------------------------------------------------------------- //

export const Cursor = (props) => {
  const { children, className, id, style } = props;

  return <div id={id} className={className} style={style}></div>;
};

// -------------------------------------------------------------------------- //
