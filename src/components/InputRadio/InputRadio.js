import React, { useContext } from "react";
import PropTypes from "prop-types";

import { InputRadioPropTypes, InputRadioDefaultProps } from "../../hooks";
import { QueryParamsContext } from "../Filters";

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
 */
const InputRadio = props => {
  const { label, queryParam, items } = props;
  const { name } = queryParam;

  /**
   * Loads the global query params and the setter function
   */
  const { queryParams, setQueryParams } = useContext(QueryParamsContext);

  /**
   * Loads the value of the query param
   */
  const currentValue = queryParams[name] || "";

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
    const { id } = target;

    /**
     * Sets the new query param value
     */
    newQueryParam[name] = id;

    setQueryParams(newQueryParam);
  };

  return (
    <div className="InputRadio">
      <div className="Label">{label}</div>

      <div className="Items">
        {items &&
          items.map &&
          items.map((item, index) => {
            const { label: itemLabel, value } = item;

            return (
              <div className="Radio" key={index}>
                <input
                  type="radio"
                  id={value}
                  name={name}
                  checked={currentValue === value}
                  onChange={handleChange}
                />
                <label htmlFor={name}>{itemLabel}</label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

InputRadio.propTypes = InputRadioPropTypes;
InputRadio.defaultProps = InputRadioDefaultProps;

export default InputRadio;
