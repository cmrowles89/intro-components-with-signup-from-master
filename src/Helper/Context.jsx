/* eslint-disable import/prefer-default-export */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SignUpContext = createContext({});

export const SignUpContextProvider = ({ children }) => {
  const [validated, setValidated] = useState(false);

  return (
    <SignUpContext.Provider value={{ validated, setValidated }}>
      {children}
    </SignUpContext.Provider>
  );
};

SignUpContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
