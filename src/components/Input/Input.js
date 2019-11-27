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
  name: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      queryValue: PropTypes.string
    })
  )
};

/**
 * Defines the default props
 */
const defaultProps = {
  type: "text",
  name: "q",
  label: "Search",
  items: [
    {
      label: "Item 1",
      queryValue: "item-1"
    }
  ]
};

/**
 * Displays the component
 */
const Input = props => {
  const { type } = props;

  let input = "";

  switch (type) {
    case "text":
      input = <InputText {...props} />;
      break;

    case "checkbox":
      input = <InputCheckbox {...props} />;
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
