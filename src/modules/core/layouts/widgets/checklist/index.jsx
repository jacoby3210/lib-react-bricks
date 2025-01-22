import { useContainer, useValueBase } from "/src/modules/core/advanced";
import { resolveClassName } from "/src/modules/utils";

// -------------------------------------------------------------------------- //
// Widget - which displays a tag cloud, with support for adding and deleting tags.
// -------------------------------------------------------------------------- //

const CheckListItem = ({ className, item, handleChange, text, value }) => {
  return (
    <label className={className} value={value}>
      <input
        id={item.label}
        className={resolveClassName(className, "input")}
        checked={value}
        type='checkbox'
        onChange={handleChange}
      />
      <img className={resolveClassName(className, "image")} src={item?.icon} />
      <label
        className={resolveClassName(className, "summary")}
        htmlFor={item.label}
      >
        {text}
      </label>
      <span></span>
    </label>
  );
};

const Template = (props) => {
  const { item, index, ...attributes } = props;

  const ctxContainer = useContainer();
  const { className, mode } = ctxContainer.state;

  const ctxValueBase = useValueBase();
  const { value } = ctxValueBase.state;

  const resolveText = item.text;
  const resolveValue = value.includes(item.id);

  const handleChange = (evt) => {
    const next = resolveValue
      ? value.filter((i) => i !== item.id)
      : [...value, item.id];
    ctxValueBase.dispatch({ type: "CHANGE", payload: { next } });
  };

  const updateProps = {
    className: resolveClassName(className, "item"),
    item,
    handleChange,
    text: resolveText,
    value: resolveValue,
  };
  return <CheckListItem {...updateProps} />;
};

export const CheckList = { Template };

// -------------------------------------------------------------------------- //
