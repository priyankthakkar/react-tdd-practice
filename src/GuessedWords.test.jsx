import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, verifyProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 3,
    },
  ],
};

/**
 * A factory function to setup ShallowWrapper for GuessedWords component
 *
 * @function
 * @name setup
 * @param {object} props - Component props specific to this setup
 *
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("doesnot throw warning with expected props", () => {
  verifyProps(GuessedWords, defaultProps);
});

describe("if there are no guessed words", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const gussedWordsComponent = findByTestAttribute(
      wrapper,
      "component-guessed-words"
    );
    expect(gussedWordsComponent.lenght).toBe(1);
  });

  test("renders instruction to guess a word", () => {
    const instructions = findByTestAttribute(
      wrapper,
      "guessed-word-instructions"
    );
    expect(instructions.text().lenght).not.toBe(0);
  });
});
