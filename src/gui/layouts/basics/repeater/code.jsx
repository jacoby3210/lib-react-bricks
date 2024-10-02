// ------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// ------------------------------------------------------------------------- //

// default template to generate a gui for an individual item in an array.
export const TemplateDefault = receivedProps => 							
{
		const {common, meta, props, ...attributes} = receivedProps;
		return (<li {...attributes}>{meta?.text}</li>);
};

// ------------------------------------------------------------------------- //