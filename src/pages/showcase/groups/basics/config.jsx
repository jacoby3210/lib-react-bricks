// -------------------------------------------------------------------------- //
// Constants && component properties.
// -------------------------------------------------------------------------- //

export const produceEntries = (count, func) => Array.from(new Array(count), func);

export const props = {
  dropout: { reveals: true, },
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

  clicker:          {value: 0,},
  rangeHorizontal:  { axis: true, valueRangeMin: 0, valueRangeMax: 10, valueStep: 0.0001, value: 5 },
  rangeVertical:    { valueRangeMax: 50, valueRangeMin: 0, valueStep: 0.1, value: 5 },
  swing:            { valueRangeMax: 50, valueRangeMin: 0, valueStep: 0.5, value: 5 },
  toggle:           {src: produceEntries(5, (v, i) => {return {label: `Option #${i}`, value: i}}),},
};

// -------------------------------------------------------------------------- //