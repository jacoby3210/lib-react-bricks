import { useEffect } from "react";
import { useValueDigital } from "@lib-react-bricks/src/modules/core/advanced";
import { Range, Swing } from "@lib-react-bricks/src/modules/core/components";
import { resolveAxis } from "@lib-react-bricks/src/modules/utils";
import { toValue, valueToPosition } from "./utils";
// -------------------------------------------------------------------------- //
// Layout Manager - to scroll the content in the element.
// -------------------------------------------------------------------------- //

export const Scroll = (props) => {
  const ctxValueDigital = useValueDigital();

  const { className, axis, mode, target } = props;

  const axisResolve = resolveAxis(axis);
  const valueResolve = ctxValueDigital.state.value;

  useEffect(() => {
    const area = target?.current;
    if (!area) return;
    const scrollParams = { top: area.scrollTop, left: area.scrollLeft, mode };
    scrollParams[axisResolve.scrollDirect] = valueToPosition(
      area,
      axisResolve,
      valueResolve
    );
    area.scrollTo(scrollParams);
  }, [valueResolve]);

  useEffect(() => {
    const handleScroll = () => {
      const next = toValue(target.current, axisResolve);
      ctxValueDigital.dispatch({ type: "CHANGE", payload: { next } });
    };

    const area = target.current;
    area.addEventListener("scroll", handleScroll);

    return () => {
      area.removeEventListener("scroll", handleScroll);
    };
  }, [target, axisResolve]);

  return (
    <>
      <Range {...props} />
      <Swing {...props} />
    </>
  );
};

// -------------------------------------------------------------------------- //
