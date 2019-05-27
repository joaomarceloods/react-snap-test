import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';

function App() {
  const [title, setTitle] = useState('Loading...')
  const [description, setDescription] = useState('Hold on while we load this content.')

  useEffect(() => {
    fetch('https://swapi.co/api/people/1/?format=json')
      .then(data => data.json())
      .then(json => {
        const { name, birth_year } = json
        setTitle(name)
        setDescription(`This iconic character was born in ${birth_year}.`)
      })
  })

  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default App;
