import React from "react";
import PropTypes from "prop-types";

import {
  QueryParamDefaultPropTypes,
  QueryParamPropTypes,
  InputPropTypes,
  InputDefaultProps
} from "../../hooks";

import InputText from "../InputText";
import InputCheckbox from "../InputCheckbox";
import InputSelect from "../InputSelect";
import InputRadio from "../InputRadio";
import InputRangeMultiHandle from "../InputRangeMultiHandle";

/**
 * Defines the prop types
 */
const propTypes = {
  title: PropTypes.string,
  queryParam: PropTypes.shape(QueryParamPropTypes),
  input: PropTypes.shape(InputPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  title: "Search",
  queryParam: QueryParamDefaultPropTypes,
  input: InputDefaultProps
};

/**
 * Displays the component
 */
const Filter = props => {
  const { title, input, queryParam } = props;
  const { type } = input;

  const params = { label: title, queryParam, ...input };

  let result = null;

  switch (type) {
    case "text":
      result = <InputText {...params} />;
      break;

    case "checkbox":
      result = <InputCheckbox {...params} />;
      break;

    case "select":
      result = <InputSelect {...params} />;
      break;

    case "radio":
      result = <InputRadio {...params} />;
      break;

    case "range-multi-handle":
      result = <InputRangeMultiHandle {...params} />;
      break;

    default:
      console.log("Invalid input type:", type);
      break;
  }

  return <div className="Filter">{result}</div>;
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
export { propTypes as FilterPropTypes, defaultProps as FilterDefaultProps };
