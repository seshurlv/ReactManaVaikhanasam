import React from "react";
import { useTranslation } from 'react-i18next';

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  Button
  // Carousel,
  // CarouselItem
} from "reactstrap";


function Contact() {
  const { t } = useTranslation();

  // Email functionality
  const handleEmailClick = () => {
    const emailAddress = "seshu.manavaikhanasam@gmail.com";
    const subject = "Contact from ManaVaikhanasam Portal";
    const body = "Hello from ManaVaikhanasam Community Portal.\n\nI would like to get in touch regarding:\n\n";
    
    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open in new tab
    window.open(gmailUrl, '_blank');
  };

  return (
    <>
      <div className="cd-section" id="contact">
        <div
          className="testimonials-1 section-image"
          style={{
            backgroundImage: "url(assets/siteimg/namam01.jpg)"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">{t('nav.contactUs')} @</h2>                
              </Col>
            </Row>
            <Row>              
              <Col md="12">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={"assets/siteimg/seshu.jpg"}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <p className="card-description">
                      {t('contact.des1')} 
                      <br/><br/>
                      {t('contact.des2')}
                      <br/><br/>
                      {t('contact.des3')}
                      <br/><br/>                      
                    </p>
                  </CardBody>
                  <div className="icon icon-info">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag="h4">{t('contact.fullname')}</CardTitle>
                    {/* Email contact with Gmail icon */}
                    <div className="contact-email-section text-center mt-3">
                      <p className="text-muted mb-2">Contact via :</p>
                      
                      {/* Gmail Button */}
                      <Col md="4" className="text-center">
                        <Button
                          className="btn-icon btn-round"
                          color="success"
                          href="https://wa.me/+919959933822?text=Hello from ManaVaikhanasam Portal"
                          target="_blank"
                          title="Contact via WhatsApp"
                        >
                          
                          <svg width="32" height="32" viewBox="-2 -4 28 28" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                          </svg>

                          

                        </Button>
                        <p className="small text-muted mt-2">WhatsApp</p>
                      </Col>
                      <Col md="4" className="text-center">
                        <Button
                          className="btn-icon btn-round mr-3"
                          color="danger"
                          onClick={handleEmailClick}
                          title="Send email via Gmail"
                          style={{
                            background: 'linear-gradient(45deg, #dd4b39, #c23321)',
                            border: 'none',
                            boxShadow: '0 4px 20px 0 rgba(221, 75, 57, 0.4)'
                          }}
                        >
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </Button>
                        <p className="small text-muted mt-2">Send Email</p>
                      </Col>                      
                      <br />                      
                      {/* Email address display */}
                      <p className="mt-3">
                        <small className="text-muted" style={{ fontSize: '0.75em' }}>
                          <i className="now-ui-icons ui-1_email-85 mr-1"></i>
                          seshu.manavaikhanasam@gmail.com
                        </small>
                      </p>                      
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4"></Col>
            </Row>
          </Container>
        </div>        
      </div>
    </>
  );
}

export default Contact;
