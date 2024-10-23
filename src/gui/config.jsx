import PropTypes from 'prop-types';
// ------------------------------------------------------------------------- //
// Constants
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = 'rc';

// ------------------------------------------------------------------------- //
// Package of component parameters description (types and values): base.
// ------------------------------------------------------------------------- //

export const propPackageBase = {
  types: {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
    type: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
    id: PropTypes.string,
  },
  values: (className, id = null) => ({
    children: [],
    className,
    id: id,
  }),
}

// ------------------------------------------------------------------------- //
// Package of component parameters description (types and values): orientation axis.
// ------------------------------------------------------------------------- //

export const propPackageOrientationBase = {
  types: {axis: PropTypes.bool,},
  values: (axis = true) => ({axis}),
}

// ------------------------------------------------------------------------- //
// Package of component parameters description (types and values): with data source.
// ------------------------------------------------------------------------- //

export const propPackageDataSource = {
  types: {
    filter: PropTypes.func,
    first: PropTypes.number,
    length: PropTypes.number,
    src: PropTypes.array,
  },
  values: (
    filter = function(item){console.log(this); return true;}, 
    first = 0, 
    length = 0, 
    src = []
  ) => ({filter, first, length, src,}),
}

// ------------------------------------------------------------------------- //
// Package of component parameters description (types and values): Template.
// ------------------------------------------------------------------------- //

export const propPackageTemplate = {
  types: {Template: PropTypes.func,},
  values: (Template = null) => ({Template}),
}

// ------------------------------------------------------------------------- //
// Package of component parameters description (types and values): base value.
// ------------------------------------------------------------------------- //

export const propPackageValueBase = {
  types: {
    value: PropTypes.oneOfType([
      PropTypes.bool, 
      PropTypes.number, 
      PropTypes.object, 
      PropTypes.string, 
    ]),
    whenValueChange: PropTypes.func,
    whenValueModify: PropTypes.func,
  },
  values: (value = "") => ({
    value: value,                                    // current value.
    whenValueChange: (next, prev) => next,           // callback to handle the value state update.
    whenValueModify: (m) => next,                    // callback to modify the value state by coeff.
  }),
}

// ------------------------------------------------------------------------- //
// Package of component parameters description (types and values): value by number.
// ------------------------------------------------------------------------- //

export const propPackageValueNumber = {
  types: {
    ... propPackageValueBase.types,
    valueMax: PropTypes.number,
    valueMin: PropTypes.number,
    valueSpeed: PropTypes.number,
    valueStep: PropTypes.number,
  },
  values: (value=0, max = 100, min = 0, speed = 1, step = 1) => ({
    ... propPackageValueBase.values(value),
    valueMax: max,                                   // maximum value available for choice.
    valueMin: min,                                   // minimum value available for choice.
    valueSpeed: speed,                               // rate of change in value.
    valueStep: step,                                 // minimum step to change the value.
  }),
}

// ------------------------------------------------------------------------- //