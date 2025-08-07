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
        {/* <div className="blogs-2" id="blogs-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Latest Blogposts 2</h2>
                <br></br>
                <Row className="justify-content-center">
                  <Col md="5">
                    <Card className="card-plain card-blog">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/examples/card-blog7.jpg")}
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <h6 className="category text-info">Enterprise</h6>
                        <CardTitle tag="h5">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Alexa brings hands-free TV to more devices
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          Alexa’s latest trick is offering a hands-free TV
                          viewing experience, that will allow consumers to turn
                          on or off their television, change inputs, fast
                          forward, rewind and more, without having to first
                          invoke a specific skill, or even press a button on
                          their remote.{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="5">
                    <Card className="card-plain card-blog">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/examples/card-blog9.jpg")}
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <h6 className="category text-success">M&amp;A</h6>
                        <CardTitle tag="h5">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Uber, Yandex combine ridesharing and UberEATS in
                            $3.72B. JV
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          As Uber works through a huge amount of internal
                          management turmoil, the company is also consolidating
                          and rationalizing more of its international business.
                          Today, the company announced it will be combining its
                          rides-on-demand business and UberEATS.{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col md="5">
                    <Card className="card-plain card-blog">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/examples/card-blog16.jpg")}
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <h6 className="category text-info">Music</h6>
                        <CardTitle tag="h5">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            The Affect Music Has On Different Teens
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          Music is something that every person has his or her
                          own specific opinion about. Different people have
                          different taste, and various types of music have many
                          ways of leaving an impact on someone.{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="5">
                    <Card className="card-plain card-blog">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/examples/card-blog15.jpg")}
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <h6 className="category text-success">Broadcasting</h6>
                        <CardTitle tag="h5">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Radio networks to broadcast a common radio format
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          Radio broadcasting is a unidirectional wireless
                          transmission over radio waves intended to reach a wide
                          audience. Stations can be linked in radio networks to
                          broadcast a common radio format.{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="blogs-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Latest Blogposts 3</h2>
                <br></br>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="4">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/examples/card-blog10.jpg")}
                        ></img>
                      </div>
                    </Col>
                    <Col md="8">
                      <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Rover raised $65 million for pet sitting
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Finding temporary housing for your dog should be as easy
                        as renting an Airbnb. That’s the idea behind Rover,
                        which raised $65 million to expand its pet sitting and
                        dog-walking businesses..{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/olivia.jpg")}
                        ></img>
                        <span>Katie Roof</span>
                      </div>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/examples/card-blog11.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="8">
                      <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          MateLabs mixes machine learning with IFTTT
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        If you’ve ever wanted to train a machine learning model
                        and integrate it with IFTTT, you now can with a new
                        offering from MateLabs. MateVerse, a platform where
                        novices can spin out machine...{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/james.jpg")}
                        ></img>
                        <span>John Mannes</span>
                      </div>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised rounded"
                            src={require("assets/img/examples/card-blog12.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="8">
                      <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          US venture investment ticks up in Q2 2021
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Venture investment in U.S. startups rose sequentially in
                        the second quarter of 2021, boosted by large, late-stage
                        financings and a few outsized early-stage rounds in tech
                        and healthcare..{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/michael.jpg")}
                        ></img>
                        <span>Devin Coldewey</span>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="blogs-4" id="blogs-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Latest Blogposts 4</h2>
                <br></br>
                <Card className="card-plain card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-blog13.jpg")}
                      ></img>
                    </a>
                  </div>
                  <h6 className="category text-info">Fashion</h6>
                  <CardTitle tag="h3">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Groupon Moves Into Flash Fashion
                    </a>
                  </CardTitle>
                  <h5 className="card-description">
                    More acquisitions for Groupon to widen the net of consumers
                    using its platform for more than daily deals. Today it is
                    announcing the acquisition of ideeli, a flash fashion
                    retailer, for $43 million in...
                  </h5>
                  <Button
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Read More
                  </Button>
                </Card>
                <Card className="card-plain card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/examples/card-blog14.jpg")}
                      ></img>
                    </a>
                  </div>
                  <h6 className="category text-success">Entertainment</h6>
                  <CardTitle tag="h3">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      When music and technology collide
                    </a>
                  </CardTitle>
                  <h5 className="card-description">
                    Some might say that technology is killing the music
                    industry. But if you look around, there’s a beautiful
                    marriage there — the music industry is evolving every day,
                    and artists are embracing technology in new and innovative
                    ways...
                  </h5>
                  <Button
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Read More
                  </Button>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="blogs-5" data-background-color="gray">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Latest Blogposts 5</h2>
                <Row>
                  <Col md="4">
                    <Card className="card-blog">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img rounded"
                            src={require("assets/img/card-blog2.jpg")}
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <h6 className="category text-info">Features</h6>
                        <CardTitle tag="h5">
                          That’s One Way To Ditch Your Passenger
                        </CardTitle>
                        <p className="card-description">
                          As near as we can tell, this guy must have thought he
                          was going over backwards and tapped the rear...
                        </p>
                        <CardFooter>
                          <div className="author">
                            <img
                              alt="..."
                              className="avatar img-raised"
                              src={require("assets/img/julie.jpg")}
                            ></img>
                            <span>Mike John</span>
                          </div>
                          <div className="stats stats-right">
                            <i className="now-ui-icons tech_watch-time"></i>5
                            min read
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="card-blog">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img rounded"
                            src={require("assets/img/examples/card-blog18.jpg")}
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <h6 className="category text-danger">Animals</h6>
                        <CardTitle tag="h5">
                          Shark Week: How to Watch It Like a Scientist
                        </CardTitle>
                        <p className="card-description">
                          Just when you thought it was safe to turn on your
                          television, the Discovery Channel's "Shark Week"...
                        </p>
                        <CardFooter>
                          <div className="author">
                            <img
                              alt="..."
                              className="avatar img-raised"
                              src={require("assets/img/julie.jpg")}
                            ></img>
                            <span>Mike John</span>
                          </div>
                          <div className="stats stats-right">
                            <i className="now-ui-icons tech_watch-time"></i>5
                            min read
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="card-blog">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img rounded"
                            src={require("assets/img/examples/card-blog17.jpg")}
                          ></img>
                        </a>
                      </div>
                      <CardBody>
                        <h6 className="category text-info">Cars</h6>
                        <CardTitle tag="h5">
                          Who's Afraid of the Self-Driving Car?
                        </CardTitle>
                        <p className="card-description">
                          It's been 60 years since the cover of Popular
                          Mechanics magazine gave us the promise of flying
                          cars...
                        </p>
                        <CardFooter>
                          <div className="author">
                            <img
                              alt="..."
                              className="avatar img-raised"
                              src={require("assets/img/olivia.jpg")}
                            ></img>
                            <span>Johanna Zmud</span>
                          </div>
                          <div className="stats stats-right">
                            <i className="now-ui-icons ui-2_favourite-28"></i>
                            2.4K
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div> */}
      </div>
    </>
  );
}

export default Ashramam;
