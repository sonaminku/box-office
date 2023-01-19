import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch, Route } from 'react-router-dom'
import Navs from './components/Navs';
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
  <div>
    <Navs />
  <Switch>
    <Route exact path="/"><Home /></Route>
    <Route exact path="/starred"><Starred /></Route>
    <Route><div>Not Found</div></Route>
  </Switch>
  </div>
  )
}

export default App;
