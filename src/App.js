import React from 'react';
import './App.css';
import NavBar from './components/NavBar'; 
import { Route, Switch } from 'react-router-dom'; 
import Home from './components/Home'; 
import About from './components/About';
import Projects from './components/Projects'; 


function App() {
  return (
    <div className="App">
      <NavBar/>
      
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
