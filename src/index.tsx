import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import store from "./store/store.ts";
import App from "./App.tsx";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f7fafc;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
