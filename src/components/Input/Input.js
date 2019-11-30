import React from "react";
import PropTypes from "prop-types";

import InputText from "../InputText";
import { InputTextPropTypes, InputTextDefaultProps } from "../../hooks";

import InputCheckbox, {
  InputCheckboxDefaultProps,
  InputCheckboxPropTypes
} from "../InputCheckbox";
import InputSelect, {
  InputSelectDefaultProps,
  InputSelectPropTypes
} from "../InputSelect";
import InputRadio, {
  InputRadioPropTypes,
  InputRadioDefaultProps
} from "../InputRadio";
import InputRangeMultiHandle, {
  InputRangeMultiHandleDefaultProps,
  InputRangeMultiHandlePropTypes
} from "../InputRangeMultiHandle";

/**
 * Defines the prop types
 */
const propTypes = {
  type: PropTypes.oneOf([
    "text",
    "checkbox",
    "radio",
    "select",
    "range-multi-handle"
  ]),
  queryParamType: PropTypes.string,
  inputText: PropTypes.shape(InputTextPropTypes),
  inputCheckbox: PropTypes.shape(InputCheckboxPropTypes),
  inputSelect: PropTypes.shape(InputSelectPropTypes),
  inputRadio: PropTypes.shape(InputRadioPropTypes),
  inputRangeMultiHandle: PropTypes.shape(InputRangeMultiHandlePropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  type: "text",
  queryParamType: "StringParam",
  inputText: InputTextDefaultProps,
  inputCheckbox: InputCheckboxDefaultProps,
  inputSelect: InputSelectDefaultProps,
  inputRadio: InputRadioDefaultProps,
  inputRangeMultiHandle: InputRangeMultiHandleDefaultProps
};

/**
 * Displays the component
 */
const Input = props => {
  const {
    type,
    inputText,
    inputCheckbox,
    inputSelect,
    inputRadio,
    inputRangeMultiHandle,
    queryParamType
  } = props;

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

    case "radio":
      input = <InputRadio {...inputRadio} queryParamType={queryParamType} />;
      break;

    case "range-multi-handle":
      input = (
        <InputRangeMultiHandle
          {...inputRangeMultiHandle}
          queryParamType={queryParamType}
        />
      );
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
