import React, { useState } from "react";
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
      queryValue: PropTypes.string,
      isChecked: PropTypes.bool
    })
  ),
  defaultChangeHandler: PropTypes.func
};

/**
 * Defines the default props
 */
const defaultProps = {
  name: "input-checkbox",
  label: "Input checkbox",
  items: [
    {
      label: "Checkbox 1",
      queryValue: "checkbox-1",
      isChecked: false
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
  const { name, label, items } = props;

  /**
   * Uses a state to handle the checked status of items
   *
   * - The initial state has to be set up properly to avoid the warning: "A component is changing an uncontrolled input of type checkbox to be controlled"
   */
  const initialState = Array(items.length).fill(false);
  const [checkedItems, setCheckedItems] = useState(initialState);

  /**
   * Handles the checked value change
   */
  const handleChange = event => {
    const { target } = event;
    const { checked, id } = target;

    setCheckedItems([...checkedItems, (checkedItems[id] = checked)]);
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
                  checked={checkedItems[queryValue]}
                  onChange={event => handleChange(event)}
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
