
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

// reset
import store from './redux/store'
import { GlobalStyle } from "./assets/styles/global-styles";
import { Provider } from 'react-redux';
// import { nextTheme } from "./assets/styles/theme";
// import { ThemeProvider } from "styled-components";
import './index.css';

// import Use

ReactDOM.render(
  <Provider store={store}>
    {/* <ThemeProvider theme={nextTheme}> */}
    <GlobalStyle />
    <App />
    {/* </ThemeProvider> */}
  </Provider>,
  document.getElementById('root')
);

