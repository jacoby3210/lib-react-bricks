import {
  useContainer,
  useValueBase,
} from "@lib-react-bricks/src/modules/core/advanced";
import { resolveClassName } from "@lib-react-bricks/src/modules/utils";

// -------------------------------------------------------------------------- //
// Widget - which organizes content into sections, that can be collapsed/expanded.
// -------------------------------------------------------------------------- //

export const Template = (props) => {
  const { item, index } = props;

  const ctxContainer = useContainer();
  const { className, mode } = ctxContainer.state;

  const ctxValueBase = useValueBase();
  const { value } = ctxValueBase.state;

  const resolveText = item.content;

  const handleToggle = (evt) => {
    const getNextValue = () => {
      const isSelected = value.includes(item.id);
      if (isSelected) {
        return mode === "single" ? [] : value.filter((i) => i !== item.id);
      }
      return mode === "single" ? [item.id] : [...value, item.id];
    };

    ctxValueBase.dispatch({
      type: "CHANGE",
      payload: { next: getNextValue() },
    });

    evt.stopPropagation();
  };

  return (
    <details
      className={resolveClassName(className, "details")}
      open={value.includes(item.id)}
    >
      <summary
        className={resolveClassName(className, "summary")}
        onClick={(evt) => handleToggle(evt, index)}
      >
        {resolveText}
      </summary>
      <p className={resolveClassName(className, "paragraph")}>{item.content}</p>
    </details>
  );
};

export const Accordion = { Template };

// -------------------------------------------------------------------------- //
