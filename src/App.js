import React from 'react';
import './App.css';
import Home from './components/home';
import Body from './components/body';
import Companies from './components/companies';
import Body2 from './components/body-2';
import Body2Container from './components/body-2-container';
import Result from './components/result';
import BelowResult from './components/below-result';
import Footer from './components/footer';
function App() {
  return (
    <div className="App overflow-hidden">
      <Home />
      <Body />
      <Companies />
      <Body2 />
      <Body2Container />
      <Result />
      <BelowResult />
      <Footer />
    </div>
  );
}

export default App;
