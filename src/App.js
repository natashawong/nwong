import React from 'react';
import './App.css';

import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <About/>
          </Route>
          
          <Route exact path='/projects'>
            <Projects/>
          </Route>

          <Route exact path='/contact'>
            <Contact/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
