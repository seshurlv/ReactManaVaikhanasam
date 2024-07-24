import React from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
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
                <h4>Following are some of the available books :</h4>
                
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Books;
