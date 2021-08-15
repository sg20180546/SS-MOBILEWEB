import React from 'react';


import { HashRouter, Route } from 'react-router-dom';

import Home from './routes/Home';
import SignUp from './routes/SignUp';
import GetAuth from './routes/getAuth';
import Login from './routes/Login';
import Developer from './routes/Developer';
import refactorLogin from './hook/handleLogin';

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <Route path='/' component={Home} exact={true}></Route>
        <Route path='/signup' component={SignUp} exact={true}></Route>
        <Route path='/getauth' component={GetAuth} exact={true}></Route>
        <Route path='/login' component={Login} exact={true}></Route>
        <Route path='/developer' component={Developer} exact={true} ></Route>
      </HashRouter>
    </div >
  );
}

export default App;
