/**
 * Everything related to managing the inputs associated to filters
 */

import PropTypes from "prop-types";
import { SupportedFilters, SupportedQueryValues } from "./Filters";

/**
 * Defines the common props for all inputs
 */
const CommonInputPropTypes = {
  type: PropTypes.oneOf(SupportedFilters.map(item => item.filter)),
  name: PropTypes.string,
  value: SupportedQueryValues,
  changeHandler: PropTypes.func
};

/**
 * Defines the default values for the common props
 */
const CommonInputDefaultProps = {
  type: "text",
  name: "query",
  value: "",
  handleChange: () => {
    console.log("handleChange");
  }
};

/**
 * Defines the checkbox input prop types
 */
const InputCheckboxPropTypes = {
  ...CommonInputPropTypes
};

/**
 * Defines the default props for the checkbox input
 */
const InputCheckboxDefaultProps = {
  ...CommonInputDefaultProps
};

/**
 * Defines the text input prop types
 */
const InputTextPropTypes = {
  ...CommonInputPropTypes
};

/**
 * Defines the default props for the text input
 */
const InputTextDefaultProps = {
  ...CommonInputDefaultProps
};

export {
  InputTextPropTypes,
  InputTextDefaultProps,
  InputCheckboxPropTypes,
  InputCheckboxDefaultProps
};
