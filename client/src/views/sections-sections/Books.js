import React from "react";
//import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Books() {
  return (
    <>
      <div className="cd-section" id="books">
        <div className="team-1">
          <Container>           
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">Books</h2>                                
                <h4>There are some books available on Vaikhanasa Agamam at "Sri Priya Book Center", Miyapur, Hyderabad</h4>
                <br/>
                <Col md="6" className="ml-auto mr-auto">
                  <img alt="Sri Priya Book Center" src={require("assets/docs/sri-priya-books-centre.jpg")} style={{width: '100%', height: 'auto'}} />
                </Col>                
                <br/>
                <h4>Below are the list of books available for purchase and for latest availability please scan the QR code above or call the number mentioned above.</h4>
                <br/>
                <Col md="12">
                  <div>
                    <object data={require("assets/docs/sri-priya-books-centre.pdf")} type="application/pdf" width="100%" height="900px" />                                          
                  </div>
                </Col>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Books;
