import React from "react";
import { Container, Row, Col } from "reactstrap";

function PageLoader() {
  return (
    <Container>
      <Row>
        <Col md="12">
          <div 
            className="d-flex justify-content-center align-items-center flex-column" 
            style={{height: '400px'}}
          >
            <div className="loader-spinner mb-3">
              <i 
                className="now-ui-icons loader_refresh spin text-info" 
                style={{fontSize: '40px'}}
              ></i>
            </div>
            <h5 className="text-muted">Loading...</h5>
            <p className="text-muted">Mana Vaikhanasam is Loading...</p>
          </div>
        </Col>
      </Row>
      
      <style jsx>{`
        .spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Container>
  );
}

export default PageLoader;