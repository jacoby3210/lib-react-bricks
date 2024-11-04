// -------------------------------------------------------------------------- //
// Constants.
// -------------------------------------------------------------------------- //

export const produceEntries = (count, func) => Array.from(new Array(count), func);
export const props = {
  accordionSingle: {
    src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, content: i } }),
    value: [],
	},
	browser: {
		src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, id: i } }),
	},
	viewForBrowser: {
		length: 10,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	},
	navigator: {
    value:0, 
    valueMode: true, 
    valueRangeMax: 250,
  },
	viewForNavigator: {
		length: 1,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	},
	paginator: {
    valueRangeMax: 250,
    valueStep: 10,
		src: produceEntries(25, (v, i) => { return { caption: `Option #${i}`, id: i } }),
		value: 0,
	},
	viewForPaginator: {
    length: 10,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	},
  scroll: {  valueStep: 0.01, value: 0.5 },
  
  accordion: {
    src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, content: i } }),
    value: [],
  },
  checklist: {
    src: produceEntries(5, (v, i) => { return {id: i, caption: `Option #${i}`, content: i } }),
    value: [],
  },
};

// -------------------------------------------------------------------------- //