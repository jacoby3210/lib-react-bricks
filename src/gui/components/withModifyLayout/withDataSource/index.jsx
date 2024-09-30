// ------------------------------------------------------------------------- //
// HOC to map multiple child nodes by data source and JSX template.          //
// ------------------------------------------------------------------------- //

export const withDataSource = (WrappedComponent) => {

  return props => {

    // initial data
    const {
      src,
      Template,
      ...attributes
    } = props;

    // render
    const children = src.map(
      (meta, index) => {
        const templateProps = {index, meta, common: attributes}
        return <Template key={meta.id || index} {...templateProps}/>;
      }
    ); 
    
    return (
      <WrappedComponent {...props}>
        {children}
      </WrappedComponent>
    );
  };
};

// ------------------------------------------------------------------------- //