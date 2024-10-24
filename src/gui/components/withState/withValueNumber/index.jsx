import { withState } from '/src/gui/components/withState/withState';
import * as code from './code';
// ------------------------------------------------------------------------- //
// HOC to control the state of the value (number) in the wrapped component.   //
// ------------------------------------------------------------------------- //

export const withValueNumberInternal = (stateName) => (WrappedComponent) => {

  return props => {

    // initial data
    const stateHandlerName = `when${code.capitalizeFirstLetter(stateName)}Change`;
    const min = props[`${stateName}Min`] || 0;
    const max = props[`${stateName}Max`] || 999999;
    const step = props[`${stateName}Step`] || 1;

    // hooks
    const handleStateChange = (next, prev) => {
      const normNext = Math.round(Math.max(Math.min(next, max), min) / step) * step;
      const fixNext = parseFloat(normNext.toFixed(code.getDecimalPlaces(step)));
      console.log(next, normNext, fixNext)
      return props[stateHandlerName](fixNext, prev);
    };

    // render
    const modifiedProps = {... props, [stateHandlerName]: handleStateChange,};
    return (<WrappedComponent {...modifiedProps}/>);
  };

};

export const withValueNumber = (WrappedComponent) => 
  withValueNumberInternal("value")(withState("value")(WrappedComponent))

// ------------------------------------------------------------------------- //