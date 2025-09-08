import React from "react";


// reactstrap components
import {  
  Card,  
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

function News() {
  return (
    <>
      <div className="cd-section" id="news">
        <div className="blogs-1" id="blogs-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Latest News</h2>
                <br></br>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={("assets/siteimg/acharya.jpg")}
                        ></img>
                      </div>
                    </Col>
                    <Col md="7">
                      <h6 className="category text-info mt-3">Sravana poornima - 2025</h6>
                      <CardTitle tag="h3">
                        <h6>
                          Sravana Poornima Sri Vikhanasa Swamy Jayanthi Mahotsavam - 2025
                        </h6>
                      </CardTitle>
                      <p className="card-description">
                        Dear Vikhanasa Bandu's, This year Sravana Poornima Sri Vikhanasa Acharya Swamy vari Jayanthi Mahotsavam will be conducted at 
                        Sri Vikhanasa Ashramam, Plotno.205, P&T colony, Kakatiya Hospital road, Medipally, Hyderabad by our Sri Vaikhanasa Maha Mandali on 09/Aug/2025 (Saturday).
                        <br /><br />
                        Also Sravana Upakarma will be performed for the new vatus. To register for upakarma please contact the following numbers before 01/08/2025:
                        <br />
                        <ul>  
                          <li>Sampara Raghu Kumar        - 94406 35800</li>
                          <li>Rompicherla Seshu Kumar    - 99599 33822</li>
                        </ul>
                        <br />                        
                        <br />
                        We welcome all our beloved vaikhanasa bandhu's to do join this event and make it a grand success.
                      </p>
                      <p className="author">
                        09/Aug/2025
                      </p>
                      <p>
                        <strong>Location:</strong> <a href="https://maps.google.com/?q=Sri+Vikhanasa+Ashramam,+Plot+no.205,+P%26T+Colony,+Kakatiya+Hospital+Road,+Medipally,+Hyderabad" target="_blank" rel="noopener noreferrer" style={{color: '#007bff', textDecoration: 'none', fontWeight: 'bold'}}>
                          📍 View on Google Maps
                        </a>
                      </p>
                    </Col>
                    <Col md="12">
                      <div>
                        <object data={"/assets/docs/Sravana_Poornima_09_08_2025.pdf"} type="application/pdf" width="100%" height="900px">
                          <p>Invitation for Sravana Poornima - 2025</p>
                        </object>                                          
                      </div>
                    </Col>
                  </Row>
                </Card> 
                {/* <Card className="card-plain card-blog">
                  <Row>
                    <Col md="7">
                      <h6 className="category text-danger">
                        <i className="now-ui-icons now-ui-icons media-2_sound-wave"></i>{" "}
                        Kartheeka Vana Samaradhana Event
                      </h6>
                      <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Kartheeka Vana Samaradhana Mahotstavam
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Dear Vikhanasa Bandu's, This year Kartheeka Vana Samaradhana Mahotstavam will be conducted at Sri Vikhanasa Ashramam, 
                        Plotno.205, P&T colony, Kakatiya Hospital road, Medipally, Hyderabad by our Sri Vaikhanasa Maha Mandali on 10/12/2023 (Sunday).
                        We welcome all our beloved vaikhanasa bandhu's to do join this event and make it a grand success.
                      </p>
                      <p className="author">
                        10/Dec/2023
                      </p>                      
                    </Col>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/siteimg/greetings/KartheekaVanaSamaradhana.jpg")}
                        ></img>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                    <div>
                        <object data={require("../../assets/siteimg/news/Kartika_Vana_Samaradhana_10_12_2023.pdf")} type="application/pdf" width="100%" height="900px">
                          <p>Invitation for Kartheeka Vana Samaradhana - 2023</p>
                        </object>                                          
                      </div>
                    </Col>
                  </Row>
                </Card> */}
                               
              </Col>
            </Row>
          </Container>
        </div>        
      </div>
    </>
  );
}

export default News;
