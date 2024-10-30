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
};

// -------------------------------------------------------------------------- //