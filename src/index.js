import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Google Analytics
import ReactGA from 'react-ga';

// styles
import "./index.scss";

//component
import App from "./App";

ReactGA.initialize('UA-63715257-16');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
    
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
