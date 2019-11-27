import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  type: PropTypes.oneOf(["text", "checkbox"]),
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
  type: "text",
  name: "q",
  label: "Search",
  items: [
    {
      label: "Item 1",
      queryValue: "item-1"
    }
  ]
};

/**
 * Displays a text input
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
 */
const TextInput = props => {
  const { name, label } = props;

  return (
    <div className="TextInput">
      <label htmlFor={name}>{label}</label>

      <input type="text" id="name" name={name} />
    </div>
  );
};

/**
 * Displays a checkbox input
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
 */
const CheckboxInput = props => {
  const { name, label, items } = props;

  return (
    <div className="CheckboxInput">
      <div className="Label">{label}</div>
      <div className="Items">
        {items &&
          items.map((item, index) => {
            const { label: itemLabel } = item;

            return (
              <>
                <input type="checkbox" id="scales" name={name} checked />
                <label htmlFor={name}>{itemLabel}</label>
              </>
            );
          })}
      </div>
    </div>
  );
};

/**
 * Displays the component
 */
const Input = props => {
  const { type } = props;

  let input = "";

  switch (type) {
    case "text":
      input = TextInput(props);
      break;

    case "checkbox":
      input = CheckboxInput(props);
      break;

    default:
      input = "Invalid input type";
      break;
  }

  return <div className="Input">{input}</div>;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
export { propTypes as InputPropTypes, defaultProps as InputDefaultProps };
