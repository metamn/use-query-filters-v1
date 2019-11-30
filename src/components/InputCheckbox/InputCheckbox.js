import React, { useContext } from "react";
import PropTypes from "prop-types";

import { InputCheckboxPropTypes, InputCheckboxDefaultProps } from "../../hooks";

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
      queryValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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
   *
   * // TODO this will still give a warning "A component is changing an uncontrolled input of type checkbox to be controlled." - once, then will go away
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
      : queryParam.filter(item => item !== idTyped);

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

InputCheckbox.propTypes = InputCheckboxPropTypes;
InputCheckbox.defaultProps = InputCheckboxDefaultProps;

export default InputCheckbox;
