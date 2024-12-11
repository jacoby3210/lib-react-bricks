// -------------------------------------------------------------------------- //
// Constants && component properties.
// -------------------------------------------------------------------------- //

const produceEntries = (count, func = (_, i) => i) =>
  Array.from({ length: count }, func);

export const props = {
  button: {
    label: "button",
  },

  dropout: {
    shown: true,
  },

  list: {
    data: produceEntries(5, (v, i) => {
      return {
        id: i,
        name: `Option #${i}`,
        text: `Option text #${i}`,
        onClick: (e) => {
          console.log(`Option #${i}`);
          return false;
        },
      };
    }),
    length: 5,
  },

  text: {
    value: "ttttttttttttttttttt",
  },

  checkbox: {
    value: false,
  },

  clicker: {
    value: 0,
  },

  rangeHorizontal: {
    axis: true,
    min: 0,
    max: 10,
    step: 0.0001,
    value: 5,
  },

  rangeVertical: {
    max: 50,
    min: 0,
    step: 0.1,
    value: 5,
  },

  swing: {
    max: 50,
    min: 0,
    step: 0.5,
    value: 5,
  },

  advisor: {
    data: produceEntries(5, (v, i) => ({ id: i, label: `Option #${i}` })),
  },

  paragraph: {
    value:
      "long long long long long long long long long long long long long long string",
  },

  select: {
    length: 5,
    data: produceEntries(5, (v, i) => ({
      id: i,
      label: `Option #${i}`,
      onMouseDown: (e) => {
        console.log(`Option #${i}`);
        return false;
      },
    })),
    value: 0,
  },

  switcher: {
    data: produceEntries(5, (v, i) => ({ caption: `Option #${i}`, id: i })),
    length: 5,
    loop: true,
    value: 0,
  },

  slider: {
    max: 50,
    min: 0,
    step: 0.5,
    value: 5,
  },
};

// -------------------------------------------------------------------------- //
