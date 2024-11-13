// -------------------------------------------------------------------------- //
// Constants && component properties.
// -------------------------------------------------------------------------- //

const produceEntries = (count, func) => Array.from(new Array(count), func);

export const props = {
  button: {label: "button"},
  dropout: { shown: true, },
  list: {
    length: 5,
    src: produceEntries(5, (v, i) => { 
      return { 
        id: i,
        name: `Option #${i}`, 
        text: `Option text #${i}`,
        onClick: (e) => {console.log(`Option #${i}`); return false;} 
      } 
    }),
  },
  text: {value: "ttttttttttttttttttt"},

  clicker:          {value: 0,},
  rangeHorizontal:  { axis: true, min: 0, max: 10, step: 0.0001, value: 5 },
  rangeVertical:    { max: 50, min: 0, step: 0.1, value: 5 },
  swing:            { max: 50, min: 0, step: 0.5, value: 5 },
  toggle:           {src: produceEntries(5, (v, i) => {return {label: `Option #${i}`, value: i}}),},

  advisor: {
    src: produceEntries(5, (v, i) => {
      return {caption: `Option #${i}`, value: i}
    }),
  },
  paragraph: {
    value: "long long long long long long long long long long long long long long long long long long string",
  },
  select: {
    length: 5,
    src: produceEntries(5, (v, i) => ({ 
      caption: `Option #${i}`, 
      id: i,
      onMouseDown: (e) => {
        console.log(`Option #${i}`); 
        return false;
      } 
    })),
    value: 0,
  },
  switcher: {
    length: 5,
    src: produceEntries(5, (v, i) => ({caption: `Option #${i}`, id: i})),
    value: 0,
  },

    
  slider: { value: 5, max: 50, min: 0, step: 0.5,},

};

// -------------------------------------------------------------------------- //