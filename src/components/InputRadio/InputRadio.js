import React, { useContext } from "react";
import PropTypes from "prop-types";

import { QueryParamsContext } from "../Filters";

/**
 * Defines the prop types
 */
const propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      queryValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  defaultChangeHandler: PropTypes.func
};

/**
 * Defines the default props
 */
const defaultProps = {
  label: "Radio",
  name: "radio",
  items: [
    {
      label: "Radio 1",
      queryValue: "radio-1"
    },
    {
      label: "Radio 2",
      queryValue: "radio-2"
    }
  ],
  defaultChangeHandler: () => {
    console.log("InputRadio handleChange");
  }
};

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
 */
const InputRadio = props => {
  const { label, name, items } = props;

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
            const { label: itemLabel, queryValue } = item;

            return (
              <div className="Radio" key={index}>
                <input
                  type="radio"
                  id={queryValue}
                  name={name}
                  checked={queryParam === queryValue}
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

InputRadio.propTypes = propTypes;
InputRadio.defaultProps = defaultProps;

export default InputRadio;
export {
  propTypes as InputRadioPropTypes,
  defaultProps as InputRadioDefaultProps
};
