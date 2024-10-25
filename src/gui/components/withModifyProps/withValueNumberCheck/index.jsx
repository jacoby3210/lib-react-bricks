import * as code from './code';
// ------------------------------------------------------------------------- //
// HOC to сhecks the numeric value for compliance with additional conditions.   //
// ------------------------------------------------------------------------- //

export const withValueNumberCheck = (WrappedComponent) => {

  return props => {

    // initial data
    const {
      valueMode: mode,
      valueRangeMax: max,
      valueRangeMin: min,
      valueStep: step,
      value,
    } = props;

    // hooks

    // Called when attempting to change the value of.
    const whenValueChange = (next) => {
      const nextInf = mode ? (next + max) % (max) : Math.min(next, max - 1);
      const normNext = Math.round(Math.max(Math.min(nextInf, max), min) / step) * step;
      const fixNext = parseFloat(normNext.toFixed(code.getDecimalPlaces(step)));
      return props["whenValueChange"](fixNext);
    };

    // Short form to increase the value by the specified amount.
    const whenValueModify = m => whenValueChange(parseInt(value) + m)
    
    // render
    const modifiedProps = {... props,  whenValueChange, whenValueModify};
    return (<WrappedComponent {...modifiedProps}/>);
  };

};

// ------------------------------------------------------------------------- //