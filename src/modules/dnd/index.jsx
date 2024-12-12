import { Core } from "@lib-react-bricks/src/modules/core";

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

const compose =
  (name) =>
  (...components) =>
  (...HOCs) => ({ [name]: withDebug(name, ...HOCs)(...components) });

// -------------------------------------------------------------------------- //
// export api
// -------------------------------------------------------------------------- //

export const DnD = {
  // Native: {HOCs, Components, Layouts,},

  Components: {},

  Layouts: {},
};

DnD.Templates = {};

// -------------------------------------------------------------------------- //
