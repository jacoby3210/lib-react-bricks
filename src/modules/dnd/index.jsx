import { Core } from "@lib-react-bricks/src/modules/core";
import * as HOCs from "./advanced";

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

const { withArea } = HOCs;

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
    ...compose("Area")(({ children }) => <div>{children}</div>)(
      withMerge("rc-dnd-area", {}),
      withContainer,
      withArea
    ),
  },

  Layouts: {},
};

DnD.Templates = {};

// -------------------------------------------------------------------------- //
