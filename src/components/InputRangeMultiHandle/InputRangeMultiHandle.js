import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { QueryParamsContext } from "../Filters";

/**
 * Defines the prop types
 */
const propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number
  })
};

/**
 * Defines the default props
 */
const defaultProps = {
  label: "Range with multiple handles",
  name: "range-multi-handle",
  min: 0,
  max: 5,
  value: PropTypes.shape({
    min: 1,
    max: 4
  })
};

/**
 * Displays the component
 *
 * - There is no such a standard HTML element so a plugin is used
 *
 * @see https://github.com/davidchin/react-input-range
 */
const InputRangeMultiHandle = props => {
  const { label, name, min, max, value } = props;

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
   * Sets up the min/max initial values
   */
  let initialValue = value;

  if (queryParam.length !== 0) {
    initialValue = queryParam.reduce((accumulator, currentValue, index) => {
      accumulator[Object.keys(value)[index]] = currentValue;
      return accumulator;
    }, {});
  }

  /**
   * Saves the current slider values into a state to update them instantly on user interaction
   */
  const [currentValue, setCurrentValue] = useState(initialValue);

  /**
   * Sets the new query param value
   */
  useEffect(() => {
    newQueryParam[name] = Object.values(currentValue);
  }, [currentValue, name, newQueryParam]);

  return (
    <div className="InputRangeMultiHandle">
      <div className="Label">{label}</div>
      <InputRange
        className="InputRange"
        maxValue={max}
        minValue={min}
        value={currentValue}
        onChange={currentValue => setCurrentValue(currentValue)}
        onChangeComplete={() => setQueryParams(newQueryParam)}
      />
    </div>
  );
};

InputRangeMultiHandle.propTypes = propTypes;
InputRangeMultiHandle.defaultProps = defaultProps;

export default InputRangeMultiHandle;
export {
  propTypes as InputRangeMultiHandlePropTypes,
  defaultProps as InputRangeMultiHandleDefaultProps
};
