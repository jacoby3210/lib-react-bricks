import { resolveData, resolveFunction } from "/src/modules/utils";
import {
  createSmartContext,
  withContext,
} from "/src/modules/core/advanced/common/context";

// -------------------------------------------------------------------------- //
// A feature - to create a list of child components according to the template.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Based on wrapped component and an array of source data.
// Supports the ability to output the result of applying a filter to the src.
// -------------------------------------------------------------------------- //

const ctx = createSmartContext("Repeat");
export const { useRepeat } = ctx;

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

const resolver = (props) => {
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

  const state = {
    data: dataResolve,
    dataset: datasetResolve,

    first: firstResolve,
    last: lastResolve,
    length: lengthResolve,
  };

  const children = datasetResolve
    .slice(firstResolve, lastResolve)
    .map((item, index) => (
      <Template key={item.id || index} index={index} item={item} />
    ));

  return [state, { ...rest, children }];
};

export const withRepeat = (WrappedComponent) => {
  return withContext(
    ctx,
    reducer,
    resolver
  )((props) => {
    const { children, ...rest } = props;

    return WrappedComponent ? (
      <WrappedComponent {...rest}> {children} </WrappedComponent>
    ) : (
      <> {children} </>
    );
  });
};

// -------------------------------------------------------------------------- //
