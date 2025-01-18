import { Core } from "/src/modules/core";
import * as HOCs from "./advanced";
import * as Components from "./components";
import * as Layouts from "./layouts";

// -------------------------------------------------------------------------- //
// compile api
// -------------------------------------------------------------------------- //

const {
  withDebug,
  withContainer,
  withRepeat,
  withReveal,
  withUnion,
  withFilter,
  withMerge,
  withValueBase,
  withValueBoolean,
  withValueDigital,
  withValueLiteral,
  withValueOption,
} = Core.Basics.HOCs;

const { withArea, withTarget } = HOCs;

const compose =
  (name) =>
  (...components) =>
  (...HOCs) => ({ [name]: withDebug(name, ...HOCs)(...components) });

// -------------------------------------------------------------------------- //
// export api
// -------------------------------------------------------------------------- //

export const DnD = {
  Basics: { HOCs, Components, Layouts },

  Components: {
    ...compose("Cursor")(Components.Cursor)(withMerge("rc-dnd-cursor", {})),

    ...compose("Drag")(Components.Drag)(
      withMerge("rc-dnd-drag", {}),
      withValueBase
    ),

    ...compose("Drop")(Components.Drop)(withMerge("rc-dnd-drop", {})),

    ...compose("Slot")(Components.Slot)(
      withMerge("rc-dnd-slot", {}),
      withValueBase
    ),
  },

  Layouts: {
    ...compose("Area")(Layouts.Area)(withMerge("rc-dnd-area", {}), withArea),
    ...compose("Vault")(Layouts.Vault)(
      withMerge("rc-dnd-vault", {}),
      withRepeat
    ),
  },
};

DnD.Templates = {};

// -------------------------------------------------------------------------- //
