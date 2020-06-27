import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Music from './components/Music';
import About from './components/About';
import NavBar from './components/NavBar';

function App() {
  return (
      <Router>
        <Route exact path={'/'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/portfolio'} component={Portfolio} />
        <Route path={'/blog'} component={Blog} />
        <Route path={'/music'} component={Music} />
        <NavBar />
      </Router>
  );
}

export default App;
