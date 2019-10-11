import React from 'react';
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Landing from '../../routes/Landing/Landing';
import Adopt from '../../routes/Adopt/Adopt';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={Landing}/>
        <Route path={'/adopt'} component={Adopt}/>
      </Switch>
    </div>
  );
}

export default App;
