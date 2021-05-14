/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NameField from './NameField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

const Form = ({ submitted, setSubmitted }) => {
  const [validFirstName, setValidFN] = useState(false);
  const [validLastName, setValidLN] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPW] = useState(false);

  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',

  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const regexString = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  const strongRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');

  return (
    <div>
      <div className="form-page">
        <div className="left-column">

          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in
            real-time. Watching scripted tutorials is great,
            but understanding how developers think is invaluable.
          </p>
        </div>
        <div className="free">
          <p className="learn">
            <b>Try it free 7 days</b>
            {' '}
            then $20/mo thereafter
          </p>
          <div className="input-box">

            <div className=" form-components">
              <form className="form" onSubmit={handleSubmit}>
                <NameField
                  submitted={submitted}
                  firstName={inputValues.firstName}
                  lastName={inputValues.lastName}
                  setInputValues={setInputValues}
                  setValidFN={setValidFN}
                  setValidLN={setValidLN}
                />
                <EmailField
                  isEmailValid={regexString.test(inputValues.email)}
                  submitted={submitted}
                  email={inputValues.email}
                  setInputValues={setInputValues}
                  setValidEmail={setValidEmail}
                />
                <PasswordField
                  isPasswordValid={strongRegex.test(inputValues.password)}
                  setInputValues={setInputValues}
                  password={inputValues.password}
                  submitted={submitted}
                  setValidPW={setValidPW}
                />
                <button type="submit" className="submit-btn">CLAIM YOUR FREE TRIAL</button>
              </form>
            </div>
            { console.log('submitted: ', submitted, 'valid first name', validFirstName, 'valid last name: ', validLastName, 'valid email: ', validEmail, 'valid password: ', validPassword)}
            {(submitted && validFirstName
      && validLastName) ? <p className="success-message">Submitted</p> : null}
            <span className="terms-of-service">
              By clicking the button you are agreeing to
              <a href="index.html">Terms of Service</a>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  setSubmitted: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
};

export default Form;
