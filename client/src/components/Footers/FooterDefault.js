/*eslint-disable*/
import React from "react";
import { useTranslation } from 'react-i18next';

// reactstrap components
import { Container } from "reactstrap";

// core components

function FooterDefault() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=nuk-pro-react-footer-default"
                  target="_blank"
                >
                  {t('homePage.title')}
                </a>
              </li>
              {/* <li>
                <a
                  href="http://presentation.creative-tim.com?ref=nuk-pro-react-footer-default"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nuk-pro-react-footer-default"
                  target="_blank"
                >
                  Blog
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, {t('contact.work')} {t('contact.name')}
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterDefault;
