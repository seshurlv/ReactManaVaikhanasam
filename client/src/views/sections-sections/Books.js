import React from "react";
import { useTranslation } from 'react-i18next';
//import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import bookscentre from "assets/docs/sri-priya-books-centre.jpg";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Books() {
  const { t } = useTranslation();

  return (
    <>
      <div className="cd-section" id="books">
        <div className="team-1">
          <Container>           
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">{t('books.title')}</h2>                                
                <h4>{t('books.description')}</h4>
                <br/>
                <Col md="6" className="ml-auto mr-auto">
                  <img alt={t('books.altText')} src={bookscentre} style={{width: '100%', height: 'auto'}} />
                </Col>                
                <br/>
                <h4>{t('books.purchaseInfo')}</h4>
                <br/>
                <Col md="12">
                  <div>
                    {/* <object aria-label="Book preview: Sri Priya Books Centre PDF" data={"/assets/docs/sri-priya-books-centre.pdf"} type="application/pdf" width="100%" height="900px" /> */}
                    <iframe src="/assets/docs/sri-priya-books-centre.pdf" width="100%" height="900px" allowfullscreen="true" title="Book preview: Sri Priya Books Centre PDF"></iframe>
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
