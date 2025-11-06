import React from "react";
import { useTranslation } from 'react-i18next';
import "@inovua/reactdatagrid-community/index.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

const getDownloadApplicationsItemList = (t) => [
    {"SNO": 1, "NAME": t('documents.items.matrimonyTelugu'), "FILEURL":  require("assets/docs/vaikhanasa_marriage_application_telugu.pdf"), "IMGURL": ("assets/siteimg/common/pdf_download.jpg")},
    {"SNO": 2, "NAME": t('documents.items.matrimonyEnglish'), "FILEURL":  require("assets/docs/vaikhanasa_marriage_application_english.pdf"), "IMGURL": ("assets/siteimg/common/pdf_download.jpg")}
];

const getDownloadBooksList = (t) => [
    {"SNO": 1, "NAME": t('documents.items.poojaVidhanam'), "FILEURL":  require("assets/docs/PoojaVidhanam_Kalyaano_pdf_1.pdf"), "IMGURL": ("assets/siteimg/common/pdf_download.jpg")},
    {"SNO": 2, "NAME": t('documents.items.vaikhanasaluAnte'), "FILEURL":  require("assets/docs/Vaikhanasulu_ante_evaru.pdf"), "IMGURL": ("assets/siteimg/common/pdf_download.jpg")}
];

function Documents() {
  const { t } = useTranslation();
  
  const downloadApplicationsItemList = getDownloadApplicationsItemList(t);
  const downloadBooksList = getDownloadBooksList(t);
  
  return (
    <>
      <div className="cd-section" id="documents">
        <div className="team-1">
          <Container>           
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">{t('documents.title')}</h2>                
                <h4>{t('documents.description')}</h4>
                    <p>
                        {t('documents.info')}<br/><br/>{t('documents.usage')}
                    </p>                        
                    <br/>
                    <h4>
                        {t('documents.applications')}
                    </h4>
                    <table id="downloadApplicationsTable" className="table table-bordered table-condensed table-hover table-striped">
                        <thead>
                            <tr>
                                <th>{t('documents.tableHeaders.sno')}</th>
                                <th>{t('documents.tableHeaders.name')}</th>                                
                                <th>{t('documents.tableHeaders.file')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {downloadApplicationsItemList.map((item, index) => (

                                <tr key={index}>                                
                                    <td class='dataColumnStyle textCenter'>{item.SNO}</td>  
                                    <td class='dataColumnStyle'>{item.NAME}</td>
                                    <td class='dataColumnStyle textCenter tdDownloadImageColumn'><a class='cursorPointer' href={item.FILEURL} download><img alt="" src={item.IMGURL}/></a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table> 
                    <br/>
                    <h4>
                        {t('documents.others')}
                    </h4>
                    <table id="downloadOthersTable" class="table table-bordered table-condensed table-hover table-striped">
                        <thead>
                            <tr>
                                <th>{t('documents.tableHeaders.sno')}</th>
                                <th>{t('documents.tableHeaders.name')}</th>                                
                                <th>{t('documents.tableHeaders.file')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {downloadBooksList.map((item, index) => (
                                <tr key={index}>                                
                                    <td class='dataColumnStyle textCenter'>{item.SNO}</td>  
                                    <td class='dataColumnStyle'>{item.NAME}</td>
                                    <td class='dataColumnStyle textCenter tdDownloadImageColumn'><a class='cursorPointer' href={item.FILEURL} download><img alt="" src={item.IMGURL}/></a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table> 
                </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Documents;