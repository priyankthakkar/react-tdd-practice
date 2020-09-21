import { shallow } from "enzyme";
import React from "react";
import Congrats from "./Congrats";
import { findByTestAttribute, verifyProps } from "../test/testUtils";

const defaultProps = { success: false };

/**
 * A factory function to setup ShallowWrapper for Congrats component.
 *
 * @function
 * @name setup
 *
 * @param {Object} props - props to bootstrap Congrats component.
 *
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttribute(wrapper, "component-congrats");
  expect(congratsComponent.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttribute(wrapper, "component-congrats");
  expect(congratsComponent.text()).toBe("");
});

test("renders non-empty congrats message when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const congratsMessage = findByTestAttribute(wrapper, "congrats-message");
  expect(congratsMessage.text().length).not.toBe(0);
});

test("verify component has required props", () => {
  verifyProps(Congrats, { success: false });
});
