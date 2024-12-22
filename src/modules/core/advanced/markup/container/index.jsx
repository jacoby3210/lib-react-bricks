import {
  createSmartContext,
  withContext,
} from "@lib-react-bricks/src/modules/core/advanced/common/context";

// -------------------------------------------------------------------------- //
//  A feature - to wrap base component into ui block (<div>).
// -------------------------------------------------------------------------- //

const ctx = createSmartContext("Container");
export const { useContainer } = ctx;

const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const resolver = (props) => {
  const { id, children, Container, ...rest } = props;
  return [rest, props];
};

export const withContainer = (WrappedComponent) => {
  return withContext(
    ctx,
    reducer,
    resolver
  )((props) => {
    const { id, className, value } = props;
    const { Container = (props) => <div {...props} /> } = props;

    return (
      <Container id={id} className={className} value={value}>
        <WrappedComponent {...props} />;
      </Container>
    );
  });
};

// -------------------------------------------------------------------------- //
