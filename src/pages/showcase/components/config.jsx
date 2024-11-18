// -------------------------------------------------------------------------- //
// Constants && component properties.
// -------------------------------------------------------------------------- //

const produceEntries = (count, func = (_, i) => i) => Array.from({ length: count }, func);

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
  
  bar:              { src: produceEntries(5, (v, i) => {return {label: `Option #${i}`, value: i}}), value: 2},
  clicker:          { value: 0, },
  rangeHorizontal:  { axis: true, min: 0, max: 10, step: 0.0001, value: 5 },
  rangeVertical:    { max: 50, min: 0, step: 0.1, value: 5 },
  swing:            { max: 50, min: 0, step: 0.5, value: 5 },

  advisor: {src: produceEntries(5, (v, i) => ({value: `Option #${i}`})),},
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