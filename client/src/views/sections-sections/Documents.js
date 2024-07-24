import React from "react";
import "@inovua/reactdatagrid-community/index.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

const downloadApplicationsItemList = [
    {"SNO": 1, "NAME": "Sri Vaikhanasa Maha Mandali Vivaha Paricheya Vedika Matrimony Application Form (Telugu)", "FILEURL":  require("assets/docs/vaikhanasa_marriage_application_telugu.pdf"), "IMGURL": require("assets\\siteimg\\common\\pdf_download.jpg")},
    {"SNO": 2, "NAME": "Sri Vaikhanasa Maha Mandali Vivaha Paricheya Vedika Matrimony Application Form (English)", "FILEURL":  require("assets/docs/vaikhanasa_marriage_application_english.pdf"), "IMGURL": require("assets\\siteimg\\common\\pdf_download.jpg")}
];

const downloadBooksList = [
    {"SNO": 1, "NAME": "Vaikhanasa Pooja Vidhanam", "FILEURL":  require("assets/docs/PoojaVidhanam_Kalyaano_pdf_1.pdf"), "IMGURL": require("assets\\siteimg\\common\\pdf_download.jpg")},
    {"SNO": 2, "NAME": "Vaikhanasalu Ante Evaru By Rompicherla Yogananda Acharyulu", "FILEURL":  require("assets/docs/Vaikhanasulu_ante_evaru.pdf"), "IMGURL": require("assets\\siteimg\\common\\pdf_download.jpg")}
];

function Documents() {
  return (
    <>
      <div className="cd-section" id="documents">
        <div className="team-1">
          <Container>           
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">Documents</h2>                
                <h4>Following are the documents that can be downloaded :</h4>
                    <p>
                        All downloadable documents will be available here for free download here. <br/><br/>
                        Users can make use of this service to download required documents / application forms / any circulars / or any other important announcements released for here
                    </p>                        
                    <br/>
                    <h4>
                        APPLICATIONS
                    </h4>
                    <table id="downloadApplicationsTable" class="table table-bordered table-condensed table-hover table-striped">
                        <tr>
                            <th>SNO</th>
                            <th>NAME</th>                                
                            <th>FILE</th>
                        </tr>
                        {downloadApplicationsItemList.map((item, index) => (
                            <tr key={index}>                                
                                <td class='dataColumnStyle textCenter'>{item.SNO}</td>  
                                <td class='dataColumnStyle'>{item.NAME}</td>
                                <td class='dataColumnStyle textCenter tdDownloadImageColumn'><a class='cursorPointer' href={item.FILEURL} download><img alt="" src={item.IMGURL}/></a></td>
                            </tr>
                        ))}
                        
                    </table> 
                    <br/>
                    <h4>
                        OTHERS
                    </h4>
                    <table id="downloadOthersTable" class="table table-bordered table-condensed table-hover table-striped">
                        <tr>
                            <th>SNO</th>
                            <th>NAME</th>                                
                            <th>FILE</th>
                        </tr>
                        {downloadBooksList.map((item, index) => (
                            <tr key={index}>                                
                                <td class='dataColumnStyle textCenter'>{item.SNO}</td>  
                                <td class='dataColumnStyle'>{item.NAME}</td>
                                <td class='dataColumnStyle textCenter tdDownloadImageColumn'><a class='cursorPointer' href={item.FILEURL} download><img alt="" src={item.IMGURL}/></a></td>
                            </tr>
                        ))}
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