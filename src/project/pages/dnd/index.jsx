import React from "react";
import { DnD } from "@lib-react-bricks/src/modules/dnd";
// import { props } from "./config";

// -------------------------------------------------------------------------- //
// React Component
// -------------------------------------------------------------------------- //

export const PageDnD = (receivedProps) => {
  return (
    <div id='dnd'>
      <DnD.Components.Area
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div
          draggable={false}
          style={{
            backgroundColor: "red",
            height: "100px",
            width: "100px",
            userSelect: "none",
          }}
        />
      </DnD.Components.Area>
    </div>
  );
};

// -------------------------------------------------------------------------- //
