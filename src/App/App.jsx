import React from 'react'
import './App.css';
import Header from '../presentational/header';
import Button from '../functional/button';
import Questions from '../functional/question';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <div className="body">
        <Route  exact path='/'>
        <Button name='Show'/>
        </Route>
        <Route path='/questions'>
        <Questions/>
        </Route>

      </div>
      </Switch>
    </div>
  );
}

export default App;
