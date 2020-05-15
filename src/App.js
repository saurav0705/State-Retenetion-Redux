import React from 'react';
import './App.scss';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import TabComponent2 from './components/TabComponent2';
import TabComponent from './components/TabComponent';
import Header from './components/Header';

function App(props) {
  
  
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/" component={TabComponent}/>
        <Route exact path="/data" component={TabComponent2}/>
        </Switch>
      </Router>

      
    </div>
  );
}



export default App;
