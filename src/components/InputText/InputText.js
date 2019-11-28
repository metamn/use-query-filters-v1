import React, { useContext } from "react";
import PropTypes from "prop-types";

import { QueryParamsContext } from "../Filters";

/**
 * Defines the prop types
 */
const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  defaultChangeHandler: PropTypes.func
};

/**
 * Defines the default props
 */
const defaultProps = {
  name: "input-text",
  label: "Input text",
  defaultValue: "Default value",
  defaultChangeHandler: () => {
    console.log("InputText handleChange");
  }
};

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
 * @see https://reactjs.org/docs/forms.html
 */
const InputText = props => {
  const { name, label } = props;

  /**
   * Loads the global query params and the setter function
   */
  const { queryParams, setQueryParams } = useContext(QueryParamsContext);

  /**
   * Loads the value of the query param
   */
  const queryParam = queryParams[name];

  /**
   * Sets up the holder for new query param value
   */
  let newQueryParam = {};

  /**
   * Handles the input value change
   */
  const handleChange = event => {
    const { target } = event;
    const { value } = target;

    /**
     * Sets the new query param value
     */
    newQueryParam[name] = value;

    setQueryParams(newQueryParam);
  };

  return (
    <div className="InputText">
      <label htmlFor={name}>{label}</label>

      <input
        type="text"
        name={name}
        value={queryParam}
        onChange={handleChange}
      />
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
