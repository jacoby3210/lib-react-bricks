import { resolveClassName } from "/src/modules/utils";
import { useValueBase } from "/src/modules/core/advanced";
import { useContainer, useValueOption } from "/src/modules/core/advanced";

// -------------------------------------------------------------------------- //
// Layout Manager -to switch the displayed tree contents based on the node path.
// -------------------------------------------------------------------------- //

export const Template = ({ index, item }) => {
  const ctxContainer = useContainer();
  const { className, delimiter } = ctxContainer.state;

  const ctxValueBase = useValueBase();

  const handleClick = (e) => {
    const { value } = ctxValueBase.state;
    const elements = value.split(delimiter).filter((el) => el.length != 0);
    const path = elements.slice(0, Math.abs(index + 1)).join(delimiter);
    ctxValueBase.dispatch({ type: "CHANGE", payload: { next: path } });
  };

  return (
    <button key={index} onClick={handleClick}>
      <span className={resolveClassName(className, "element")}>{item}</span>
    </button>
  );
};

export const Path = {
  data: ({ value }) => value.split("\\").filter((el) => el.length != 0),
  delimiter: "\\",
  Template,
};

// -------------------------------------------------------------------------- //
