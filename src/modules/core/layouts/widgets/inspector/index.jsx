import {
  useContainer,
  useValueBase,
} from "@lib-react-bricks/src/modules/core/advanced";
import { resolveClassName } from "@lib-react-bricks/src/modules/core/utils";

// -------------------------------------------------------------------------- //
//  Widget - which creates a UI for viewing / editing an object.
// -------------------------------------------------------------------------- //

const Container = ({ id, children, className }) => (
  <div id={id} className={className}>
    {children}
  </div>
);

export const Template = (props) => {
  const ctxContainer = useContainer();
  const ctxValueBase = useValueBase();

  const { item } = props;

  const { className } = ctxContainer.state;
  const { value } = ctxValueBase.state;

  const resolveText = item.caption;
  const resolveValue = value[item.caption];

  const valueProps = Array.isArray(resolveValue)
    ? {
        data: resolveValue.map((item) => item.value),
      }
    : {
        data: item.props?.data,
        value: resolveValue,
      };

  return (
    <div className={className} name={item.caption} type={item.datatype}>
      <label className={resolveClassName(className, "label")}>
        {resolveText}
      </label>
      <item.Render {...item.props} {...valueProps} />
    </div>
  );
};

export const Inspector = {
  Container,
  Template,
};

// -------------------------------------------------------------------------- //
