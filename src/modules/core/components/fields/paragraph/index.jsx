import { useValueLiteral } from "/src/modules/core/advanced";

// -------------------------------------------------------------------------- //
// Field - to display and edit multiline text (paragraph).
// -------------------------------------------------------------------------- //

export const Paragraph = (props) => {
  const { id, children, value, ...attributes } = props;

  const ctxValueLiteral = useValueLiteral();

  const handleChange = (evt) => {
    ctxValueLiteral.dispatch({
      type: "CHANGE",
      payload: { next: evt.target.value },
    });
  };

  const paragraphProps = {
    ...attributes,
    onChange: handleChange,
    value: ctxValueLiteral.state.value,
  };

  return <textarea {...paragraphProps} />;
};

// -------------------------------------------------------------------------- //
