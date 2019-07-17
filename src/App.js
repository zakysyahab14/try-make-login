import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import SignIn from './components/signin'
import SignUp from './components/signup'

function App() {
  return (
    <BrowserRouter>
<ul>
  <li>
    <Link to='/'>Sign In</Link>
  </li>
  <li>
    <Link to='/signup'>Sign Up</Link>
  </li>
</ul>
    <Switch>
    <Route exact path='/' component={SignIn} />
    <Route path='/signup' component={SignUp} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
