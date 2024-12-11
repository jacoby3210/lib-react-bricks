export const valueToPosition = (area, props, value) =>
  (area[props.scrollSize] - area[props.elementSize]) * value;
export const toValue = (area, props) =>
  area[props.scrollOffset] / (area[props.scrollSize] - area[props.elementSize]);
