import { getDecimalPlaces } from './code';
// ------------------------------------------------------------------------- //
// HOC to control the state of the value (number) in the wrapped component.	 //
// ------------------------------------------------------------------------- //

export const withValueNumber = (WrappedComponent) => {

  return props => {

		// initial props
		const {
			min,
			max,
			step,
			value,
			whenValueChange,
			...attributes
		} = props;

		// hooks
    const handleChange = (next, prev) => {
			const normNext = Math.round(Math.max(Math.min(next, max), min) / step) * step;
			const fixNext = parseFloat(normNext.toFixed(getDecimalPlaces(step)));
			return whenValueChange(fixNext, prev);
		};

		// render
		const packProps = {...attributes, min, max, step};
    return (
      <WrappedComponent
        {...packProps}
				value={value}
        whenValueChange={handleChange}
      />
    );
  };

};

// ------------------------------------------------------------------------- //