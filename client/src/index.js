import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// i18n initialization
import './i18n/i18n';

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
import "assets/css/common.css"
// pages
import Presentation from "views/Presentation.js";
import Sections from "views/Sections.js"; // Add this missing import
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
// cache bursting
// Cache versioning for bust on updates
const CACHE_VERSION = process.env.REACT_APP_VERSION || '1.3.0';

root.render(
  <Router>
    <Switch>   
      <Route exact path="/" component={Presentation} />   
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

      {/* Catch all route - must be last */}
      <Route path="*" component={Presentation} />
    </Switch>
  </Router>
);

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try{
      console.log('Registering Service Worker...');
      
      const registration = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
      
      console.log('SW registered successfully: ', registration.scope);

      // Track if we've already shown the update prompt
      let updatePromptShown = false;

      // Handle service worker updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        
        if (!newWorker) return;

        console.log('New service worker found, installing...');


        newWorker.addEventListener('statechange', () => {
          console.log('Service worker state changed to:', newWorker.state);


          if (newWorker.state === 'installed' && navigator.serviceWorker.controller && !updatePromptShown) {
            updatePromptShown = true;
            console.log('New service worker installed, prompting user...');

             // Show update notification with better UX
            showUpdateNotification(newWorker);

            // // Show update available notification
            // if (window.confirm('ManaVaikhanasam has been updated! Click OK to reload and get the latest features. Reload to update?')) {
            //   newWorker.postMessage({ action: 'skipWaiting' });
            //   window.location.reload();
            // }
          }
        });
      });

      // Listen for controlling service worker changes
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Service worker controller changed, reloading...');        
      });

      // Periodic sync for offline data
      if ('sync' in window.ServiceWorkerRegistration.prototype) {
        try {
          await registration.sync.register('background-sync');
          console.log('Background sync registered');
        } catch (error) {
          console.log('Background sync registration failed:', error);
        }
      }
      
    } catch (error) {
      console.log('SW registration failed: ', error);
    }
  });
}

// Better update notification function
function showUpdateNotification(newWorker) {
  // Create a more user-friendly notification
  const updateBanner = document.createElement('div');
  updateBanner.id = 'sw-update-banner';
  updateBanner.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(45deg, #2196F3, #21CBF3);
      color: white;
      padding: 15px;
      text-align: center;
      z-index: 10000;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      font-family: Arial, sans-serif;
    ">
      <div style="max-width: 600px; margin: 0 auto;">
        <strong>🔄 ManaVaikhanasam Updated!</strong>
        <p style="margin: 8px 0; font-size: 14px;">
          A new version is available with improvements and bug fixes.
        </p>
        <div style="margin-top: 10px;">
          <button id="sw-update-btn" style="
            background: white;
            color: #2196F3;
            border: none;
            padding: 8px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            margin-right: 10px;
          ">
            Update Now
          </button>
          <button id="sw-dismiss-btn" style="
            background: transparent;
            color: white;
            border: 1px solid white;
            padding: 8px 20px;
            border-radius: 4px;
            cursor: pointer;
          ">
            Later
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(updateBanner);

  // Handle update button click
  document.getElementById('sw-update-btn').addEventListener('click', () => {
    console.log('User chose to update');
    
    // Tell the new service worker to skip waiting
    newWorker.postMessage({ action: 'skipWaiting' });
    
    // Remove the banner
    updateBanner.remove();
    
    // Show loading indicator
    showUpdateLoadingIndicator();
    
    // Reload after a short delay
    setTimeout(() => {
      window.location.reload();
    }, 500);
  });

  // Handle dismiss button click
  document.getElementById('sw-dismiss-btn').addEventListener('click', () => {
    console.log('User dismissed update notification');
    updateBanner.remove();
  });

  // Auto-dismiss after 30 seconds
  setTimeout(() => {
    if (document.getElementById('sw-update-banner')) {
      updateBanner.remove();
    }
  }, 30000);
}

// Show loading indicator during update
function showUpdateLoadingIndicator() {
  const loader = document.createElement('div');
  loader.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(33, 150, 243, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10001;
      color: white;
      font-family: Arial, sans-serif;
    ">
      <div style="text-align: center;">
        <div style="
          border: 4px solid rgba(255,255,255,0.3);
          border-top: 4px solid white;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        "></div>
        <h3>Updating ManaVaikhanasam...</h3>
        <p>Please wait while we apply the latest updates</p>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    </div>
  `;
  
  document.body.appendChild(loader);
}

// Performance monitoring
window.addEventListener('load', () => {
  // Web Vitals monitoring
  if ('web-vitals' in window) {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = window.webVitals;
    
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  }
  
  console.log(`ManaVaikhanasam v${CACHE_VERSION} loaded successfully`);
});

// Error boundary for better user experience
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
  
  // Send error to analytics if available
  if (window.gtag) {
    try {
      window.gtag('event', 'exception', {
        description: event.error.toString(),
        fatal: false
      });
    } catch (e) {
      console.log('Analytics not available');
    }
  }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  event.preventDefault(); // Prevent default browser behavior
});