/*eslint-disable*/
import React from "react";
import { useTranslation } from 'react-i18next';


// reactstrap components

// core components

function PresentationHeader() {
   const { t } = useTranslation();
  return (
    <>
      <div className="page-header clear-filter">
        <div className="rellax-header rellax-header-sky" data-rellax-speed="-4">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/nuk-pro-back-sky.jpg") +
                ")"
            }}
          ></div>
        </div>
        <div
          className="rellax-header rellax-header-buildings"
          data-rellax-speed="0"
        >
          <div
            className="page-header-image page-header-city"
            style={{
              backgroundImage:
                "url(" +
                require("assets/siteimg/Sri_Vikhanasa_Maharishi.webp") +
                ")"
            }}
          ></div>
        </div>
        <div className="rellax-text-container rellax-text">
          <h1 className="h1-seo" style={{ height: "120px" }} data-rellax-speed="-1">
            {t('homePage.title')}
          </h1>          
        </div>
        <h3 className="h3-description rellax-text" data-rellax-speed="-1">
          {t('homePage.SriGuru')}
        </h3>
        <h6 className="category category-absolute rellax-text" data-rellax-speed="-1">
          {t('homePage.development')}
        </h6>
      </div>
    </>
  );
}

export default PresentationHeader;
