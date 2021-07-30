
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

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

