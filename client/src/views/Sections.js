import React from "react";

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
import SvmmMembers from "./sections-sections/SvmmMembers.js"
import Documents from "./sections-sections/Documents.js"
import Books from "./sections-sections/Books.js"
import VaikhanasaPrabha from "./sections-sections/VaikhanasaPrabha.js";

function Sections() {
  React.useEffect(() => {
    document.body.classList.add("sections-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#/") + 2
    );
    var hrefId = href.substring(href.lastIndexOf("#") + 1);
    if (href.lastIndexOf("#") > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    return function cleanup() {
      document.body.classList.remove("sections-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
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
        <Books />           
        <Matrimony />      
        <VaikhanasaPrabha />                  
        <Contact />         
        <VideoGallery />
        <PhotoGallery />
      </div>
    </>
  );
}

export default Sections;
