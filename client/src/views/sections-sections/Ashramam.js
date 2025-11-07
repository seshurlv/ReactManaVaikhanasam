import React from "react";
import { useTranslation } from 'react-i18next';
import proposed from "assets/img/hyderabad-ashramam/proposed.jpg";  

// reactstrap components
import {  
  Card,
  Container,
  Row,
  Col,
  CardBody
} from "reactstrap";

// core components

function Ashramam() {
  const { t } = useTranslation();

  // First floor construction media files
  const firstFloorImages = [
    "assets/siteimg/ashramam/firstfloor/01.jpg",
    "assets/siteimg/ashramam/firstfloor/02.jpg", 
    "assets/siteimg/ashramam/firstfloor/03.jpg",
    "assets/siteimg/ashramam/firstfloor/04.jpg",
    "assets/siteimg/ashramam/firstfloor/05.jpg",
    "assets/siteimg/ashramam/firstfloor/06.jpg",
    "assets/siteimg/ashramam/firstfloor/07.jpg",
    "assets/siteimg/ashramam/firstfloor/08.jpg"
  ];

  const firstFloorVideos = [
    "assets/siteimg/ashramam/firstfloor/01.mp4",
    "assets/siteimg/ashramam/firstfloor/02.mp4"
  ];

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
                    <Col md="12">
                      <h3 className="category text-center text-info mt-3">Ashramam First Floor Construction Progress</h3>

                      {/* First Floor Construction Media Gallery */}
                      <CardBody>
                        {/* Construction Images */}
                        <Row className="mb-4">
                          <Col md="12">
                            <h6 className="text-info mb-3">
                              <i className="now-ui-icons media-1_camera-compact mr-2"></i>
                              Progress Photos
                            </h6>
                            <Row>
                              {firstFloorImages.map((imageSrc, index) => (
                                <Col md="4" sm="6" key={index} className="mb-3">
                                  <div 
                                    className="card-image"
                                    style={{ 
                                      overflow: 'hidden',
                                      borderRadius: '10px',
                                      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.14)',
                                      transition: 'transform 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                  >
                                    <img
                                      alt={`First floor construction progress ${index + 1}`}
                                      className="img-fluid rounded"
                                      src={imageSrc}
                                      style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover'
                                      }}
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                      }}
                                    />
                                  </div>
                                  <p className="text-center mt-2 small text-muted">
                                    Construction Phase {index + 1}
                                  </p>
                                </Col>
                              ))}
                            </Row>
                          </Col>
                        </Row>

                        {/* Construction Videos */}
                        <Row className="mb-4">
                          <Col md="12">
                            <h6 className="text-info mb-3">
                              <i className="now-ui-icons media-1_button-play mr-2"></i>
                              Progress Videos
                            </h6>
                            <Row>
                              {firstFloorVideos.map((videoSrc, index) => (
                                <Col md="6" key={index} className="mb-3">
                                  <div 
                                    className="video-container"
                                    style={{
                                      borderRadius: '10px',
                                      overflow: 'hidden',
                                      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.14)'
                                    }}
                                  >
                                    <video
                                      controls
                                      className="img-fluid rounded"
                                      style={{
                                        width: '100%',
                                        height: '250px',
                                        objectFit: 'cover'
                                      }}
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                      }}
                                    >
                                      <source src={videoSrc} type="video/mp4" />
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                  <p className="text-center mt-2 small text-muted">
                                    Construction Video {index + 1}
                                  </p>
                                </Col>
                              ))}
                            </Row>
                          </Col>
                        </Row>
                      </CardBody>
                      <p className="card-description"></p>
                          <br/><br/>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt={t('ashramam.imageAlt')}
                          className="img img-raised rounded"
                          src={proposed}
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
