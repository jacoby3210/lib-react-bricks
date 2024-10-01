// ========================================================================= //
// Constants && Default properties.
// ========================================================================= //

export const produceEntries = (count, func) => Array.from(new Array(count), func);

export const defaultProps = {
	// basics
	indicator : {
		colors: ["green", "orange", "red"],
		levels: [100, 60, 25],
		value: 50
	},
	path: { data: "/test/3", },
	popup: { shown: true, },
	repeater: {
		from: 0,
		length: 10,
		src: produceEntries(10, (_, i) => { return { text: `string_${i}`}}),
	},
	timer: {},

	// compose
	accordion: {
		src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, content: i } }),
	},
	dropdown: {
		length: 5,
		src: produceEntries(5, (v, i) => { 
			return { 
				caption: `Option #${i}`, 
				value: i,
				onClick: (e) => {console.log(`Option #${i}`); return false;} 
			} 
		}),
		TemplateItem: receivedProps => 				
		{
			const {meta, ...attributes} = receivedProps;
			return (
				<button 
					className={`test-option`} 
					onClick={meta?.onClick} 
					{...attributes}
				>
					{meta.caption}
				</button>
			);
		},
	},

	//
	clicker: {
		value: 0,
	},
	radioBar: {
		src: produceEntries(5, (v, i) => {
			return {label: `Option #${i}`, value: i}
		}),
	},
	rangeHorizontal: { axis: true, min: 0, max: 10, step: 0.0001, value: 5 },
	rangeVertical: { min: 0, max: 50, step: 0.1, value: 5 },
	swing: { min: 0, max: 50, step: 0.1, value: 5 },

  //
	select: {
		length: 5,
		src: produceEntries(5, (v, i) => ({ 
			caption: `Option #${i}`, 
			value: i,
			onMouseDown: (e) => {
        console.log(`Option #${i}`); 
        return false;
      } 
		})),
		value: 0,
	},
  slider: { min: 0, max: 50, step: 0.1, value: 5 },

	// fields
	advisor: {
		src: produceEntries(5, (v, i) => {
			return {caption: `Option #${i}`, value: i}
		}),
	},
	cloud: {
		src: produceEntries(5, (v, i) => {
			return {caption: `Option #${i}`, text: `Option #${i}`, id: i}
		}),
		values: produceEntries(2, (v, i) => {
			return {caption: `Option #${i}`, text: `Option #${i}`, id: i}
		}),
	},

};

// ========================================================================= //