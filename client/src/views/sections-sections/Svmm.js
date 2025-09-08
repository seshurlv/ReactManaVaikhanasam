import React from "react";
import { useTranslation } from 'react-i18next';

// If the image is in the public/assets/siteimg/svmm folder, use this instead:
// const image1 = process.env.PUBLIC_URL + "/assets/siteimg/svmm/Muttevi_Ramakrishnama_Charyulu.jpg";

// reactstrap components
import {  
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Svmm() {
  const { t } = useTranslation();

  return (
    <>
      <div className="cd-section" id="svmm">
        <div className="blogs-1" id="blogs-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">{t('svmm.title')}</h2>
                <br></br>
                <p>
                  {t('svmm.history')}
                  <br/><br/>
                  {t('svmm.platform')}
                  <br/><br/>
                  {t('svmm.growth')}
                  <br/><br/>
                  {t('svmm.documentation')}
                </p>
                <Card className="card-plain card-blog title">                  
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="12">
                      <div>                     
                        <p>
                          <h4>{t('svmm.firstPresident')}</h4>
                          <h3>{t('svmm.presidentName')}</h3>
                        </p>
                      </div>
                      <div className="card-image">
                        <img
                          alt={t('svmm.imageAlt')}
                          className="img img-raised rounded"
                          src={"assets/siteimg/svmm/Muttevi_Ramakrishnama_Charyulu.jpg"}
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
