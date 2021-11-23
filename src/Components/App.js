import React from 'react';
import Sidebar from '../Sidebar'
import Navbar from '../Components/Navbar'
import {
  BrowserRouter as Router, Redirect, Switch,
  Route } from 'react-router-dom';

import About from './About';
import Resume from './Resume';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row">
        <div className="col-3">
        
            <Sidebar />
      
      
        </div>
        <div className="col-9 mainContent">
          <Navbar />
  
      <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects" component={Projects} />
                <Route>
                  <Redirect to="/" />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
    </div>





      </div>
      </div>
      </div>
     
      </Router>
      
  );
}

export default App;