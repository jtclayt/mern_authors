import React from 'react';
import { Router } from '@reach/router';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Authors from './components/Authors/Authors';
import AuthorForm from './components/AuthorForm/AuthorForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Authors default path="/authors" />
        <AuthorForm path="/authors/new" />
      </Router>
    </div>
  );
}

export default App;
