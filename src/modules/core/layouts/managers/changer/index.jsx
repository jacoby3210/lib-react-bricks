import { useContainer, useValueOption } from "/src/modules/core/advanced";
import { resolveClassName } from "/src/modules/utils";

// -------------------------------------------------------------------------- //
// Layout - to change of displayed content in the view by special id.
// -------------------------------------------------------------------------- //

const Template = (props) => {
  const { item, index } = props;

  const ctxContainer = useContainer();
  const { className } = ctxContainer.state;

  const ctxValueBase = useValueOption();

  const resolveText = item.caption;

  const handleClick = (evt) => {
    ctxValueBase.dispatch({
      type: "SET_VALUE_BY_ID",
      payload: { id: item.id },
    });
  };

  return (
    <button
      className={resolveClassName(className, "button")}
      onClick={handleClick}
      {...item}
    >
      {resolveText}
    </button>
  );
};

export const Changer = { Template };

// -------------------------------------------------------------------------- //
