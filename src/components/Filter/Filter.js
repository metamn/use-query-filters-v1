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
  const { type, defaultValue, items } = input;
  const { name } = queryParam;

  let commonProps = {
    type: type
  };

  let specificProps = {};

  switch (type) {
    case "text":
      specificProps = {
        inputText: {
          name: name,
          label: title,
          defaultValue: defaultValue
        }
      };
      break;

    case "checkbox":
      specificProps = {
        inputCheckbox: {
          name: name,
          label: title,
          items: items
        }
      };
      break;

    default:
      break;
  }

  return (
    <div className="Filter">
      <Input {...commonProps} {...specificProps} />
    </div>
  );
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
export { propTypes as FilterPropTypes, defaultProps as FilterDefaultProps };
