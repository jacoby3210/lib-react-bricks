import { useEffect } from "react";
import { useValueDigital } from "/src/modules/core/advanced";
import { Range, Swing } from "/src/modules/core/components";
import { resolveAxis } from "/src/modules/utils";
import { toValue, valueToPosition } from "./utils";
// -------------------------------------------------------------------------- //
// Layout Manager - to scroll the content in the element.
// -------------------------------------------------------------------------- //

export const Scroll = (props) => {
  const { className, axis, mode, target } = props;

  const ctxValueDigital = useValueDigital();
  const valueResolve = ctxValueDigital.state.value;

  const axisResolve = resolveAxis(axis);

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
