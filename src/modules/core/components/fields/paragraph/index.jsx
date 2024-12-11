import { useCallback, useEffect, useRef, useState } from "react";
import { useValueLiteral } from "@lib-react-bricks/src/modules/core/advanced";

// -------------------------------------------------------------------------- //
// Field - to display and edit multiline text (paragraph).
// -------------------------------------------------------------------------- //

export const Paragraph = (props) => {
  const ctxValueLiteral = useValueLiteral();

  const { children, value, ...attributes } = props;

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
