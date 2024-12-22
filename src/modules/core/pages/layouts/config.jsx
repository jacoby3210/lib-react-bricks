import { Core } from "@lib-react-bricks/src/modules/core";

// -------------------------------------------------------------------------- //
// Constants.
// -------------------------------------------------------------------------- //

const produceEntries = (count, func = (_, i) => i) =>
  Array.from({ length: count }, func);

const sig = (caption, datatype, props, Render) => ({
  caption,
  datatype,
  props,
  Render,
});

const list = {
  Template: ({ item }) => <Core.Components.Advisor value={item} />,
};
const select = {
  data: produceEntries(5, (v, i) => ({ id: i, label: `label-${i}` })),
};
const switcher = {
  data: produceEntries(5, (v, i) => ({ id: i, caption: `label-${i}` })),
};

const fieldset = {
  data: [
    sig("id", "noedit", {}, Core.Components.Text),
    sig("label", "string", {}, Core.Components.Advisor),
    sig("name", "reference", select, Core.Components.Select),
    sig("desc", "reference", select, Core.Components.Select),
    sig("note", "reference", select, Core.Components.Select),
    sig("isPlayable", "bool", {}, Core.Components.CheckBox),
    sig("type", "enum", switcher, Core.Components.Switcher),
    sig("tooltip", "text", {}, Core.Components.Paragraph),
    sig("skills", "array", list, Core.Components.List),
  ],
};

const data = [
  sig("id", "noedit", {}, Core.Components.Text),
  sig("label", "string", {}, Core.Components.Advisor),
  sig("name", "reference", select, Core.Components.Select),
  sig("desc", "reference", select, Core.Components.Select),
  sig("note", "reference", select, Core.Components.Select),
  sig("isPlayable", "bool", {}, Core.Components.CheckBox),
  sig("type", "enum", switcher, Core.Components.Switcher),
  sig("tooltip", "text", {}, Core.Components.Paragraph),
  sig("skills", "array", list, Core.Components.List),
  sig("fieldset", "object", fieldset, Core.Layouts.Inspector),
];

const menuSecondLine = {
  data: [
    sig("entry-0", "button", {}, Core.Components.Text),
    sig("entry-1", "menu", {}, Core.Layouts.Menu),
    sig("entry-2", "menu", {}, Core.Layouts.Menu),
    sig("entry-3", "button", {}, Core.Components.Text),
    sig("entry-4", "menu", {}, Core.Layouts.Menu),
  ],
};

const menuFirstLine = {
  data: [
    sig("entry-0", "button", {}, Core.Components.Text),
    sig("entry-1", "menu", menuSecondLine, Core.Layouts.Menu),
    sig("entry-2", "menu", menuSecondLine, Core.Layouts.Menu),
    sig("entry-3", "button", {}, Core.Components.Text),
    sig("entry-4", "menu", menuSecondLine, Core.Layouts.Menu),
  ],
};

// -------------------------------------------------------------------------- //
// Properties.
// -------------------------------------------------------------------------- //

export const props = {
  browser: {
    data: produceEntries(5, (v, i) => ({ caption: `Option #${i}`, id: i })),
    packages: [
      // browser
      {},

      // list
      {
        data: Array.from({ length: 250 }, (_, i) => ({ text: `string_${i}` })),
        first: (props) => props.value * 10,
        length: 10,
      },
    ],
  },

  catalog: {
    data: produceEntries(25, (v, i) => ({ caption: `Option #${i}`, id: i })),
    loop: true,
    max: 250,
    value: 0,

    packages: [
      // paginator
      {},

      // list
      {
        data: Array.from({ length: 250 }, (_, i) => ({
          id: i,
          text: `string_${i}`,
        })),
        first: (props) => props.index * 10,
        length: 10,
      },
    ],
  },

  gallery: {
    data: Array.from({ length: 250 }, (_, i) => {
      return { id: i, text: `string_${i}` };
    }),
    max: 250,
    first: (props) => props.index,
    length: 1,
    loop: true,
    value: 0,
  },

  scroll: { axis: false, step: 0.01, value: 0.5 },

  accordion: {
    data: produceEntries(5, (v, i) => ({
      id: i,
      caption: `Option #${i}`,
      content: i,
    })),
  },

  accordionSingle: {
    mode: "single",
    data: produceEntries(5, (v, i) => ({
      id: i,
      caption: `Option #${i}`,
      content: i,
    })),
  },

  bar: {
    data: produceEntries(5, (v, i) => ({ label: `Option #${i}`, value: i })),
    name: "test-bar",
    value: 2,
  },

  checklist: {
    data: produceEntries(5, (v, i) => ({
      id: i,
      label: `Option #${i}`,
      text: `Option #${i}`,
    })),
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
      skills: produceEntries(5, (v, i) => ({
        id: i,
        name: `Option #${i}`,
        value: "12345",
      })),
      fieldset: {
        id: 0,
        label: "label-0",
        name: 0,
        desc: 1,
        note: 2,
        isPlayable: true,
        type: 1,
        tooltip: "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        skills: produceEntries(5, (v, i) => ({
          id: i,
          name: `Option #${i}`,
          value: "12345",
        })),
      },
    },
  },

  menu: { ...menuFirstLine, value: [] },
};

// -------------------------------------------------------------------------- //
