import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Store/Store";
import { ContextProvoder } from "./Context/ContextProvoder";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ContextProvoder>
        <App />
      </ContextProvoder>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
