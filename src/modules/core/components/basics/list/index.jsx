import { useRepeat } from "@lib-react-bricks/src/modules/core/advanced";

// -------------------------------------------------------------------------- //
// Base component - to generate a gui for an item in an source data by default.
// -------------------------------------------------------------------------- //

const Container = (props) => {
  const { id, className, children } = props;

  return (
    <ul id={id} className={className} {...props}>
      {children}
    </ul>
  );
};

const Template = (props) => {
  const { item, ...attributes } = props;

  const ctx = useRepeat();

  return (
    <li id={item.id} name={item.label} {...attributes}>
      {item?.text}
    </li>
  );
};

export const List = { Container, Template };

// -------------------------------------------------------------------------- //
