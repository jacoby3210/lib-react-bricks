
import { createSmartContext, useReducerAsContext } from '@lib-react-bricks/src/modules/core/utils';
import { useCallback, useEffect} from 'react';

// -------------------------------------------------------------------------- //
// A feature - to hide \ show children components.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// By default WrappedComponent hides when clicked inside.
// To prevent this behavior, the click event inside should not bubble.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
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

  const ctx = useReducerAsContext(reducer, { ...stateInitial, shown });

  const handleClick = useCallback(
    () => { ctx.dispatch({ type: 'HIDE' }) },
    [ctx.dispatch]
  );
  
  const handleKeyDown = useCallback(
    (evt) => { if (evt.key === 'Enter') ctx.dispatch({ type: 'HIDE' }); },
    [ctx.dispatch]
  );

  useEffect(
    () => { if(ctx.state.shown != shown) ctx.dispatch({ type: 'TOGGLE' }); },
    [ctx.dispatch, shown]
  );

  useEffect(
    () => {
      if (ctx.state.shown) {
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeyDown);
      }
      return () => {
        document.removeEventListener('click', handleClick);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, 
    [ctx.state.shown, ctx.dispatch, handleClick, handleKeyDown]
  );

  // render 
  
  return (
    <RevealContext.Provider value={ctx}>
      {ctx.state.shown ? (
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