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
        <DnD.Components.Drag style={style("red")} value={{ id: 30 }} />

        <DnD.Components.Drop id='1' style={style("green")}>
          <span>{"drop"}</span>
        </DnD.Components.Drop>
        <DnD.Components.Drop id='2' style={style("green")}>
          <span>{"drop"}</span>
        </DnD.Components.Drop>

        <DnD.Components.Slot id='1' style={style("blue")}>
          <DnD.Components.Drag id='1' style={style("red")} />
        </DnD.Components.Slot>
        <DnD.Components.Slot id='2' style={style("blue")}>
          <DnD.Components.Drag id='2' style={style("red")} />
        </DnD.Components.Slot>
      </DnD.Layouts.Area>
    </section>
  );
};

// -------------------------------------------------------------------------- //
