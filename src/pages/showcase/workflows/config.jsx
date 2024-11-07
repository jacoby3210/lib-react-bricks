import {GUI} from '/src/gui'
// -------------------------------------------------------------------------- //
// Constants.
// -------------------------------------------------------------------------- //

const sig = (caption, datatype, props, Render) => 
  ({caption, datatype, props, Render})

const map = [
  // sig("id",    "noedit",    {}, GUI.Common.CheckBox),
  sig("label",      "string",    {}, GUI.Common.Advisor),
  sig("name",       "reference", {}, GUI.Common.Select),
  sig("desc",       "reference", {}, GUI.Common.Select),
  sig("note",       "reference", {}, GUI.Common.Select),
  sig("isPlayable", "bool",      {}, GUI.Common.CheckBox),
  // sig("type",  "enum",        {}, GUI.Common.Switcher),

  // sig(GUI.Common.Paragraph, "text",),
];

export const props = {
  inspector: {
    map,
    src: {
      // id: 0, 
      label: "label", 
      name: 0, 
      desc: 1, 
      note: 2,
      isPlayable: false,
    },
      // {id: 1, label: "label", name: 3, desc: 4, note: 5, type: 2,},
      // {id: 2, label: "label", name: 6, desc: 7, note: 8, type: 1,},
    // ],
  },
};

// -------------------------------------------------------------------------- //