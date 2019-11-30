import React, { useContext } from "react";

import { InputTextPropTypes, InputTextDefaultProps } from "../../hooks";

import { QueryParamsContext } from "../Filters";

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
 * @see https://reactjs.org/docs/forms.html
 */
const InputText = props => {
  const { name, label, value } = props;

  /**
   * Loads the global query params and the setter function
   */
  const { queryParams, setQueryParams } = useContext(QueryParamsContext);

  /**
   * Loads the value of the query param
   */
  const queryParam = queryParams[name] || value;

  /**
   * Sets up the holder for the new query param value
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

InputText.propTypes = InputTextPropTypes;
InputText.defaultProps = InputTextDefaultProps;

export default InputText;
