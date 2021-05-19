/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PasswordField = ({
  setInputValues, password, isPasswordValid, setValidPW,
}) => {
  const [touched, setTouched] = useState(false);

  const handlePassword = (event) => {
    // copies the inputValue for names and adds them to input tag
    setInputValues((prevState) => ({ ...prevState, password: event.target.value }));
    setTouched(true);
    setValidPW(isPasswordValid);
  };

  // eslint-disable-next-line consistent-return
  const passwordValidator = () => {
    // check if the pw doesn't exist
    if (!password) {
      // show please enter a password

      return <span className="valid-message">Password cannot be empty</span>;
    }
    // check if pw exist but is not valid
    if (!isPasswordValid) {
      // show please enter a valid password

      return <span className="valid-message"> Please enter a valid password</span>;
    }
  };

  return (
    <div>
      <input value={password} onChange={handlePassword} className="input-fields" type="password" placeholder="Password" name="password" />
      {touched ? passwordValidator() : null}
    </div>
  );
};
PasswordField.propTypes = {
  setInputValues: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  isPasswordValid: PropTypes.bool.isRequired,
  setValidPW: PropTypes.func.isRequired,

};

export default PasswordField;
