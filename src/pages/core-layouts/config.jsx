import {GUI} from "@lib-react-bricks/src/modules/core"
import { Template } from "../../modules/core/layouts/widgets/inspector";

// -------------------------------------------------------------------------- //
// Constants.
// -------------------------------------------------------------------------- //

const produceEntries = (count, func = (_, i) => i) => Array.from({ length: count }, func);
const sig = (caption, datatype, props, Render) => 
  ({caption, datatype, props, Render})

const list = {Template: ({item}) => <GUI.Components.Advisor value={item}/>};
const select = {data: produceEntries(5, (v, i) => ({ id: i, label: `label-${i}`}))}
const switcher = {data: produceEntries(5, (v, i) => ({ id: i, caption: `label-${i}`}))}

const data = [
  sig("id",         "noedit",     {},            GUI.Components.Text),
  sig("label",      "string",     {},            GUI.Components.Advisor),
  sig("name",       "reference",  select,        GUI.Components.Select),
  sig("desc",       "reference",  select,        GUI.Components.Select),
  sig("note",       "reference",  select,        GUI.Components.Select),
  sig("isPlayable", "bool",       {},            GUI.Components.CheckBox),
  sig("type",       "enum",       switcher,      GUI.Components.Switcher),
  sig("tooltip",    "text",       {},            GUI.Components.Paragraph),
  sig("skills",     "array",      list,          GUI.Components.List)
];

const menuSecondLine = {
  data:
    [
      sig("entry-0",    "button", {},            GUI.Components.Button),
      sig("entry-1",    "menu",   {},            GUI.Layouts.Menu),
      sig("entry-2",    "menu",   {},            GUI.Layouts.Menu),
      sig("entry-3",    "button", {},            GUI.Components.Button),
      sig("entry-4",    "menu",   {},            GUI.Layouts.Menu),
    ]
};

const menuFirstLine = {
  data:
    [
      sig("entry-0",    "button", {},            GUI.Components.Button),
      sig("entry-1",    "menu",   menuSecondLine,GUI.Layouts.Menu),
      sig("entry-2",    "menu",   menuSecondLine,GUI.Layouts.Menu),
      sig("entry-3",    "button", {},            GUI.Components.Button),
      sig("entry-4",    "menu",   menuSecondLine,GUI.Layouts.Menu),
    ]
  };

// -------------------------------------------------------------------------- //
// Properties.
// -------------------------------------------------------------------------- //

export const props = {

  browser: {
    data: produceEntries(5, (v, i) => ({caption: `Option #${i}`, id: i})),
    packages: [
      
      // browser
      {
      },
      
      // list
      { 
        first:  (props) => {return props.value * 10},
        length: 10,
        data: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
      },
      
    ]
	},

  catalog: {
    data: produceEntries(25, (v, i) => ({ caption: `Option #${i}`, id: i})),
    loop: true, 
    max: 250,
		value: 0,
    
    packages: [
      
      // paginator
      { },
      
      // list
      { 
        first:  (props) => props.index * 10,
        length: 10,
        data: Array.from({ length: 250 }, (_, i) => { return {id: i, text: `string_${i}`} })
      },   
    ]
	},

	gallery: {
		data: Array.from({ length: 250 }, (_, i) => { return {id: i, text: `string_${i}` } }),
    max: 250,
    first: (props) => props.index,
    length: 1,
    loop: true, 
    value:0, 
	},

  scroll: {axis: false,  step: 0.01, value: 0.5 },
  
  accordion: {
    data: produceEntries(5, (v, i) => ({id: i, caption: `Option #${i}`, content: i })),
  },

  accordionSingle: {
    mode: "single",
    data: produceEntries(5, (v, i) => ({ id: i, caption: `Option #${i}`, content: i })),
	},

  checklist: {
    data: produceEntries(5, (v, i) => ({id: i, label: `Option #${i}`, text: `Option #${i}` })),
    value: [],
  },

  inspector: {
    data,
    value: {
      id: 0, 
      label: "label-0", 
      name: 0, 
      desc: 1, 
      note: 2,
      isPlayable: true,
      type: 1,
      tooltip: "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      skills: produceEntries(5, (v, i) => ({id: i, name: `Option #${i}`, value: "12345"})),
    },
  },
  
  menu: {... menuFirstLine, value: [],},
};

// -------------------------------------------------------------------------- //