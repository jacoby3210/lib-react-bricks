import { useRef } from 'react';
import { 
  createSmartContext,
  useReducerAsContext, 
} from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
//  A feature - to wrap base component into ui block (<div>).
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SRC':
      return { ...state, src: action.payload };
      
    case 'SET_FIRST':
      return { ...state, first: action.payload };
    
    case 'SET_LENGTH':
      return { ...state, length: action.payload };
  
    case 'SET_MATCHING_ITEMS':
      return { ...state, matchingItems: action.payload };

    case 'SET_VALUE':
      return { ...state, value: action.payload };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const {ContainerContext, useContainer} = createSmartContext("Container", reducer);
export {useContainer};

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withContainer = (WrappedComponent) => (props) => {

  // initial data
  
  const {

    id, 
    children, 

    Container = (props) => <div {...props}/>,
    
    ... rest
  
  } = props;

  const {
    className = "rc-container", 
    value = null, 
  } = props;

  // hooks
  
  const ctx = useReducerAsContext(reducer, { 
    ...rest,
  });

  const selfRef = useRef(null);
  
  // render
  return (
    <ContainerContext.Provider value={ctx}>
      <Container id={id} className={className} value={value}>
        <WrappedComponent rootRef={selfRef} {...props}>
          {children}
        </WrappedComponent>
      </Container>
    </ContainerContext.Provider>
  );
};

// -------------------------------------------------------------------------- //