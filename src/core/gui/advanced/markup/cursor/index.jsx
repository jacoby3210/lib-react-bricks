import { 
  createContext, 
  useCallback, useContext, useEffect, useReducer, 
} from 'react';

// -------------------------------------------------------------------------- //
// A feature - to navigate through the direct children of an element.
// -------------------------------------------------------------------------- //

const CursorContext = createContext();

const initialState = {
  index: 0,
  value: null,
};

const cursorReducer = (state, action) => {
  switch (action.type) {

    case 'MOVE_CURSOR_UP':
      {
        const index = Math.max(state.index - 1, 0);
        return {
          ...state,
          index,
        };
      }

    case 'MOVE_CURSOR_DOWN':
      const index = Math.min(state.index + 1, action.payload.matchingItems.length - 1);
      return {
        ...state,
        index,
      };
      
    case 'SET_SELECTED_VALUE':
      return {
        ...state,
        value: action.payload.value,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

export const withCursor = (WrappedComponent) => (props) => {

  const { matchingItems, whenValueChange } = props;

  const [state, dispatch] = useReducer(cursorReducer, initialState);
  const context = { state, dispatch };

  const handleClick = useCallback(
    (evt) => whenValueChange(evt.target.value),
    [whenValueChange]
  );

  const handleKeyDown = useCallback(
    (evt) => {
      switch (evt.key) {
        
        case 'ArrowDown':
          dispatch({ type: 'MOVE_CURSOR_DOWN', payload: { matchingItems } });
        break;
        
        case 'ArrowUp':
          dispatch({ type: 'MOVE_CURSOR_UP' });
        break;
        
        case 'Enter':
          const selected = matchingItems[state.index]?.id;
          dispatch({ type: 'SET_SELECTED_VALUE', payload: { value: selected } });
        break;

        default: break;

      }
      evt.preventDefault();
    },
    [matchingItems, state.index]
  );

  useEffect(() => {
    if (state.value !== null) {
      whenValueChange(state.value);
    }
  }, [state.value, whenValueChange]);


  return (
    <CursorContext.Provider value={context}>
      <WrappedComponent
        {...props}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      />
    </CursorContext.Provider>
  );
};

// -------------------------------------------------------------------------- //