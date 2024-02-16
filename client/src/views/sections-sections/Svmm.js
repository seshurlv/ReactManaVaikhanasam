import React from "react";

// reactstrap components
import {  
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Svmm() {
  return (
    <>
      <div className="cd-section" id="svmm">
        <div className="blogs-1" id="blogs-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Sri Vikhanasa Maha Mandali, Hyderabad</h2>
                <br></br>
                <p>
                  The Andhra Pradesh Sri Vaikhanasa Maha Mandali, Hyderabad came into existence in 1975 with the initiation and blessings of 
                  Late.Sriman.Bhattar R. Partha Sarathi Iyengar, Tirupathi, to help and promote the welfare and unity among Vaikhanasas, particularly 
                  those living in and around Hyderabad.
                  <br/><br/>
                  This has provided a platform for the Vaikhanasa brothering in twin cities to improve the personal relations and work together for the welfare of the society. 
                  The Mandali has grown from strength to strength to the present state with a member ship greater than of 400, and celebrate silver jubilee function in year 2000.
                  <br/><br/>
                  The credit for the substantial growth of the mandali goes to all the presidents and EC members of the yester years starting 
                  from Late. Sri. Muttevi RamaKrishnama Charyulu. In the direction to reach the goal of the mandala, a piece of land was already purchased to construct the Vaikhanasa Ashramam and also Sri Venkateshwara Swamy temple, which is a significant achievement. I hope the support and cooperation of the members would continue to take the mandali activities to greater heights. The immediate goal for us is the construction of the Ashramam for which we seek help and involvement from all the members.
                  <br/><br/>
                  Preparedness for a change towards the changing times is a sign of progress. In the present age of knowledge and information explosion, 
                  it is felt necessary to document the information about Vaikhanasas in the state and intended to begin with the twin cities members. 
                  A fragmentary work was done in this direction by some mandal level Vaikhanasa organization which is a commendable job. 
                  However, a uniform documentation of the state Vaikhanasas in the form of a comprehensive directory is highly desirable. 
                </p>
                <Card className="card-plain card-blog title">                  
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="12">
                      <div>                     
                        <p>
                          <h4>Sri Vaikhanasa Maha Mandali First President</h4>
                          <h3>Late. Sriman Muthevi RamaKrishnama Charyulu</h3>
                        </p>
                      </div>
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/siteimg/svmm/Muttevi_Ramakrishnama_Charyulu.jpg")}
                        ></img>
                      </div>
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

export default Svmm;
