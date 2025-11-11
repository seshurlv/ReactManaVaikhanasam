import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import FooterDefault from "components/Footers/FooterDefault.js";

// Import your existing Ashramam component
import Matrimony from "views/sections-sections/Matrimony.js";

function MatrimonyPage() {
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
          <div className="page-header-image" style={{ opacity: "0.6",
            backgroundImage: "url(" + require("assets/img/banners/matrimony.jpg") + ")"
          }}></div>
          <div className="content-center">
            <div className="container">
              <h1 className="title">{t("matrimony.title")}</h1>
            </div>
          </div>
        </div>
        <Matrimony />
        <FooterDefault />
      </div>
    </>
  );
}

export default MatrimonyPage;