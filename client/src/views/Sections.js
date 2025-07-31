import React from "react";

// utils
import { handleHashFromReactRouter } from "../utils/scrollUtils.js";

// reactstrap components

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
//import Footer from "components/Footers/Footer.js";

// sections for this page
// import Headers from "./sections-sections/Headers.js";
// import Features from "./sections-sections/Features.js";
// import Blogs from "./sections-sections/Blogs.js";
// import Teams from "./sections-sections/Teams.js";
// import Projects from "./sections-sections/Projects.js";
// import Pricing from "./sections-sections/Pricing.js";
// import Testimonials from "./sections-sections/Testimonials.js";
//import ContactUs from "./sections-sections/ContactUs.js";
import Ashramam from "./sections-sections/Ashramam.js";
import AshramamDonors from "./sections-sections/AshramamDonors.js";
import PhotoGallery from "./sections-sections/PhotoGallery.js";
import VideoGallery from "./sections-sections/VideoGallery.js";
import Directory from "./sections-sections/Directory.js";
import Matrimony from "./sections-sections/Matrimony.js";
import Purohitas from "./sections-sections/Purohitas.js";
import News from "./sections-sections/News.js";
import Contact from "./sections-sections/Contact.js";
import Svmm from "./sections-sections/Svmm.js";
import SvmmMembers from "./sections-sections/SvmmMembers.js";
import Documents from "./sections-sections/Documents.js";
import Books from "./sections-sections/Books.js";
import VaikhanasaPrabha from "./sections-sections/VaikhanasaPrabha.js";

function Sections() {
  React.useEffect(() => {
    document.body.classList.add("sections-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    
    // Add smooth scroll behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle initial hash scroll with improved logic
    const initialScrollTimeout = setTimeout(() => {
      handleHashFromReactRouter();
    }, 300); // Increased delay for initial load to ensure all components are mounted
    
    // Handle hash changes (when user clicks menu items)
    const handleHashChange = () => {
      setTimeout(() => {
        handleHashFromReactRouter();
      }, 50);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    return function cleanup() {
      document.body.classList.remove("sections-page");
      document.body.classList.remove("sidebar-collapse");
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(initialScrollTimeout);
    };
  }, []); // Added dependency array for proper cleanup
  return (
    <>
      <WhiteNavbar />
      <div className="wrapper">
        <div className="section-space"></div>        
        <News />
        <Ashramam />
        <AshramamDonors />
        <Svmm />
        <SvmmMembers />
        <Directory />        
        <Purohitas />   
        <Documents />            
        <Matrimony />   
        <VaikhanasaPrabha />
        <Books />                 
        <VideoGallery />
        <PhotoGallery />
        <Contact />
      </div>
    </>
  );
}

export default Sections;
