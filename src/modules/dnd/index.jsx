import { Core } from "@lib-react-bricks/src/modules/core";
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

const Source = compose("Source")(Components.Source)(
  withMerge("rc-dnd-source", {}),
  withValueBase
);

const Drop = compose("Drop")(Components.Drop)(
  withMerge("rc-dnd-drop", {}),
  withValueBase
);

const Slot = compose("Slot")(Components.Target)(
  withMerge("rc-dnd-slot", {}),
  withValueBase
);

export const DnD = {
  // Native: {HOCs, Components, Layouts,},

  Components: {
    ...compose("Cursor")(Components.Cursor)(withMerge("rc-dnd-cursor", {})),
    ...Source,
    ...Drop,
    ...Slot,
  },

  Layouts: {
    ...compose("Area")(Layouts.Area)(withMerge("rc-dnd-area", {}), withArea),
  },
};

DnD.Templates = {};

// -------------------------------------------------------------------------- //
