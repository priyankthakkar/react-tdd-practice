import checkPropTypes from "check-prop-types";

/**
 * A util function to find elements within ShallowWrapper dom by the value of
 * data-test attribute.
 *
 * @function
 * @name findByTestAttribute
 *
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 *
 * @returns {ShallowWrapper} - returns nodes found wrapper in a ShallowWrapper
 */
export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

/**
 * A util function to verify that a React component has all requiered props.
 * If not it should assert an error.
 *
 * @function
 * @name verifyProps
 * @param {JSX.Element} component
 * @param {object} confirmingProps
 */
export const verifyProps = (component, confirmingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confirmingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
