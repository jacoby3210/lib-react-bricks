import { useValueDigital } from "/src/modules/core/advanced";

// -------------------------------------------------------------------------- //
// Control - to track the user's clicks and display the total value.
// -------------------------------------------------------------------------- //

export const Clicker = (props) => {
  const { id, className, onChange = (e) => {} } = props;

  const ctxValueDigital = useValueDigital();

  const handleClick = (e) => {
    onChange(e);
    ctxValueDigital.dispatch({ type: "MODIFY" });
  };

  return (
    <div
      id={id}
      className={className}
      data-cost={ctxValueDigital.state.step}
      data-value={ctxValueDigital.state.value}
      onClick={handleClick}
    >
      {ctxValueDigital.state.value}
    </div>
  );
};

// -------------------------------------------------------------------------- //
