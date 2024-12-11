import {
  useContainer,
  useValueBase,
} from "@lib-react-bricks/src/modules/core/advanced";
import { resolveClassName } from "@lib-react-bricks/src/modules/core/utils";

// -------------------------------------------------------------------------- //
// Widget - which organizes content into sections, that can be collapsed/expanded.
// -------------------------------------------------------------------------- //

export const Template = (props) => {
  const ctxContainer = useContainer();
  const ctxValueBase = useValueBase();

  const { item, index } = props;
  const resolveText = item.content;

  const { className, mode } = ctxContainer.state;
  const { value } = ctxValueBase.state;

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
