// ------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// ------------------------------------------------------------------------- //

// default template to generate a gui for an individual item in an array.
export const TemplateDefault = receivedProps => 							
{
		const {meta, props, ...attributes} = receivedProps;
		return (<li {...attributes} {...props}>{meta?.text}</li>);
};

// ------------------------------------------------------------------------- //