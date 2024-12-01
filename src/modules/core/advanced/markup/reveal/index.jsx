
import { createSmartContext } from '@lib-react-bricks/src/modules/core/utils';
import { useCallback, useEffect, useReducer } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to hide \ show children components.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// By default WrappedComponent hides when clicked inside.
// To prevent this behavior, the click event inside should not bubble.
// -------------------------------------------------------------------------- //

const reducer = (state, action) => {
  switch (action.type) {
    
    case 'SHOW':
      return { ...state, shown: true };

    case 'HIDE':
      return { ...state, shown: false };
    
    case 'TOGGLE':
      return { ...state, shown: !state.shown };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  
  }
};

const stateInitial = {shown: false,};

const {RevealContext, useReveal} = createSmartContext("Reveal");
export {useReveal};

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withReveal = (WrappedComponent) => (props) => {
  
  // unpack data

  const { 
    children = [], 
    shown = false, 
    Controller = (props) => <button {... props}></button> ,
    ... rest
  } = props;

  // hooks 

  const [state, dispatch] = useReducer(reducer, { ...stateInitial, shown });
  const context = {state, dispatch}

  const handleClick = useCallback(
    () => { dispatch({ type: 'HIDE' }) },
    [dispatch]
  );
  
  const handleKeyDown = useCallback(
    (evt) => {
      if (evt.key === 'Enter') dispatch({ type: 'HIDE' });
    },
    [dispatch]
  );

  useEffect(() => {
    if(state.shown != shown) dispatch({ type: 'TOGGLE' });
  }, [dispatch, shown]);

  useEffect(() => {
    if (state.shown) {
      document.addEventListener('click', handleClick);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [state.shown, dispatch, handleClick, handleKeyDown]);

  // render 
  
  return (
    <RevealContext.Provider value={context}>
      {state.shown ? (
        <>
          <Controller {...props} />
          <WrappedComponent {...rest} />
          {children}
        </>
      ) : (
        <Controller {...props}/>
      )}
    </RevealContext.Provider>
  );
};

// -------------------------------------------------------------------------- //