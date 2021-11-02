
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store'
import { GlobalStyle } from "./assets/styles/global-styles";
import { Provider } from 'react-redux';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
{process.env.REACT_APP_ENVIRONMENT==='extension' ? <App/> 
:
  <BrowserRouter>
    <Switch>
      <Route exact path='/ssodamsearch' component={App}></Route>
    </Switch>
   </BrowserRouter>}


  </Provider>,
  document.getElementById('root')
);

