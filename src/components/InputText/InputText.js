import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  name: "q",
  label: "Search"
};

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
 */
const InputText = props => {
  const { name, label } = props;

  return (
    <div className="InputText">
      <label htmlFor={name}>{label}</label>

      <input type="text" id="name" name={name} />
    </div>
  );
};

InputText.propTypes = propTypes;
InputText.defaultProps = defaultProps;

export default InputText;
export {
  propTypes as InputTextPropTypes,
  defaultProps as InputTextDefaultProps
};
