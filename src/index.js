import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/index";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
