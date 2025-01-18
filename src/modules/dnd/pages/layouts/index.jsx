import React from "react";
import { Core } from "/src/modules/core";
import { DnD } from "/src/modules/dnd";
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
const produceEntries = (count, func = (_, i) => i) =>
  Array.from({ length: count }, func);

export const PageDnDLayouts = (props) => {
  const vaultProps = {
    data: produceEntries(5, (v, i) => {
      return {
        id: i,
        name: `Option #${i}`,
        text: `Option text #${i}`,
        onClick: (e) => {
          console.log(`Option #${i}`);
          return false;
        },
      };
    }),
    length: 5,
    Template: (props) => {
      return (
        <DnD.Components.Slot>
          <DnD.Components.Drag />
        </DnD.Components.Slot>
      );
    },
  };

  return (
    <section id='dnd'>
      <DnD.Layouts.Area style={{ height: "100vh", width: "100vw" }}>
        <DnD.Components.Cursor />
        <DnD.Components.Drag value={{ id: 30 }} />

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

        <DnD.Layouts.Vault {...vaultProps} />
      </DnD.Layouts.Area>
    </section>
  );
};

// -------------------------------------------------------------------------- //
