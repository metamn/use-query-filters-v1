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
  label: "Select",
  name: "select",
  items: [
    {
      label: "Select 1",
      queryValue: "select-1"
    },
    {
      label: "Select 2",
      queryValue: "select-2"
    }
  ],
  defaultChangeHandler: () => {
    console.log("InputSelect handleChange");
  }
};

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
  const queryParam = queryParams[name] || [];

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
      <label for={name}>{label}</label>

      <select name={name} value={queryParam} onChange={handleChange}>
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

InputSelect.propTypes = propTypes;
InputSelect.defaultProps = defaultProps;

export default InputSelect;
export {
  propTypes as InputSelectPropTypes,
  defaultProps as InputSelectDefaultProps
};
