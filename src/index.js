import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Router } from "react-router-dom";
import * as Constants from "./Constants";
import { Service } from "./Services";
import * as serviceWorker from "./serviceWorker";
import Layout from "./components/hoc/Layout";
import history from "./history";
import Axios from "axios";
import reportWebVitals from './reportWebVitals';
import config from './config'
import "./index.css";

const instance = Axios.create({
  baseURL: "",
  headers: {},
});



      const url  = process.env.REACT_APP_BASE_URI
      ReactDOM.render(
        <Router history={history} basename={config.basename}>
            <>
              {" "}
              <Layout
                Constants={Constants}
                Service={Service.bind(null, url, Axios)}
              />
            </>
          </Router>,
        document.getElementById('root')
      );

      serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();