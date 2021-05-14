import React, { useState } from 'react';
import Form from './Components/Form';
import './Styles/Login.css';
import Grid from './Components/Grid';
import './Styles/Grid.css';

function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="App">
      {(submitted) ? <Grid /> : <Form submitted={submitted} setSubmitted={setSubmitted} />}

    </div>

  );
}

export default App;
