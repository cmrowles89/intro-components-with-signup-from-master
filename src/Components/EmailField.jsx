/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

const EmailField = ({
  email, submitted, setInputValues, isEmailValid, setValidEmail,
}) => {
  const handleEmail = (event) => {
    // copies the inputValue for email and adds them to input tag
    setInputValues((prevState) => ({ ...prevState, email: event.target.value }));
    setValidEmail(isEmailValid);
  };

  // console.log(props.submitted);
  // console.log(props.email);
  // console.log(props.validEmail);

  return (
    <div>
      <input value={email} onChange={handleEmail} className="input-fields" type="email" placeholder="Email" name="email" />
      {submitted && !isEmailValid ? <span className="valid-message">Looks like this is not an email</span> : null}
    </div>
  );
};

EmailField.propTypes = {
  email: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  isEmailValid: PropTypes.bool.isRequired,
  setInputValues: PropTypes.func.isRequired,
  setValidEmail: PropTypes.func.isRequired,

};

export default EmailField;
