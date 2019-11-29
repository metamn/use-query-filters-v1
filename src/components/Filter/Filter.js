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
  const { type, defaultValue, items, min, max, value } = input;
  const { name, type: queryParamType } = queryParam;

  let commonProps = {
    type: type, // TODO rename to inputTpe across the components
    queryParamType: queryParamType
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

    case "select":
      specificProps = {
        inputSelect: {
          name: name,
          label: title,
          items: items
        }
      };
      break;

    case "radio":
      specificProps = {
        inputRadio: {
          name: name,
          label: title,
          items: items
        }
      };
      break;

    case "range-multi-handle":
      specificProps = {
        inputRangeMultiHandle: {
          name: name,
          label: title,
          min: min,
          max: max,
          value: value
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
