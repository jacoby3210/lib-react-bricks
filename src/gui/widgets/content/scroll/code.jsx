// ------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// ------------------------------------------------------------------------- //

export const horizontalProps = {
  axis: "horizontal",
	componentSize: "offsetWidth",
	scrollDirect: "left",
	scrollOffset: "scrollLeft",
	scrollSize: "scrollWidth",
}

export const verticalProps = {
  axis: "vertical",
	componentSize: "offsetHeight",
	scrollDirect: "top",
	scrollOffset: "scrollTop",
	scrollSize: "scrollHeight",
}

export const valueToPosition = (area, props, value) => {
  return (area[props.scrollSize] - area[props.componentSize]) * value
}

export const valueFromPosition = (area, props)=>{
  return area[props.scrollOffset] / (area[props.scrollSize] - area[props.componentSize]);
}

// ------------------------------------------------------------------------- //