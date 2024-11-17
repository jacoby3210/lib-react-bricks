import React, { memo, useMemo } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to create a list of recurring items,
// based on wrapped component and an array of source data.
// Supports the ability to output the result of applying a filter to the srс.
// -------------------------------------------------------------------------- //

export const withRepeat = (WrappedComponent) => (props) => {
  
  // initial data

  const {
    first = 0, 
    length = 0, 
    src = [], 
    matchingItems, 
    nonMatchingItems,
    cursorIndexState,
    Template,
    value
  } = props;
  
  // hooks

  const _first = useMemo(
    () => (typeof first === "function" ? first(props) : first), 
    [first, props]
  );

  const _src = useMemo(
    () => matchingItems ? matchingItems : (Array.isArray(src) ? src : Object.values(src)),
    [matchingItems, src]
  )
  
  // render

  const children = useMemo(
    () =>
      _src
        .slice(_first, _first + (length ? length : _src.length ))
        .map((item, index) => (
          <Template
            key={item.id || index}
            common={props}
            item={item}
            index={index}
          />
      )
    ),
    [_src, _first, first, length, value, cursorIndexState]
  );
    
  return WrappedComponent 
    ? (<WrappedComponent {...props}>{children}</WrappedComponent>)
    : (<>{children}</>)
  ;
};

// -------------------------------------------------------------------------- //