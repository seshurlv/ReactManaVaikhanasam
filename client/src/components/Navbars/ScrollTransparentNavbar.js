import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.js";

// reactstrap components
import {
  //Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function ScrollTransparentNavbar() {  
  const [collapseOpen, setCollapseOpen] = React.useState(false);
   const { t } = useTranslation();
  const location = useLocation();

  const [navbarColor, setNavbarColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );

  // Close collapse on route change
  React.useEffect(() => {
    setCollapseOpen(false);
    document.documentElement.classList.remove("nav-open");
  }, [location]);

  // const [buyButtonColor, setBuyButtonColor] = React.useState(
  //   (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
  //     ? "info"
  //     : "neutral"
  // );
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        //setBuyButtonColor("info");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
        //setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor} color="white" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              {t('homePage.title')}
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              Mana Vaikhanasam by Seshu Rompicherla
            </UncontrolledTooltip>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"                  
                  id="navbarDropdownMenuLink1"
                  nav
                  to="/"
                  tag={Link}
                >
                  <i className="now-ui-icons design_app"></i>
                   <p>{t('nav.home')}</p>
                </DropdownToggle>                
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons files_paper"
                  ></i>
                  <p>{t('nav.ashramam')}</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/ashramam" tag={Link}>
                    <i className="now-ui-icons shopping_box"></i>
                     {t('nav.hyderabadAshramam')}
                  </DropdownItem>
                  <DropdownItem to="/ashramamdonors" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    {t('nav.hyderabadAshramamDonors')}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons files_paper"
                  ></i>
                  <p>{t('nav.gallery')}</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/photogallery" tag={Link}>
                    <i className="now-ui-icons shopping_box"></i>
                    {t('nav.photos')}
                  </DropdownItem>
                  <DropdownItem to="/videogallery" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    {t('nav.videos')}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons files_paper"
                  ></i>
                  <p>{t('nav.services')}</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/directory" tag={Link}>
                    <i className="now-ui-icons shopping_box"></i>
                    {t('nav.directory')}
                  </DropdownItem>
                  <DropdownItem to="/matrimony" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    {t('nav.matrimony')}
                  </DropdownItem>
                  <DropdownItem to="/purohit" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    {t('nav.vaikhanasaPurohitulu')}
                  </DropdownItem>
                  <DropdownItem to="/vaikhanasaprabha" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    {t('nav.vaikhanasaPrabha')}
                  </DropdownItem>
                  <DropdownItem to="/books" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    {t('nav.books')}
                  </DropdownItem>
                  {/* <DropdownItem>
                    <DropdownToggle caret>Downloads</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/sections#subitem1" tag={Link}>
                        Subitem 1
                      </DropdownItem>
                      <DropdownItem to="/sections#subitem2" tag={Link}>
                        Subitem 2
                      </DropdownItem>                      
                    </DropdownMenu>                   
                  </DropdownItem>              */}
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav                  
                  onClick={(e) => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons files_paper"
                  ></i>
                  <p>{t('nav.welfare')}</p>
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>
                      <strong>{t('nav.svmm')}</strong>
                    </DropdownItem>
                    <DropdownItem to="/svmm" tag={Link}>
                      <i className="now-ui-icons shopping_box"></i>
                      {t('nav.sriVaikhanasaMahaMandali')}
                    </DropdownItem>                  
                  </DropdownMenu>                
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons files_paper"
                  ></i>
                  <p>{t('nav.library')}</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/documents" tag={Link}>
                    <i className="now-ui-icons shopping_box"></i>
                    {t('nav.documents')}
                  </DropdownItem>
                  
                  {/* <DropdownItem to="/sections#features" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    Pravachanamulu
                  </DropdownItem> 
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    Stotramulu
                  </DropdownItem>
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    Keertanalu
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <UncontrolledDropdown nav>
                <DropdownToggle
                    caret                                   
                    id="navbarDropdownMenuLink"
                    nav      
                    to="/news"            
                    tag={Link}                    
                  >
                    <i
                      aria-hidden={true}
                      className="now-ui-icons files_paper"
                    ></i>
                    <p>{t('nav.news')}</p>
                  </DropdownToggle>                
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"                                    
                  id="navbarDropdownMenuLink"
                  nav
                  to="/contact"            
                  tag={Link}                  
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons files_paper"
                  ></i>
                  <p>{t('nav.contactUs')}</p>
                </DropdownToggle>                
              </UncontrolledDropdown>
              
              { /*<UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons files_paper"
                  ></i>
                  <p>Sections real</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/sections#headers" tag={Link}>
                    <i className="now-ui-icons shopping_box"></i>
                    Headers
                  </DropdownItem>
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    Features
                  </DropdownItem>
                  <DropdownItem to="/sections#blogs" tag={Link}>
                    <i className="now-ui-icons text_align-left"></i>
                    Blogs
                  </DropdownItem>                  
                  <DropdownItem to="/sections#testimonials" tag={Link}>
                    <i className="now-ui-icons ui-2_chat-round"></i>
                    Testimonials
                  </DropdownItem>                  
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons design_image"
                  ></i>
                  <p>Examples</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem tag={Link} to="/about-us">
                    <i className="now-ui-icons business_bulb-63"></i>
                    About-us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/blog-post">
                    <i className="now-ui-icons text_align-left"></i>
                    Blog Post
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/blog-posts">
                    <i className="now-ui-icons design_bullet-list-67"></i>
                    Blog Posts
                  </DropdownItem>                                    
                  <DropdownItem tag={Link} to="/login-page">
                    <i className="now-ui-icons users_circle-08"></i>
                    Login Page
                  </DropdownItem>                                                      
                  <DropdownItem tag={Link} to="/profile-page">
                    <i className="now-ui-icons users_single-02"></i>
                    Profile Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sign-up">
                    <i className="now-ui-icons tech_mobile"></i>
                    Signup Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link btn-default"
                  color={buyButtonColor}
                  href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nuk-pro-react-scroll-transparent-navbar"
                  target="_blank"
                >
                  <p>Buy Now</p>
                </Button>
              </NavItem> */}
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons users_circle-08"></i>
                  <p>{t('nav.account')}</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/loginpage" tag={Link}>
                    <i className="now-ui-icons ui-1_lock-circle-open"></i>
                    {t('nav.login')}
                  </DropdownItem>
                  <DropdownItem to="/sign-up" tag={Link}>
                    <i className="now-ui-icons users_single-02"></i>
                    {t('nav.signUp')}
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem to="/profile-page" tag={Link}>
                    <i className="now-ui-icons business_badge"></i>
                    {t('nav.profile')}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
                <LanguageSwitcher />
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ScrollTransparentNavbar;
