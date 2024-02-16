import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
function Matrimony() {
  return (
    <>
      <div className="cd-section" id="matrimony">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 className="title">Vaikhanasa Matrimony</h2>                
              </Col>
            </Row>
            <Row>
              <Col className="mr-auto" md="12">                
                <h4 className="description">
                    Dear Vaikhanasa Bhandhu,
                        We are glad to announce the formation of Sri Vaikhnasa Vivaha Samachara Kendram as a part of Sri Vaikhanasa Maha Mandali activities, 
                        that is intended to facilitate the matrimonial selection amongst our Vaikhanasas seeking marriage alliances.
                    <br/><br/>
                        In this direction Sri Vaikhanasa Vivaha Samachara Kendram will be organizing Vivaha Parichaya Vedika's that will be informed timely on when and where they will be arranged. 
                        Please check the news page for the events to be organized by this samachara kendram.
                </h4>
              </Col>
            </Row>
            <br/><br/>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h4>
                  <b>PROCEDURE FOR PARTICIPATION IN THE PROGRAM : </b>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="mr-auto">                  
                    <div>
                      <table style={{width: "100%"}}>
                        <tr>
                          <th></th>
                          <th>Instructions</th>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Participation in the Paricheya Vedika is by Registration only.</td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Download the application form here.</td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Send the in application along with bio-data + photo of the bridegroom or bride to Shri. P. Gopala Krishna garu via telegram app.</td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Post verifying the details candidate will be added to the telegram group.</td>
                        </tr>
                        <tr>
                          <td>5.</td>
                          <td></td>
                        </tr>
                      </table>      
                    </div>                
              </Col>              
            </Row>
            <br/><br/>
            <Row>              
              <Col className="ml-auto mr-auto" md="12">
                <h4>
                  <b>FOR DETAILS CONTACT DETAILS</b>
                </h4>
                <div>
                  <table style={{width: "100%"}}>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Mobile</th>
                      {/* <th>Email</th> */}
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td>P. Gopala Krishna</td>
                      <td>Convener</td>
                      <td>9290492262</td>
                      {/* <td>peddinti.krishna1956@gmail.com</td> */}
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>T. Vikhanasa Charyulu</td>
                      <td>Chief Advisor</td>
                      <td>9885304787</td>
                      {/* <td>vikhanasacharyulu@gmail.com</td> */}
                    </tr>
                  </table>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <h4>
                  Details of all the paricheya vedikas conducted till now
                </h4>
                <div style={{textAlign: "left"}}>
                  <p> 1. First of this parichaya vedika is being arranged at our Ashramam building in the month of Feb-2016, please utilise the opportunity.</p>
                  <p> 2. Second vivaha paricheya vedika by Sri Vaikhanasa Vivaha Samachara Kendram was held on 08/May/2016 at Sri Vaikhanasa Ashramam, Hyderabad.</p>
                  <p> 3. After receiving the tremendous response as part of the first and second vivaha paricheya vedika's, Sri Vaikhanasa Vivaha Samachara Kendram is filled with more enthusiasm to organize its third paricheya vedika on 24/July/2016 at Sri VenuGopalaSwamy Temple, Rajahmundry with the help of Rajahmundry Vaikhanasa Society.</p>
                  <p> 4. 4th Vivaha Paricheya Vedika was held on 29/Jan/2017 at Sri Vikhanasa Ashramam, Plotno.205, Road No.2, P&T colony, Kakatiya Hospital road, Medipally, Hyderabad.</p>
                  <p> 5. 5th Vivaha Paricheya Vedika was held on 30/Apr/2017 at Sri Vikhanasa Ashramam, Plotno.205, Road No.2, P&T colony, Kakatiya Hospital road, Medipally, Hyderabad.</p>
                  <p> 6. 6th Vivaha Paricheya Vedika was held on 24/Dec/2017 at Sri Vikhanasa Ashramam, Plotno.205, Road No.2, P&T colony, Kakatiya Hospital road, Medipally, Hyderabad.</p>
                  <p> 7. 7th Vivaha Paricheya Vedika was held on 30/Sep/2018(Sunday) at Sri Vikhanasa Ashramam, Plotno.205, Road No.2, P&T colony, Kakatiya Hospital road, Medipally, Hyderabad.</p>
                  <p> 8. 8th Vivaha Paricheya Vedika was held on 31/Mar/2019(Sunday) at Sri Vikhanasa Ashramam, Plotno.205, Road No.2, P&T colony, Kakatiya Hospital road, Medipally, Hyderabad.</p>
                  <p> 9. 9th Vivaha Paricheya Vedika was held on 20/Oct/2019(Sunday) at Sri Vikhanasa Ashramam, Plotno.205, Road No.2, P&T colony, Kakatiya Hospital road, Medipally, Hyderabad.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div
          className="features-2 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg22.jpg") + ")"
          }}
        >
          <Container fluid>
            <Row>
              <Col className="mr-auto ml-auto" md="8">
                <h2 className="title">Trello lets you work more.</h2>
                <h4 className="description">
                  Trello’s boards, lists, and cards enable you to organize and
                  prioritize your projects in a fun, flexible and rewarding way.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons users_single-02"></i>
                  </div>
                  <h4 className="info-title">Work With Any Team</h4>
                  <p className="description">
                    Whether it’s for work or even the next family vacation,
                    Trello helps your team.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-danger icon-circle">
                    <i className="now-ui-icons business_chart-bar-32"></i>
                  </div>
                  <h4 className="info-title">A Productivity Platform</h4>
                  <p className="description">
                    Integrate the apps your team already uses directly into your
                    workflow.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-warning icon-circle">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>
                  <h4 className="info-title">Always In Sync</h4>
                  <p className="description">
                    No matter where you are, Trello stays in sync across all of
                    your devices.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Simpler. Smarter. Faster.</h2>
                <h4 className="description">
                  The CloudCheckr Cloud Management Platform (CMP) provides full
                  visibility and control to reduce costs, improve cybersecurity
                  posture, and automate critical tasks.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-success icon-circle">
                    <i className="now-ui-icons objects_globe"></i>
                  </div>
                  <h4 className="info-title">Asset Management</h4>
                  <p className="description">
                    Cross-account dashboards provide sophisticated reporting for
                    enterprise.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary icon-circle">
                    <i className="now-ui-icons education_atom"></i>
                  </div>
                  <h4 className="info-title">Resource Utilization</h4>
                  <p className="description">
                    CloudCheckr provides summary and detailed usage statistics
                    for resources.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons tech_watch-time"></i>
                  </div>
                  <h4 className="info-title">Self-Healing</h4>
                  <p className="description">
                    CloudCheckr enables users to save money, time, and effort.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Coming home, a pleasure!</h2>
                <h4 className="description">
                  Havenly is a convenient, personal and affordable way to
                  redecorate your home room by room. Collaborate with our
                  professional interior designers on our online platform.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card
                  className="card-background card-raised"
                  data-background-color=""
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg24.jpg") + ")"
                  }}
                >
                  <div className="info">
                    <div className="icon icon-white">
                      <i className="now-ui-icons business_bulb-63"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Collaborate on ideas</h4>
                      <p>
                        Your designer will come back to you with an initial set
                        of ideas.
                      </p>
                      <a
                        className="ml-3"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Find more...
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-background card-raised"
                  data-background-color=""
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg23.jpg") + ")"
                  }}
                >
                  <div className="info">
                    <div className="icon icon-white">
                      <i className="now-ui-icons business_badge"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Pick your designer</h4>
                      <p>
                        Havenly interior designers are vetted professionals and
                        real people.
                      </p>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Find more...
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-background card-raised"
                  data-background-color=""
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg25.jpg") + ")"
                  }}
                >
                  <div className="info">
                    <div className="icon icon-white">
                      <i className="now-ui-icons location_map-big"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Visualize your room</h4>
                      <p>
                        Share a floor plan, and we'll create a visualization of
                        your room.
                      </p>
                      <a
                        className="ml-3"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Find more...
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-5">
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title">Working is a pleasure</h2>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons location_world"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Hundreds of Components</h4>
                    <p>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use lets you do more than
                      ever before.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons sport_user-run"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Easy to Use</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons ui-2_time-alarm"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Fast Prototyping</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="7">
                <div className="tablet-container">
                  <img
                    alt="..."
                    src={require("assets/img/ipad2-inverted.png")}
                  ></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-6">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Working is a pleasure</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i className="now-ui-icons design-2_html5"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">For Developers</h5>
                    <p>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use, this powerfull UI Kit
                      lets you do more than ever before.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design_palette"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">For Designers</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="phone-container">
                  <img alt="..." src={require("assets/img/iphone2.png")}></img>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Bootstrap Grid</h5>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-success">
                    <i className="now-ui-icons files_single-copy-04"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Example Pages Included</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="features-7 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")"
          }}
        >
          <Col className="mr-auto ml-auto text-center" md="8">
            <h2 className="title">Working is a pleasure</h2>
            <h4 className="description">
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information.
            </h4>
          </Col>
          <Container fluid>
            <Row>
              <Col className="px-0" md="6">
                <Col sm="12">
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="now-ui-icons design-2_html5"></i>
                    </div>
                    <div className="description">
                      <h5 className="info-title">For Developers</h5>
                      <p className="description">
                        The moment you use Now UI Kit, you know you’ve never
                        felt anything like it. With a single use, this powerfull
                        UI Kit lets you do more than ever before.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="now-ui-icons design_palette"></i>
                    </div>
                    <div className="description">
                      <h5 className="info-title">For Designers</h5>
                      <p className="description">
                        The moment you use Now UI Kit, you know you’ve never
                        felt anything like it. With a single use, this powerfull
                        UI Kit lets you do more than ever before.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="now-ui-icons design-2_ruler-pencil"></i>
                    </div>
                    <div className="description">
                      <h5 className="info-title">For Artists</h5>
                      <p className="description">
                        The moment you use Now UI Kit, you know you’ve never
                        felt anything like it. With a single use, this powerfull
                        UI Kit lets you do more than ever before.
                      </p>
                    </div>
                  </div>
                </Col>
              </Col>
              <Col md="6">
                <div className="image-container">
                  <img alt="..." src={require("assets/img/ipad3.png")}></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="features-8 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg30.jpg") + ")"
          }}
        >
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Working is a pleasure</h2>
            <h4 className="description">
              Woodpecker.co is a follow-up automation SaaS founded in 2015.
              We’re an international team of 17, speaking 4 languages. Our
              mission is to enable all B2B companies to connect with their Ideal
              Customers.
            </h4>
          </Col>
          <Container>
            <Row>
              <Col md="3">
                <Card>
                  <div className="card-image">
                    <img
                      alt="..."
                      className="rounded"
                      src={require("assets/img/bg28.jpg")}
                    ></img>
                  </div>
                  <div className="info text-center">
                    <div className="icon">
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </div>
                    <h4 className="info-title">Reply detection</h4>
                    <p className="description">
                      If you get a reply, further follow-ups are automatically
                      stopped.
                    </p>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <div className="card-image">
                    <img
                      alt="..."
                      className="rounded"
                      src={require("assets/img/bg26.jpg")}
                    ></img>
                  </div>
                  <div className="info text-center">
                    <div className="icon">
                      <i className="now-ui-icons ui-1_calendar-60"></i>
                    </div>
                    <h4 className="info-title">Follow-up</h4>
                    <p className="description">
                      Just set a number of days that you want send a follow-up.
                    </p>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <div className="card-image">
                    <img
                      alt="..."
                      className="rounded"
                      src={require("assets/img/bg27.jpg")}
                    ></img>
                  </div>
                  <div className="info text-center">
                    <div className="icon">
                      <i className="now-ui-icons ui-1_send"></i>
                    </div>
                    <h4 className="info-title">Cold email</h4>
                    <p className="description">
                      Unlimited number of prospects daily with personalized
                      emails.
                    </p>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <div className="card-image">
                    <img
                      alt="..."
                      className="rounded"
                      src={require("assets/img/bg29.jpg")}
                    ></img>
                  </div>
                  <div className="info text-center">
                    <div className="icon">
                      <i className="now-ui-icons ui-2_like"></i>
                    </div>
                    <h4 className="info-title">Teamwork</h4>
                    <p className="description">
                      You and your teammates won’t address the same person
                      twice.
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
      </div>
    </>
  );
}

export default Matrimony;
