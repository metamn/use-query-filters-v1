import React, { useContext } from "react";
import PropTypes from "prop-types";

import { QueryParamsContext } from "../Filters";

/**
 * Defines the prop types
 */
const propTypes = {
  queryParamType: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      queryValue: PropTypes.string
    })
  ),
  defaultChangeHandler: PropTypes.func
};

/**
 * Defines the default props
 */
const defaultProps = {
  queryParamType: "DelimitedNumericArrayParam",
  name: "input-checkbox",
  label: "Input checkbox",
  items: [
    {
      label: "Checkbox 1",
      queryValue: "checkbox-1"
    }
  ],
  defaultChangeHandler: () => {
    console.log("InputCheckbox handleChange");
  }
};

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
 * @see https://reactjs.org/docs/forms.html#handling-multiple-inputs
 */
const InputCheckbox = props => {
  const { queryParamType, name, label, items } = props;

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
   */
  let newQueryParam = {};

  /**
   * Handles the checked value change
   */
  const handleChange = event => {
    const { target } = event;
    const { checked, id } = target;

    /**
     * Defines the type of the new query param value
     *
     * - on DelimitedNumericArrayParam it must be integer, otherwise string
     */
    const idTyped =
      queryParamType === "DelimitedNumericArrayParam" ? parseInt(id) : id;

    /**
     * Sets the new query param value
     */
    newQueryParam[name] = checked
      ? [...queryParam, idTyped]
      : queryParam.filter(item => item !== id);

    console.log("nqp:", newQueryParam);

    setQueryParams(newQueryParam);
  };

  return (
    <div className="InputCheckbox">
      <div className="Label">{label}</div>
      <div className="Items">
        {items &&
          items.map((item, index) => {
            const { label: itemLabel, queryValue } = item;

            return (
              <div className="Checkbox" key={index}>
                <input
                  type="checkbox"
                  id={queryValue}
                  name={name}
                  checked={queryParam.find(item => item === queryValue)}
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

InputCheckbox.propTypes = propTypes;
InputCheckbox.defaultProps = defaultProps;

export default InputCheckbox;
export {
  propTypes as InputCheckboxPropTypes,
  defaultProps as InputCheckboxDefaultProps
};
