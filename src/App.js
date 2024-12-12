import React from 'react';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
