import {
  useContainer,
  useReveal,
  useValueOption,
} from "@lib-react-bricks/src/modules/core/advanced";
import { resolveClassName } from "@lib-react-bricks/src/modules/utils";

// -------------------------------------------------------------------------- //
// Field - to select one option from the source list.
// -------------------------------------------------------------------------- //

const Controller = (props) => {
  const { className, data } = props;

  const ctxReveal = useReveal();
  const ctxValueOption = useValueOption();
  const { index, loop, max, value } = ctxValueOption.state;

  const displayText = data[index].label || data[index].id || "Not Found";

  const handleClick = (evt) => {
    evt.stopPropagation();
    ctxReveal.dispatch({ type: "TOGGLE" });
  };

  return (
    <button className={className} onClick={handleClick}>
      <span className={resolveClassName(className, "label")}>
        {displayText}
      </span>
      <span className={resolveClassName(className, "sprite")}>
        <i className={"fa-solid fa-chevron-down"}></i>
      </span>
    </button>
  );
};

const Template = (props) => {
  const ctxContainer = useContainer();
  const ctxReveal = useReveal();
  const ctxValueOption = useValueOption();

  const { item, index } = props;
  const { className, data } = ctxContainer.state;
  const resolveText = data[index].label || data[index].id || "Not Found";

  const handleClick = (evt) => {
    evt.stopPropagation();
    ctxReveal.dispatch({ type: "TOGGLE" });
    ctxValueOption.dispatch({ type: "SET_INDEX", payload: { index } });
  };

  return (
    <option
      className={resolveClassName(className, "-option")}
      cursor={ctxValueOption.state.index == index ? "true" : null}
      onClick={handleClick}
      value={item?.id}
    >
      {resolveText}
    </option>
  );
};

export const Select = { Controller, Template };

// -------------------------------------------------------------------------- //
