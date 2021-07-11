import React from 'react';
import logo from './logo.svg';
// import './App.css';

import { HashRouter, Route } from 'react-router-dom';

import Home from './routes/Home';
import SignUp from './routes/SignUp';
import Login from './routes/Login';
<<<<<<< HEAD

function App() {
=======
import test from './routes/test';
const App: React.FC = () => {
>>>>>>> feature/EXTENSION-5
  return (
    <div className="App">
      <HashRouter>
        <Route path='/' component={Home} exact={true}></Route>
        <Route path='/signup' component={SignUp} exact={true}></Route>
        <Route path='/Login' component={Login} exact={true}></Route>
<<<<<<< HEAD
=======
        <Route path='/test' component={test} exact={true}></Route>

>>>>>>> feature/EXTENSION-5
      </HashRouter>
    </div>
  );
}

export default App;
