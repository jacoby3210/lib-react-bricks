export const getIndex = (state, action) => {
  const { dataset, max, loop, index: prev } = state;

  switch (action.type) {
    case "SET_INDEX": {
      const { index } = action.payload;
      return loop ? (index + max) % max : Math.max(0, Math.min(index, max - 1));
    }

    case "SET_INDEX_FIRST": {
      return 0;
    }

    case "SET_INDEX_LAST": {
      return max - 1;
    }

    case "SET_INDEX_NEXT":
    case "MOVE_CURSOR_DOWN":
    case "MOVE_CURSOR_RIGHT": {
      return loop ? (max + prev + 1) % max : Math.min(prev + 1, max - 1);
    }

    case "SET_INDEX_PREVIOUS":
    case "MOVE_CURSOR_UP":
    case "MOVE_CURSOR_LEFT": {
      return loop ? (max + prev - 1) % max : Math.max(prev - 1, 0);
    }

    case "SET_VALUE_BY_ID": {
      const { id } = action.payload;
      return dataset?.findIndex((item) => item.id === id);
    }

    case "SET_VALUE_BY_TEXT": {
      const { text } = action.payload;
      return dataset?.findIndex((item) => item.label === text);
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const resolveProps = (props) => {
  const { data = [], dataset, value = null, index = -1 } = props;

  const datasetResolve = dataset || data;
  const indexResolve = datasetResolve.findIndex((item) => item.id == value);
  const valueResolve = value;

  return {
    dataset: datasetResolve,
    index: indexResolve,
    value: valueResolve,
  };
};
