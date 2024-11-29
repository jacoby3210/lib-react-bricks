
import { 
  createContext, 
  useContext, useEffect, useReducer, useCallback 
} from 'react';

// -------------------------------------------------------------------------- //
// A feature - to reveals child components.
// WrappedComponent hides by default when clicked inside.
// To prevent this behaviour, the click event inside should not bubble.
// -------------------------------------------------------------------------- //

// Context and reducer setup

const RevealContext = createContext();

const initialState = {shown: false,};

const revealReducer = (state, action) => {
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

// Custom hook for using the reveal context

export const useReveals = () => {
  const context = useContext(RevealContext);
  if (!context) {
    throw new Error('useReveals must be used within a RevealProvider');
  }
  return context;
};

// HOC implementation

export const withReveals = (WrappedComponent) => (props) => {
  
  const { children, shown = false, Controller } = props;

  const [state, dispatch] = useReducer(revealReducer, { ...initialState, shown });
  const context = {state, dispatch}

  const handleClick = useCallback(() => dispatch({ type: 'HIDE' }));
  
  const handleKeyDown = useCallback(
    (evt) => {
      if (evt.key === 'Enter') handleClick();
    }
  );

  useEffect(() => {
    dispatch({ type: shown ? 'SHOW' : 'HIDE' });
  }, [shown]);

  useEffect(() => {
    if (state.shown) {
      document.addEventListener('click', handleClick);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [state.shown, handleClick, handleKeyDown]);


  return (
    <RevealContext.Provider value={context}>
      {state.shown ? (
        <>
          <Controller {...props} />
          <WrappedComponent {...props} />
          {children}
        </>
      ) : (
        <Controller {...props}/>
      )}
    </RevealContext.Provider>
  );
};

// -------------------------------------------------------------------------- //