/*!

=========================================================
* Now UI Kit PRO React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2022 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import "assets/css/common.css"

// pages
import Presentation from "views/Presentation.js";
import Sections from "views/Sections.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Switch>      
      <Route path="/presentation" render={(props) => <Presentation {...props} />} />
      <Route path="/sections" component={Sections} render={(props) => <Presentation {...props} />} />     
      <Redirect to="/presentation" />
    </Switch>
  </Router>
);
