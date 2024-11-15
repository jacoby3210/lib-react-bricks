import React, { memo, useMemo } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to create a list of recurring items,
// based on wrapped component and an array of source data.
// Supports the ability to output the result of applying a filter to the srс.
// -------------------------------------------------------------------------- //

export const withRepeat = (WrappedComponent) => {

  return (props) => {
  
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
    
    const srcArray = matchingItems ? matchingItems : src;

    // render

    const componentList = useMemo(
      () =>
        srcArray
          .slice(first, first + (length ? length : srcArray.length ))
          .map((item, index) => (
            <Template
              key={item.id || index}
              common={props}
              item={item}
              index={index}
            />
        )
      ),
      [srcArray, first, length, value, cursorIndexState]
    );
      
    return WrappedComponent 
      ? (<WrappedComponent {...props}>{componentList}</WrappedComponent>)
      : (<>{componentList}</>)
    ;
  };
};

// -------------------------------------------------------------------------- //