import {GUI} from '/src/gui'
// -------------------------------------------------------------------------- //
// Constants.
// -------------------------------------------------------------------------- //

const sig = (caption, datatype, props, Render) => 
  ({caption, datatype, props, Render})

const selectSrc = [
  {id: 0, caption: "label-0",},
  {id: 1, caption: "label-1",},
  {id: 2, caption: "label-2",},
  {id: 3, caption: "label-3",},
]


const switcherSrc = [
  {id: 0, caption: "label-0",},
  {id: 1, caption: "label-1",},
  {id: 2, caption: "label-2",},
  {id: 3, caption: "label-3",},
]

const src = [
  sig("id",         "noedit",    {},                ({value}) => <span>{value}</span>),
  sig("label",      "string",    {},                GUI.Common.Advisor),
  sig("name",       "reference", {src:  selectSrc}, GUI.Common.Select),
  sig("desc",       "reference", {src:  selectSrc}, GUI.Common.Select),
  sig("note",       "reference", {src:  selectSrc}, GUI.Common.Select),
  sig("isPlayable", "bool",      {},                GUI.Common.CheckBox),
  sig("type",       "enum",      {src:switcherSrc}, GUI.Common.Switcher),
  sig("tooltip",    "text",      {},                GUI.Common.Paragraph),
];

export const props = {
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
      tooltip: "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    },
  },
};

// -------------------------------------------------------------------------- //