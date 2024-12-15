import React from "react";
import { DnD } from "@lib-react-bricks/src/modules/dnd";
// import { props } from "./config";

// -------------------------------------------------------------------------- //
// React Component
// -------------------------------------------------------------------------- //

export const PageDnD = (props) => {
  const style = (color) => ({
    backgroundColor: color,
    height: "100px",
    width: "100px",
    userSelect: "none",
  });
  return (
    <div id='dnd'>
      <DnD.Layouts.Area
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <DnD.Components.Item data={{ id: 30 }} style={style("red")} />
        <DnD.Components.Slot style={style("blue")} />
        <div draggable={false} style={style("green")} />
      </DnD.Layouts.Area>
    </div>
  );
};

// -------------------------------------------------------------------------- //
