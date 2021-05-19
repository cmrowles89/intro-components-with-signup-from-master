/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import Form from './Components/Form';
import './Styles/Login.css';
import Grid from './Components/Grid';
import './Styles/Grid.css';

function App() {
  const [validated, setValidated] = useState(false);

  return (
    <div className="App">
      {console.log(validated)}
      {(validated) ? <Grid /> : (
        <Form
          setValidated={setValidated}
        />
      )}

    </div>

  );
}

export default App;
