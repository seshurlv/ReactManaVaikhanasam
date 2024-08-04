import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
function VaikhanasaPrabha() {
  return (
    <>
      <div className="cd-section" id="vaikhanasaprabha">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 className="title">Vaikhanasa Prabha</h2>                
              </Col>
            </Row>
            <Row>
              <Col className="mr-auto" md="12">                
                <h4 className="description">
                  Dear Vaikhanasa's<br/>
                  To participate in the "Gyana Yagna" run by Sri Vaikhanasa Prabha, please subscribe by contributing to the "Sasvatha Nidhi" &#8377; 5000/-.<br/>
                  All the subscribers names will be published in the Vaikhanasa Prabha <br/>and<br/> also life time free distribution of Vaikhanasa Prabha to the member.
                </h4>
              </Col>
            </Row>
            <br/><br/>
            <img
              alt="..."
              className="img img-raised rounded responsive-img"              
              src={require("assets/siteimg/prabha/Subscribe.jpg")}
            ></img>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h4>
                  <b>PROCEDURE FOR SUBSCRIBING TO VAIKHANASA PRABHA : </b>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="mr-auto">                  
                    <div>
                      <table style={{width: "100%"}}>
                        <tr>
                          <th>Sno</th>
                          <th>Duration</th>
                          <th>Amount</th>
                        </tr>
                        <tr>
                          <td>1.</td>
                          <td>Single Copy</td>
                          <td>&#8377; 20</td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>1 year</td>
                          <td>&#8377; 200</td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>3 year</td>
                          <td>&#8377; 600</td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>5 year</td>
                          <td>&#8377; 1000</td>
                        </tr>
                        <tr>
                          <td>5.</td>
                          <td>Life time</td>
                          <td>&#8377; 5000</td>
                        </tr>
                      </table>   
                      <h4>
                        <b>For more information please contact 9440262641 / srivaikhanasaprabha@gmail.com </b><br/><br/><br/>
                        <b>*** You can also GPAY the amount to 98850 69888 post confirming with the above contact number. ***</b>
                      </h4>
                    </div>                
              </Col>              
            </Row>                     
          </Container>
        </div>        
      </div>
    </>
  );
}

export default VaikhanasaPrabha;
