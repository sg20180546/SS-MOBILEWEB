
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// reset
import { GlobalStyle } from "./assets/styles/global-styles";

import { nextTheme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import './index.css';

ReactDOM.render(
  <ThemeProvider theme={nextTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// TEST