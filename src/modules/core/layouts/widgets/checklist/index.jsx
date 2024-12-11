import {
  useContainer,
  useValueBase,
} from "@lib-react-bricks/src/modules/core/advanced";
import { resolveClassName } from "@lib-react-bricks/src/modules/core/utils";

// -------------------------------------------------------------------------- //
// Widget - which displays a tag cloud, with support for adding and deleting tags.
// -------------------------------------------------------------------------- //

const Template = (props) => {
  const ctxContainer = useContainer();
  const ctxValueBase = useValueBase();

  const { item, index, ...attributes } = props;

  const { className, mode } = ctxContainer.state;
  const { value } = ctxValueBase.state;

  const resolveText = item.text;
  const resolveValue = value.includes(item.id);

  const handleChange = (evt) => {
    const next = resolveValue
      ? value.filter((i) => i !== item.id)
      : [...value, item.id];
    ctxValueBase.dispatch({ type: "CHANGE", payload: { next } });
  };

  return (
    <li className={className} value={resolveValue} {...attributes}>
      <input
        id={item.label}
        className={resolveClassName(className, "checkbox")}
        checked={resolveValue}
        type='checkbox'
        onChange={handleChange}
      />
      <label
        className={resolveClassName(className, "summary")}
        htmlFor={item.label}
      >
        {resolveText}
      </label>
    </li>
  );
};

export const CheckList = { Template };

// -------------------------------------------------------------------------- //
