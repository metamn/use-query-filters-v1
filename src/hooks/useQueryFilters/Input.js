/**
 * Everything related to managing the inputs associated to filters
 */

import PropTypes from "prop-types";
import { SupportedFilters } from "./Filters";

/**
 * Defines the common props for all inputs
 */
const CommonInputPropTypes = {
  type: PropTypes.oneOf(SupportedFilters.map(item => item.filter)),
  name: PropTypes.string,
  /**
   * NOTE: These values depend on `SupportedFilters`
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changeHandler: PropTypes.func
};

/**
 * Defines the default values for the common props
 */
const CommonInputDefaultProps = {
  type: "text",
  name: "query",
  value: "",
  changeHandler: () => {
    console.log("changeHandler");
  }
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

export { InputTextPropTypes, InputTextDefaultProps };
