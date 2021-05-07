import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { reduxStore } from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import GlobalStyles from "Theme/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore.store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
