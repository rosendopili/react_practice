import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import { Route, Switch } from 'react-router-dom'; 
import Home from './components/Home'; 
import About from './components/About';
import Projects from './components/Projects'; 


function App() {
  return (
    <div className="App">
      <Navbar/>
      
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/projects" component={Projects} exact/>
            <Route component={Error}/>
          </Switch>

    </div>
  );
}

export default App;
