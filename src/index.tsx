import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProviders from "./context/AppProviders";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);
