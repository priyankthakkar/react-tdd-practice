import React from "react";
import PropTypes from "prop-types";

/**
 * A react component that shows Congratulatory message when `success` props
 * is `true`.
 *
 * @function
 * @name Congrats
 *
 * @param {object} props
 * @return {JSX.Element}
 */
function Congrats(props) {
  const { success } = props;
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You have guessed the word.
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
