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
      <Button name='Show'/>

      <div className="body">
      <Switch>
        <Route path='/questions'>
        <Questions/>
        </Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;
