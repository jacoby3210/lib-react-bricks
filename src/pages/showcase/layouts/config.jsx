import {GUI} from '/src/common/gui'

// -------------------------------------------------------------------------- //
// Constants.
// -------------------------------------------------------------------------- //

const produceEntries = (count, func = (_, i) => i) => Array.from({ length: count }, func);
const sig = (caption, datatype, props, Render) => 
  ({caption, datatype, props, Render})

const select = {src: produceEntries(5, (v, i) => ({ id: i, caption: `label-${i}`}))}
const switcher = {src: produceEntries(5, (v, i) => ({ id: i, caption: `label-${i}`}))}

const src = [
  sig("id",         "noedit",     {},            GUI.Components.Text),
  sig("label",      "string",     {},            GUI.Components.Advisor),
  sig("name",       "reference",  select,        GUI.Components.Select),
  sig("desc",       "reference",  select,        GUI.Components.Select),
  sig("note",       "reference",  select,        GUI.Components.Select),
  sig("isPlayable", "bool",       {},            GUI.Components.CheckBox),
  sig("type",       "enum",       switcher,      GUI.Components.Switcher),
  sig("tooltip",    "text",       {},            GUI.Components.Paragraph),
  sig("skills",     "array",      {},            GUI.Components.List)
];

const menuSecondLine = {
  src:
    [
      sig("entry-0",    "button", {},            GUI.Components.Button),
      sig("entry-1",    "menu",   {},            GUI.Layouts.Menu),
      sig("entry-2",    "menu",   {},            GUI.Layouts.Menu),
      sig("entry-3",    "button", {},            GUI.Components.Button),
      sig("entry-4",    "menu",   {},            GUI.Layouts.Menu),
    ]
};

const menuFirstLine = {
  src:
    [
      sig("entry-0",    "button", {},            GUI.Components.Button),
      sig("entry-1",    "menu",   menuSecondLine,GUI.Layouts.Menu),
      sig("entry-2",    "menu",   menuSecondLine,GUI.Layouts.Menu),
      sig("entry-3",    "button", {},            GUI.Components.Button),
      sig("entry-4",    "menu",   menuSecondLine,GUI.Layouts.Menu),
    ]}
;

// -------------------------------------------------------------------------- //
// Properties.
// -------------------------------------------------------------------------- //

export const props = {

  browser: {
    value:0, 
    packages: [
      { // browser
        src: produceEntries(5, (v, i) => ({caption: `Option #${i}`, id: i}))
      },
      { // list
        first:  (props) => props.value * 10,
        length: 10,
        src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
      },
    ]
	},

  catalog: {
    max: 250,
    step: 1,
		value: 0,
    first: (props) => props.value,
    packages: [
      { // paginator
        length: 10, 
        src: produceEntries(250, (v, i) => { return { caption: `Option #${i}`, id: i} })
      },
      { // list
        first:  (props) => props.value * 10,
        length: 10,
        src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}`} })
      },   
    ]
	},

	gallery: {
    valueMode: true, 
    max: 250,
    value:0, 
    first: (props) => props.value,
    length: 1,
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
  
  menu: {... menuFirstLine, value: [],},
};

// -------------------------------------------------------------------------- //