import {useRef} from "react"
// ------------------------------------------------------------------------- //
// HOC - to wrap base component into ui block (<div>).
// ------------------------------------------------------------------------- //

export const withContainer = (WrappedComponent) => {

  return props => {

		// initial props
		const {
			id,
			className,
			children,
			value,
		} = props;

		// hooks
		const selfRef = useRef(null);

		// render
    return (
			<div id={id} ref={selfRef} className={className} value={value}>
				<WrappedComponent parentRef={selfRef} {...props}>
					{children}
				</WrappedComponent>
			</div>
    );
  };

};

// ------------------------------------------------------------------------- //