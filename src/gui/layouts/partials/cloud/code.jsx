// ------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// ------------------------------------------------------------------------- //

export const TemplateDefault = props => {
	const {common, meta, ...attributes} = receivedProps;
	return (
		<li {...attributes}>
			<span>{meta?.text}</span>
			<button>X</button>
		</li>
	);
}
// ------------------------------------------------------------------------- //