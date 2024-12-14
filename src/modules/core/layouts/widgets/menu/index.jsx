import { useReveal } from "@lib-react-bricks/src/modules/core/advanced";
import { resolveClassName } from "@lib-react-bricks/src/modules/utils";

// -------------------------------------------------------------------------- //
// Widget - which displays desktop application menu.
// -------------------------------------------------------------------------- //

const Controller = (props) => {
  const ctxReveal = useReveal();
  const { caption, className, value } = props;

  const handleClick = (evt) => {
    evt.stopPropagation();
    ctxReveal.dispatch({ type: "TOGGLE" });
  };

  return (
    <button className={className} onClick={handleClick}>
      <span className={resolveClassName(className, "caption")}>
        {caption || value}
      </span>
      <span className={resolveClassName(className, "arrow")}>
        <i className={"fa-solid fa-chevron-down"}></i>
      </span>
      <span className={resolveClassName(className, "caption")} />
    </button>
  );
};

const Template = (props) => {
  const { item, index, ...attributes } = props;

  return item.datatype == "menu" ? (
    <item.Render caption={item.caption} data={item.props.data} />
  ) : (
    <item.Render label={item.caption} />
  );
};

export const Menu = { Controller, Template };

// -------------------------------------------------------------------------- //
