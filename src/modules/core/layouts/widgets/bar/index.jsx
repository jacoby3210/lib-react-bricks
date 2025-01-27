import { useContainer, useValueBase } from "/src/modules/core/advanced";
import { resolveClassName } from "/src/modules/utils";

// -------------------------------------------------------------------------- //
// Widget - which output multiple radio buttons as a single component.
// -------------------------------------------------------------------------- //

const Template = (props) => {
  const { index, item } = props;

  const ctxContainer = useContainer();
  const { name, className } = ctxContainer.state;

  const ctxValueBase = useValueBase();
  const { value } = ctxValueBase.state;

  const handleChange = (e) => {
    ctxValueBase.dispatch({
      type: "CHANGE",
      payload: { next: e.target.value },
    });
  };

  return (
    <label className={resolveClassName(className, "option")} key={index}>
      <input
        className={resolveClassName(className, "input")}
        checked={item.id == value}
        name={name}
        type='radio'
        value={item.id}
        onChange={handleChange}
      />
      {item.label}
    </label>
  );
};

export const Bar = { Template };

// -------------------------------------------------------------------------- //
