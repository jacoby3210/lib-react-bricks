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

    
  slider: { value: 5, valueRangeMax: 50, valueRangeMin: 0, valueStep: 0.5,},

};

// -------------------------------------------------------------------------- //