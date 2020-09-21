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
