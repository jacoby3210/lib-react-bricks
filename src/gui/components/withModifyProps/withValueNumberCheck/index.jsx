import * as code from './code';
// ------------------------------------------------------------------------- //
// HOC to сhecks the numeric value for compliance with additional conditions.   //
// ------------------------------------------------------------------------- //

export const withValueNumberCheck = (WrappedComponent) => {

  return props => {

    // initial data
    const {
      valueMax: max,
      valueMin: min,
      valueMode: infinity,
      valueStep: step,
      value,
    } = props;
    console.log(max, min, infinity, step, props)

    // hooks
    const whenValueChange = (next) => {
      const nextInf = infinity ? (next + max) % (max) : Math.min(next, max - 1);
      const normNext = Math.round(Math.max(Math.min(nextInf, max), min) / step) * step;
      const fixNext = parseFloat(normNext.toFixed(code.getDecimalPlaces(step)));
      console.log(max, min, infinity, step, next, nextInf, normNext, fixNext)
      return props["whenValueChange"](fixNext);
    };
    const whenValueModify = m => whenValueChange(parseInt(value) + m)
    
    // render
    const modifiedProps = {... props,  whenValueChange, whenValueModify};
    return (<WrappedComponent {...modifiedProps}/>);
  };

};

// ------------------------------------------------------------------------- //