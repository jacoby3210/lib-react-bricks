import React from "react";
import { DnD } from "@lib-react-bricks/src/modules/dnd";
import { props } from "./config";

// -------------------------------------------------------------------------- //
// React Component
// -------------------------------------------------------------------------- //

const style = (color) => ({
  backgroundColor: color,
  height: "100px",
  width: "100px",
  userSelect: "none",
});

export const PageDnDLayouts = (props) => {
  return (
    <section id='dnd'>
      <DnD.Layouts.Area style={{ height: "100vh", width: "100vw" }}>
        <DnD.Components.Cursor />
        <DnD.Components.Item data={{ id: 30 }} style={style("red")} />
        <DnD.Components.Slot style={style("green")} />
      </DnD.Layouts.Area>
    </section>
  );
};

// -------------------------------------------------------------------------- //
