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
  
  const ctx = useReducerAsContext(reducer, { ...rest });

  return (
    <ContainerContext.Provider value={ctx}>
      <Container id={id} className={className} value={value}>
        <WrappedComponent {...props}>
          {children}
        </WrappedComponent>
      </Container>
    </ContainerContext.Provider>
  );
};

// -------------------------------------------------------------------------- //