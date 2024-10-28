import PropTypes from 'prop-types';
// -------------------------------------------------------------------------- //
// Constants
// -------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = 'rc';
export function applyPackage(source, target, values={}){
  source.types = {...source.types, ...target.types}
  source.values = {...source.values, ...target.values(values)}
  return source;
}
export const createConfig = ({postfix, id = null}) => ({
  CSS_CLASS_DEFAULT: `${CSS_CLASS_DEFAULT}-${postfix}`,
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
  values: {
    children: [],
    className: `${CSS_CLASS_DEFAULT}-${postfix}`,
    id,
  },
});

// -------------------------------------------------------------------------- //
// Package of component parameters description (types and values): orientation axis.
// -------------------------------------------------------------------------- //

export const propPackageOrientationBase = {
  types: {axis: PropTypes.bool,},
  values: ({axis = true}) => ({axis}),
}

// -------------------------------------------------------------------------- //
// Package of component parameters description (types and values): with data source.
// -------------------------------------------------------------------------- //

export const propPackageSourceData = {
  types: {
    filter: PropTypes.func,
    first: PropTypes.number,
    length: PropTypes.number,
    matchingItems: PropTypes.array,
    nonMatchingItems: PropTypes.array,
    src: PropTypes.array,
  },
  values: ({
    filter = function(item){return true;}, 
    first = 0, 
    length = 0, 
    src = [],
  }) => ({filter, first, length, src}),
}

// -------------------------------------------------------------------------- //
// Package of component parameters description (types and values): Template.
// -------------------------------------------------------------------------- //

export const propPackageTemplate = {
  types: {Template: PropTypes.func,},
  values: ({Template = null}) => ({Template}),
}

// -------------------------------------------------------------------------- //
// Package of component parameters description (types and values): base value.
// -------------------------------------------------------------------------- //

export const propPackageValueBase = {
  types: {
    value: PropTypes.oneOfType([
      PropTypes.array, 
      PropTypes.bool, 
      PropTypes.number, 
      PropTypes.object, 
      PropTypes.string, 
    ]),
    whenValueChange: PropTypes.func,
    whenValueModify: PropTypes.func,
  },
  values: ({value = ""}) => ({
    value: value,                                    // current value.
    whenValueChange: (next, prev) => next,           // callback to handle the value state update.
    whenValueModify: (m) => m,                       // callback to modify the value state by coeff.
  }),
}

// -------------------------------------------------------------------------- //
// Package of component parameters description (types and values): value by number.
// -------------------------------------------------------------------------- //

export const propPackageValueNumber = {
  types: {
    ... propPackageValueBase.types,
    valueRangeMax:    PropTypes.number,
    valueRangeMin:    PropTypes.number,
    valueMode:        PropTypes.bool,
    valueSpeed:       PropTypes.number,
    valueStep:        PropTypes.number,
  },
  values: ({value=0, mode=false, rangeMax = 100, rangeMin = 0, speed = 1, step = 1}) => ({
    ... propPackageValueBase.values(value),
    valueMode:            mode,                     // behavior mode when the maximum / minimum value is reached
    valueRangeMax:    rangeMax,                     // maximum value available for choice.
    valueRangeMin:    rangeMin,                     // minimum value available for choice.
    valueSpeed:          speed,                     // rate of change in value.
    valueStep:            step,                     // minimum step to change the value.
  }),
}

// -------------------------------------------------------------------------- //
// Package of component parameters description (types and values): value by text.
// -------------------------------------------------------------------------- //

export const propPackageValueText = {
  types: {
    ... propPackageValueBase.types,
    valueForbiddenChars:  PropTypes.string,
    valueLengthMax:       PropTypes.number,
    valueLengthMin:       PropTypes.number,
    valueMode:            PropTypes.bool,
  },
  values: ({value = "", lengthMax = 100, lengthMin = 0, forbiddenChars = ""}) => ({
    ... propPackageValueBase.values(value),
    valueForbiddenChars:  forbiddenChars,            // forbidden characters for user input
    valueLengthMax:            lengthMax,            // maximum value available for choice.
    valueLengthMin:            lengthMin,            // minimum value available for choice.
  }),
}

// -------------------------------------------------------------------------- //