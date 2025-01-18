import {
  useContainer,
  useReveal,
  useValueLiteral,
  useValueOption,
} from "/src/modules/core/advanced";
import { resolveClassName } from "/src/modules/utils";
import { filter } from "./utils";

// -------------------------------------------------------------------------- //
// Field - to show text line field with autocomplete suggestions.
// -------------------------------------------------------------------------- //

const Controller = (props) => {
  const { className, data } = props;

  const ctxReveal = useReveal();

  const ctxValueLiteral = useValueLiteral();
  const { value } = ctxValueLiteral.state;

  const ctxValueOption = useValueOption();
  const { index } = ctxValueOption.state;

  const valueResolve =
    index == -1 ? value : data[index].label || data[index].id;

  const handleChange = (evt) => {
    ctxValueOption.dispatch({
      type: "SET_VALUE_BY_TEXT",
      payload: { text: evt.target.value },
    });
    ctxValueLiteral.dispatch({
      type: "CHANGE",
      payload: { next: evt.target.value },
    });
    ctxReveal.dispatch({ type: "SHOW" });
  };

  const handleKeyDown = (evt) => {
    switch (evt.key) {
      case "ArrowDown":
        ctxValueOption.dispatch({ type: "MOVE_CURSOR_DOWN" });
        evt.preventDefault();
        break;

      case "ArrowUp":
        ctxValueOption.dispatch({ type: "MOVE_CURSOR_UP" });
        evt.preventDefault();
        break;

      case "Enter":
        ctxReveal.dispatch({ type: "TOGGLE" });
        break;

      default:
        break;
    }
  };

  const inputProps = {
    className: resolveClassName(className, "input"),
    onChange: handleChange,
    onClick: (evt) => {
      evt.stopPropagation();
    },
    onFocus: (evt) => {
      ctxReveal.dispatch({ type: "SHOW" });
    },
    onKeyDown: handleKeyDown,
    value: valueResolve,
  };

  return <input onChange={handleChange} {...inputProps} />;
};

const Template = (props) => {
  const ctxContainer = useContainer();
  const ctxReveal = useReveal();
  const ctxValueOption = useValueOption();

  const { item, index } = props;
  const { className } = ctxContainer.state;

  const textResolve = item.label || item.id;

  const handleClick = (evt) => {
    evt.stopPropagation();
    ctxReveal.dispatch({ type: "TOGGLE" });
    ctxValueOption.dispatch({
      type: "SET_VALUE_BY_ID",
      payload: { id: item.id },
    });
  };

  return (
    <option
      className={resolveClassName(className, "-option")}
      cursor={ctxValueOption.state.index == index ? "true" : null}
      onClick={handleClick}
      value={item?.value}
    >
      {textResolve}
    </option>
  );
};

export const Advisor = {
  filter,
  Controller,
  Template,
};

// -------------------------------------------------------------------------- //
