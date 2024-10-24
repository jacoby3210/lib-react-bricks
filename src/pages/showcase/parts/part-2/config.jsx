// ========================================================================= //
// Constants.
// ========================================================================= //

export const produceEntries = (count, func) => Array.from(new Array(count), func);
export const props = {
	accordion: {
		src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, content: i } }),
	},
	browser: {
		src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, id: i } }),
	},
	viewForBrowser: {
		length: 10,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	},
	navigator: {infinity: true, value:0, valueMax: 250},
	viewForNavigator: {
		length: 1,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	},
	paginator: {
		lengthBrowser: 5,
		lengthNavigator: 25,
		src: produceEntries(25, (v, i) => { return { caption: `Option #${i}`, id: i } }),
		value: 0,
	},
	viewForPaginator: {
		length: 10,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	},
  scroll: {  valueStep: 0.01, value: 0.5 },
};

// ========================================================================= //