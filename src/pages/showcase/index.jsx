// ------------------------------------------------------------------------- //
// Showcase Application Page.																								 //
// It is used to demonstrate the operation of components / layers / pages 	 //
// of the application in artificial conditions.															 //
// ------------------------------------------------------------------------- //

const ShowcasePage = receivedProps => {
	// initial data
	const {
		id,
		...attributes
	} = receivedProps;
		
	// render
	return (
		<section id={id} {...attributes}>
			{"Its alive"}
		</section>
	);
}

export default ShowcasePage;

// ------------------------------------------------------------------------- //