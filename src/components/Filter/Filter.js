import React from "react";
import PropTypes from "prop-types";

import { QueryParamDefaultPropTypes, QueryParamPropTypes } from "../../hooks";
import Input, { InputDefaultProps, InputPropTypes } from "../Input";

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
  const { title, queryParam, input } = props;
  const { type } = input;
  const { name } = queryParam;

  let inputProps = {
    type: type,
    name: name,
    label: title
  };

  return (
    <div className="Filter">
      <Input {...inputProps} />
    </div>
  );
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
export { propTypes as FilterPropTypes, defaultProps as FilterDefaultProps };
