/**
 * Event handlers associated to the inputs
 */

/**
 * Handles events associated to inputs
 */
const handleChange = props => {
  const { inputType, name, event, set } = props;

  let newQueryParam = {};

  switch (inputType) {
    case "select":
    case "radio":
    case "text":
      const { target } = event;
      const { value } = target;

      newQueryParam[name] = value;

      set(newQueryParam);
      break;
    default:
  }
};

/**
 * Handles events associated to a text input
 */
const inputSelectHandleChange = props => {
  return handleChange({ ...props, inputType: "select" });
};

/**
 * Handles events associated to a radio input
 */
const inputRadioHandleChange = props => {
  return handleChange({ ...props, inputType: "radio" });
};

/**
 * Handles events associated to a text input
 */
const inputTextHandleChange = props => {
  return handleChange({ ...props, inputType: "text" });
};

export {
  inputTextHandleChange,
  inputRadioHandleChange,
  inputSelectHandleChange
};
