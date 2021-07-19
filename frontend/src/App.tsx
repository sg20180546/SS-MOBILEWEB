import React from 'react';


import { HashRouter, Route } from 'react-router-dom';

import Home from './routes/Home';
import SignUp from './routes/SignUp';
import GetAuth from './routes/getAuth';
import Login from './routes/Login';
import Search from './routes/Search';

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <Route path='/' component={Home} exact={true}></Route>
        <Route path='/signup' component={SignUp} exact={true}></Route>
        <Route path='/getAuth' component={GetAuth} exact={true}></Route>
        <Route path='/Login' component={Login} exact={true}></Route>
        <Route path='/Search' component={Search} exact={true}></Route>
      </HashRouter>
    </div >
  );
}

export default App;
