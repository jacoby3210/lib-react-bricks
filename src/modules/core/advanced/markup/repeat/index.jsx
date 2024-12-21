import {
  createSmartContext,
  resolveData,
  resolveFunction,
  useReducerAsContext,
} from "@lib-react-bricks/src/modules/utils";

// -------------------------------------------------------------------------- //
// A feature - to create a list of child components according to the template.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Based on wrapped component and an array of source data.
// Supports the ability to output the result of applying a filter to the src.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SRC":
      return { ...state, src: action.payload };

    case "SET_FIRST":
      return { ...state, first: action.payload };

    case "SET_LENGTH":
      return { ...state, length: action.payload };

    case "SET_DATASET":
      return { ...state, dataset: action.payload };

    case "SET_VALUE":
      return { ...state, value: action.payload };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const { RepeatContext, useRepeat } = createSmartContext("Repeat");
export { useRepeat };

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withRepeat = (WrappedComponent) => (props) => {
  const {
    data = [],
    dataset = null,

    first = 0,
    length = -1,
    Template,

    ...rest
  } = props;

  const dataResolve = resolveData(data);
  const datasetResolve = dataset ? dataset : dataResolve;

  const firstResolve = resolveFunction(first, props);
  const lengthResolve =
    resolveFunction(length, props) == -1
      ? datasetResolve.length
      : Math.min(datasetResolve.length, length);
  const lastResolve = firstResolve + lengthResolve;

  const ctx = useReducerAsContext(reducer, {
    data: dataResolve,
    dataset: datasetResolve,

    first: firstResolve,
    last: lastResolve,
    length: lengthResolve,
  });

  const children = datasetResolve
    .slice(firstResolve, lastResolve)
    .map((item, index) => (
      <Template key={item.id || index} index={index} item={item} />
    ));

  return (
    <RepeatContext.Provider value={ctx}>
      {WrappedComponent ? (
        <WrappedComponent {...rest}> {children} </WrappedComponent>
      ) : (
        <> {children} </>
      )}
    </RepeatContext.Provider>
  );
};

// -------------------------------------------------------------------------- //
