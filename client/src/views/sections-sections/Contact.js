import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  // Carousel,
  // CarouselItem
} from "reactstrap";


function Contact() {
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
                <h2 className="title">Contact US @</h2>                
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
                      My sincere attempt to serve the Vaikhanasa community by creating a space where everyone can stay informed and connected. 
                      <br/><br/>
                      I kindly request your cooperation in sharing relevant news, information, and resources to benefit Vaikhanasas across the globe. Together, we can build a stronger, more informed community.
                    </p>
                  </CardBody>
                  <div className="icon icon-info">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag="h4">Rompicherla Lakshmi Venkata Seshu Kumar</CardTitle>
                    <p className=" ui-1_email-85">  seshu.manavaikhanasam@gmail.com</p>
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
