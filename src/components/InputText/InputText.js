import React, { useState, useContext } from "react";
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
   * The value of the input box
   */
  const inputValue = queryParams[name];

  /**
   * Handles the input value change
   */
  const handleChange = event => {
    const { target } = event;
    const { value } = target;

    let queryParam = {};
    queryParam[name] = value;

    setQueryParams(queryParam);
  };

  return (
    <div className="InputText">
      <label htmlFor={name}>{label}</label>

      <input
        type="text"
        name={name}
        value={inputValue}
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
