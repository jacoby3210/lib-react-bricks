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
    length = -1, 
    src = [], 
    matchingItems, 
    cursorIndexState,
    Template,
    value
  } = props;
  
  // hooks

  const srcMemo = useMemo(
    () => matchingItems ? matchingItems : (Array.isArray(src) ? src : Object.values(src)),
    [matchingItems, src]
  )
  
  const firstMemo = useMemo(
    () => (typeof first === "function" ? first(props) : first), 
    [first, srcMemo, value]
  );

  const lengthMemo = useMemo(
    () => (length === -1 ? srcMemo.length : Math.min(srcMemo.length, length)), 
    [length, srcMemo, value]
  );
  
  // render
  const children = useMemo(
    () =>
      srcMemo
        .slice(firstMemo, firstMemo + lengthMemo)
        .map((item, index) => (
          <Template
            key={item.id || index}
            common={props}
            item={item}
            index={index}
          />
      )
    ),
    [srcMemo, firstMemo, lengthMemo, value, cursorIndexState]
  );
    
  return WrappedComponent 
    ? (<WrappedComponent {...props}>{children}</WrappedComponent>)
    : (<>{children}</>)
  ;
};

// -------------------------------------------------------------------------- //