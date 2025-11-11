import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import FooterDefault from "components/Footers/FooterDefault.js";

// Import your existing Ashramam component
import News from "views/sections-sections/News.js";

function NewsPage() {
  const { t } = useTranslation();
  
  useEffect(() => {
    //document.body.classList.add("ashramam-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    
    return function cleanup() {
      //document.body.classList.remove("ashram-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        {/* Add a header specific to this page */}
        <div className="page-header page-header-small">
          <div className="page-header-image" style={{
            backgroundImage: "url(" + require("assets/img/banners/announcements.jpg") + ")"
          }}></div>
          <div className="content-center">
            <div className="container">
              <h1 className="title">{t('news.title')}</h1>
              <p>{t('news.description')}</p>
            </div>
          </div>
        </div>
        <News />
        <FooterDefault />
      </div>
    </>
  );
}

export default NewsPage;