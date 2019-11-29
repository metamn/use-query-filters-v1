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
import InputSelect, {
  InputSelectDefaultProps,
  InputSelectPropTypes
} from "../InputSelect";

/**
 * Defines the prop types
 */
const propTypes = {
  type: PropTypes.oneOf(["text", "checkbox"]),
  queryParamType: PropTypes.string,
  inputText: PropTypes.shape(InputTextPropTypes),
  inputCheckbox: PropTypes.shape(InputCheckboxPropTypes),
  InputSelect: PropTypes.shape(InputSelectPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  type: "text",
  queryParamType: "StringParam",
  inputText: InputTextDefaultProps,
  inputCheckbox: InputCheckboxDefaultProps,
  InputSelect: InputSelectDefaultProps
};

/**
 * Displays the component
 */
const Input = props => {
  const { type, inputText, inputCheckbox, inputSelect, queryParamType } = props;

  let input = "";

  switch (type) {
    case "text":
      input = <InputText {...inputText} queryParamType={queryParamType} />;
      break;

    case "checkbox":
      input = (
        <InputCheckbox {...inputCheckbox} queryParamType={queryParamType} />
      );
      break;

    case "select":
      input = <InputSelect {...inputSelect} queryParamType={queryParamType} />;
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
