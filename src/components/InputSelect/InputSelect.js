import React, { useContext } from "react";
import PropTypes from "prop-types";

import { InputSelectPropTypes, InputSelectDefaultProps } from "../../hooks";
import { QueryParamsContext } from "../Filters";

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
 */
const InputSelect = props => {
  const { label, name, items, defaultChangeHandler } = props;

  /**
   * Loads the global query params and the setter function
   */
  const { queryParams, setQueryParams } = useContext(QueryParamsContext);

  /**
   * Loads the value of the query param
   */
  const queryParam = queryParams[name] || "";

  /**
   * Sets up the holder for the new query param value
   *
   */
  let newQueryParam = {};

  /**
   * Handles the checked value change
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
    <div className="InputSelect">
      <label htmlFor={name}>{label}</label>

      <select
        name={name}
        value={queryParam}
        multiple={false}
        onChange={handleChange}
      >
        {items &&
          items.map &&
          items.map((item, index) => {
            const { label, queryValue } = item;

            return (
              <option key={index} value={queryValue}>
                {label}
              </option>
            );
          })}
      </select>
    </div>
  );
};

InputSelect.propTypes = InputSelectPropTypes;
InputSelect.defaultProps = InputSelectDefaultProps;

export default InputSelect;
