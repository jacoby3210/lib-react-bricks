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

const { withDragContext } = HOCs;

const compose =
  (name) =>
  (...components) =>
  (...HOCs) => ({ [name]: withDebug(name, ...HOCs)(...components) });

// -------------------------------------------------------------------------- //
// export api
// -------------------------------------------------------------------------- //

export const DnD = {
  // Native: {HOCs, Components, Layouts,},

  Components: {
    ...compose("Cursor")(Components.Cursor)(withMerge("rc-dnd-cursor", {})),
    ...compose("Item")(Components.Item)(withMerge("rc-dnd-item", {})),
    ...compose("Slot")(Components.Slot)(withMerge("rc-dnd-slot", {})),
  },

  Layouts: {
    ...compose("Area")(Layouts.Area)(
      withMerge("rc-dnd-area", {}),
      withDragContext
    ),
  },
};

DnD.Templates = {};

// -------------------------------------------------------------------------- //
