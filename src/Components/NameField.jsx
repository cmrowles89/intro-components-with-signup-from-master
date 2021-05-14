/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

const NameField = ({
  setInputValues, submitted, firstName, lastName, setValidFN, setValidLN,
}) => {
  const handleFirstName = (event) => {
    // copies the inputValue for names and adds them to input tag
    setInputValues((prevState) => ({ ...prevState, firstName: event.target.value }));
    setValidFN(true);
  };

  const handleLastName = (event) => {
    // copies the inputValue for names and adds them to input tag
    setInputValues((prevState) => ({ ...prevState, lastName: event.target.value }));
    setValidLN(true);
  };

  return (
    <div>
      <input value={firstName} onChange={handleFirstName} className="input-fields" placeholder="First Name" type="text" name="firstName" />
      {submitted && !firstName ? <span className="valid-message">First name cannot be empty</span> : null}
      <br />
      <input value={lastName} onChange={handleLastName} className="input-fields" placeholder="Last Name" type="text" name="lastName" />
      {submitted && !lastName ? <span className="valid-message">Last name cannot be empty</span> : null}
    </div>
  );
};

NameField.propTypes = {
  setInputValues: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  setValidFN: PropTypes.func.isRequired,
  setValidLN: PropTypes.func.isRequired,
};

export default NameField;
