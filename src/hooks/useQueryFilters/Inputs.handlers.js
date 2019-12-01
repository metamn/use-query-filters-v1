/**
 * Event handlers associated to the inputs
 */

/**
 * Handles events associated to a checkbox input
 */
const inputCheckboxHandleChange = props => {
  const { name, event, set, queryParamType, currentValue } = props;
  const { target } = event;
  const { checked, id } = target;

  /**
   * Defines the type of the new query param value
   *
   * - on DelimitedNumericArrayParam it must be integer, otherwise string
   */
  const idTyped =
    queryParamType === "DelimitedNumericArrayParam" ? parseInt(id) : id;

  /**
   * Sets the new query param value
   */
  let newQueryParam = {};
  newQueryParam[name] = checked
    ? [...currentValue, idTyped]
    : currentValue.filter(item => item !== idTyped);

  set(newQueryParam);
};

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
  inputSelectHandleChange,
  inputCheckboxHandleChange
};
