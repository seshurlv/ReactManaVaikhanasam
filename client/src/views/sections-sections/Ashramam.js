import React from "react";
import { useTranslation } from 'react-i18next';

// reactstrap components
import {  
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Ashramam() {
  const { t } = useTranslation();

  return (
    <>
      <div className="cd-section" id="ashramam">
        <div className="blogs-1" id="blogs-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">{t('ashramam.title')}</h2>
                <br></br>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt={t('ashramam.imageAlt')}
                          className="img img-raised rounded"
                          src={require("assets/img/hyderabad-ashramam/proposed.jpg")}
                        ></img>
                      </div>
                    </Col>
                    <Col md="7">
                      <h6 className="category text-info mt-3">{t('ashramam.category')}</h6>
                      <p className="card-description">{t('ashramam.description')}
                          <br/><br/>

                        <b>{t('ashramam.location')}</b><br/>
                        <iframe
                          title="Sri Vikhanasa Ashramam Location"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243648.93036588933!2d78.41651325341068!3d17.41109000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f42c983789f%3A0x661617d8821f945c!2sSri%20Vikhanasa%20Ashramam!5e0!3m2!1sen!2sin!4v1722494384045!5m2!1sen!2sin" 
                          className="responsive-iframe"
                          allowfullscreen="" 
                          loading="lazy" 
                          referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                      </p>                      
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>        
      </div>
    </>
  );
}

export default Ashramam;
