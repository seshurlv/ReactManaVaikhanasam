import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// i18n initialization
import './i18n/i18n';

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

import LoginPage from "views/LoginPage.js";
import SignupPage from "views/SignupPage";

// Lazy loaded pages
import { 
  LazyAshramamPage, 
  LazyAshramamDonorsPage,
  LazyBooksPage,
  LazyContactUsPage,
  LazyMatrimonyPage,
  LazyDirectoryPage,
  LazyPhotoGalleryPage,
  LazySVMMPage,
  LazyNewsPage,
  LazyPurohitPage,
  LazyDocumentsPage,
  LazyVideoGalleryPage,
  LazyVaikhanasaPrabhaPage
} from "views/pages/LazyPages.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Switch>      
      <Route path="/presentation" component={Presentation} />
      <Route path="/sections" component={Sections} />    

      <Route path="/ashramam" component={LazyAshramamPage} />
      <Route path="/ashramamdonors" component={LazyAshramamDonorsPage} />
      <Route path="/books" component={LazyBooksPage} />
      <Route path="/contact" component={LazyContactUsPage} />
      <Route path="/matrimony" component={LazyMatrimonyPage} />
      <Route path="/directory" component={LazyDirectoryPage} />
      <Route path="/svmm" component={LazySVMMPage} />
      <Route path="/photogallery" component={LazyPhotoGalleryPage} />
      <Route path="/news" component={LazyNewsPage} />
      <Route path="/purohit" component={LazyPurohitPage} />
      <Route path="/documents" component={LazyDocumentsPage} />
      <Route path="/videogallery" component={LazyVideoGalleryPage} />
      <Route path="/vaikhanasaprabha" component={LazyVaikhanasaPrabhaPage} />
      

      <Route path="/loginPage" component={LoginPage} />
      <Route path="/signupPage" component={SignupPage} />
      <Redirect to="/presentation" />
    </Switch>
  </Router>
);

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}