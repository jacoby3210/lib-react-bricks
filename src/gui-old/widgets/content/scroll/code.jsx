// -------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// -------------------------------------------------------------------------- //

export const valueToPosition = (area, props, value) => {
  return (area[props.scrollSize] - area[props.componentSize]) * value
}

export const valueFromPosition = (area, props)=>{
  return area[props.scrollOffset] / (area[props.scrollSize] - area[props.componentSize]);
}

// -------------------------------------------------------------------------- //