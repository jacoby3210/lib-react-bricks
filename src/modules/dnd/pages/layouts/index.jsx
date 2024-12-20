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
        <DnD.Components.Source style={style("red")} value={{ id: 30 }} />
        <DnD.Components.Target id='1' style={style("green")}>
          <DnD.Components.Source id='1' style={style("red")} />
        </DnD.Components.Target>
        <DnD.Components.Target id='2' style={style("blue")}>
          <DnD.Components.Source id='2' style={style("red")} />
        </DnD.Components.Target>
      </DnD.Layouts.Area>
    </section>
  );
};

// -------------------------------------------------------------------------- //
