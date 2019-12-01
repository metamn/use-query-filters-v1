/**
 * Event handlers associated to the inputs
 */

/**
 * Handles events associated to a common set of inputs (text, radio, select ...)
 */
const commonHandleChange = props => {
  const { name, event, set } = props;
  const { target } = event;
  const { value } = target;

  let newQueryParam = {};
  newQueryParam[name] = value;

  set(newQueryParam);
};

/**
 * Handles events associated to a text input
 */
const inputSelectHandleChange = props => {
  return commonHandleChange(props);
};

/**
 * Handles events associated to a radio input
 */
const inputRadioHandleChange = props => {
  return commonHandleChange(props);
};

/**
 * Handles events associated to a text input
 */
const inputTextHandleChange = props => {
  return commonHandleChange(props);
};

export {
  inputTextHandleChange,
  inputRadioHandleChange,
  inputSelectHandleChange
};
