import {GUI} from '/src/common/gui'

// -------------------------------------------------------------------------- //
// Constants.
// -------------------------------------------------------------------------- //

const produceEntries = (count, func) => Array.from(new Array(count), func);
const sig = (caption, datatype, props, Render) => 
  ({caption, datatype, props, Render})

const selectSrc = produceEntries(5, (v, i) => ({ id: i, caption: `label-${i}`}))
const switcherSrc = produceEntries(5, (v, i) => ({ id: i, caption: `label-${i}`}))

const src = [
  sig("id",         "noedit",    {},                GUI.Components.Text),
  sig("label",      "string",    {},                GUI.Components.Advisor),
  sig("name",       "reference", {src:  selectSrc}, GUI.Components.Select),
  sig("desc",       "reference", {src:  selectSrc}, GUI.Components.Select),
  sig("note",       "reference", {src:  selectSrc}, GUI.Components.Select),
  sig("isPlayable", "bool",      {},                GUI.Components.CheckBox),
  sig("type",       "enum",      {src:switcherSrc}, GUI.Components.Switcher),
  sig("tooltip",    "text",      {},                GUI.Components.Paragraph),
  sig("skills",     "array",     {},                GUI.Components.List)
];

const srcMenuSecondLine = [
  sig("entry-0",    "button",    {},                GUI.Components.Button),
  sig("entry-1",    "menu",      {},                GUI.Layouts.Menu),
  sig("entry-2",    "menu",      {},                GUI.Layouts.Menu),
  sig("entry-3",    "button",    {},                GUI.Components.Button),
  sig("entry-4",    "menu",      {},                GUI.Layouts.Menu),
];

const srcMenuFirstLine = [
  sig("entry-0",    "button",    {},                        GUI.Components.Button),
  sig("entry-1",    "menu",      {src:srcMenuSecondLine},   GUI.Layouts.Menu),
  sig("entry-2",    "menu",      {src:srcMenuSecondLine},   GUI.Layouts.Menu),
  sig("entry-3",    "button",    {},                        GUI.Components.Button),
  sig("entry-4",    "menu",      {src:srcMenuSecondLine},   GUI.Layouts.Menu),
];

// -------------------------------------------------------------------------- //
// Properties.
// -------------------------------------------------------------------------- //

export const props = {

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
    max: 250,
  },

	viewForNavigator: {
		length: 1,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	},

	paginator: {
    max: 250,
    step: 10,
		src: produceEntries(25, (v, i) => { return { caption: `Option #${i}`, id: i } }),
		value: 0,
	},

	viewForPaginator: {
    length: 10,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	},
  scroll: {axis: false,  step: 0.01, value: 0.5 },
  
  accordion: {
    src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, content: i } }),
    value: [],
  },

  accordionSingle: {
    mode: "single",
    src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, content: i } }),
    value: [],
	},

  checklist: {
    src: produceEntries(5, (v, i) => { return {id: i, label: `Option #${i}`, text: `Option #${i}`, content: i } }),
    value: [],
  },

  inspector: {
    src,
    value: {
      id: 0, 
      label: "label-0", 
      name: 0, 
      desc: 1, 
      note: 2,
      isPlayable: true,
      type: 1,
      tooltip: "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      skills: produceEntries(5, (v, i) => { return {id: i, name: `Option #${i}`, text: "12345"}}),
    },
  },
  
  menu: {
    src: srcMenuFirstLine,
    value: [],
  },
};

// -------------------------------------------------------------------------- //