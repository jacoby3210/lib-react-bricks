// ------------------------------------------------------------------------- //
// Helper functions.																												 //
// ------------------------------------------------------------------------- //

// default template to generate a gui for an individual item in an array.
export const TemplateViewItemDefault = receivedProps => 							
{
		const {meta, props, ...attributes} = receivedProps;
		return (<li {...attributes} {...props}>{meta?.text}</li>);
};

// ------------------------------------------------------------------------- //