import React from "react";
import PropTypes from "prop-types";

import InputText, {
  InputTextDefaultProps,
  InputTextPropTypes
} from "../InputText";
import InputCheckbox, {
  InputCheckboxDefaultProps,
  InputCheckboxPropTypes
} from "../InputCheckbox";

/**
 * Defines the prop types
 */
const propTypes = {
  type: PropTypes.oneOf(["text", "checkbox"]),
  inputText: PropTypes.shape(InputTextPropTypes),
  inputCheckbox: PropTypes.shape(InputCheckboxPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  type: "text",
  inputText: InputTextDefaultProps,
  inputCheckbox: InputCheckboxDefaultProps
};

/**
 * Displays the component
 */
const Input = props => {
  const { type, inputText, inputCheckbox } = props;

  let input = "";

  switch (type) {
    case "text":
      input = <InputText {...inputText} />;
      break;

    case "checkbox":
      input = <InputCheckbox {...inputCheckbox} />;
      break;

    default:
      input = "Invalid input type";
      break;
  }

  return <div className="Input">{input}</div>;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
export { propTypes as InputPropTypes, defaultProps as InputDefaultProps };
