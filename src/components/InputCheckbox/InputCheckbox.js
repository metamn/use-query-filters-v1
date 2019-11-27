import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      queryValue: PropTypes.string
    })
  )
};

/**
 * Defines the default props
 */
const defaultProps = {
  name: "input-checkbox",
  label: "Input checkbox",
  items: [
    {
      label: "Chekcbox 1",
      queryValue: "checkbox-1"
    }
  ]
};

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
 */
const InputCheckbox = props => {
  const { name, label, items } = props;

  return (
    <div className="InputCheckbox">
      <div className="Label">{label}</div>
      <div className="Items">
        {items &&
          items.map((item, index) => {
            const { label: itemLabel } = item;

            return (
              <div className="Checkbox" key={index}>
                <input type="checkbox" id="scales" name={name} checked />
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
