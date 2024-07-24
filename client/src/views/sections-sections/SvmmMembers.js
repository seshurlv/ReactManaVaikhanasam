import React from "react";

import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';

// reactstrap components
import {  
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
const gridStyle = { minHeight: 403 }; 

const itemsGridColumns = [
  // { name: "SNO", header: "Sno", minWidth: 10, maxWidth: 70, defaultFlex: 1 },
  { name: "NAME", header: "Name", minWidth: 300, defaultFlex: 1, render: ({ data }) => data.TITLE + ' ' + data.SURNAME + ' ' + data.NAME, type: 'string' },
  { name: "POSITION", header: "Position", minWidth: 150, maxWidth: 1000, defaultFlex: 1 },
  { name: "MOBILE", header: "Mobile", minWidth: 120, maxWidth: 150, defaultFlex: 1, },
  //{ name: "IMG", header: "Image", maxWidth: 1000, defaultFlex: 1, render: ({data}) => data.IMG },  
];

const WorkingCommitee2014 = [
  {  
  "TITLE":"Dr.",
  "SURNAME":"Deevi",
  "NAME":"Sarangapani Iyengar",
  "POSITION":"President",
  "MOBILE":"9848072382"  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"D S V L",
    "NAME":"Narasimha Charyulu",
    "POSITION":"Vice-President",
    "MOBILE":""  
  }
  ,{   
    "TITLE":"",
    "SURNAME":"Khandavilli ",
    "NAME":"Prabhakara Charyulu",
    "POSITION":"Vice-President",
    "MOBILE":""  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Parasaram",
    "NAME":"Sesha Sai",
    "POSITION":"Vice-President",
    "MOBILE":"9492873235"  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"A",
    "NAME":"Gopala Krishnama Charyulu",
    "POSITION":"Secretary",
    "MOBILE":""  
  }
  ,{
    "TITLE":"",
    "SURNAME":"Vadapally ",
    "NAME":"Shobhan",
    "POSITION":"Joint-secretary",
    "MOBILE":"9949042216"  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Rompicherla",
    "NAME":" Murali Krishna",
    "POSITION":"Joint-secretary",
    "MOBILE":"9550251037"  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Peddinti",
    "NAME":" Gopala Krishna",
    "POSITION":"Treasurer",
    "MOBILE":"9290492262"
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Tamirisa",
    "NAME":" Vikhanasa Charyulu",
    "POSITION":"Organising Secretary",
    "MOBILE":"9885304787"  
  }
  ];

const WorkingCommitee2023 = [
  {  
  "TITLE":"Dr.",
  "SURNAME":"Deevi",
  "NAME":"Sarangapani Iyengar",
  "POSITION":"President",
  "MOBILE":"9848072382"  
  }
  ,{    
    "TITLE":"Dr.",
    "SURNAME":"Rompicherla ",
    "NAME":"Srinivasa Deekshitulu",
    "POSITION":"Vice-President",
    "MOBILE":"9949699246"  
  }
  ,{   
    "TITLE":"",
    "SURNAME":"Sribhashyam ",
    "NAME":"Ananta Charyulu",
    "POSITION":"Vice-President",
    "MOBILE":"9618239338"  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Parasaram",
    "NAME":"Sesha Sai",
    "POSITION":"Vice-President",
    "MOBILE":"9492873235"  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Deevi",
    "NAME":"Surendra Bhishek",
    "POSITION":"Secretary",
    "MOBILE":"9177306144"  
  }
  ,{
    "TITLE":"",
    "SURNAME":"Vadapally ",
    "NAME":"Shobhan",
    "POSITION":"Joint-secretary",
    "MOBILE":"9949042216"  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Rompicherla",
    "NAME":" Murali Krishna",
    "POSITION":"Joint-secretary",
    "MOBILE":"9550251037"  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Peddinti",
    "NAME":" Gopala Krishna",
    "POSITION":"Treasurer",
    "MOBILE":"9290492262"
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Tamirisa",
    "NAME":" Vikhanasa Charyulu",
    "POSITION":"Organising Secretary",
    "MOBILE":"9885304787"  
  }
  ];

const CurrentWorkingCommitee = [
  {  
  "TITLE":"Dr.",
  "SURNAME":"Deevi",
  "NAME":"Sarangapani Iyengar",
  "POSITION":"President",
  "MOBILE":"9848072382"  
  },
  {    
    "TITLE":"",
    "SURNAME":"Tamirisa",
    "NAME":" Vikhanasa Charyulu",
    "POSITION":"Organising President",
    "MOBILE":"9885304787"  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Ganjam",
    "NAME":"Ashok Babu",
    "POSITION":"Vice-President",
    "MOBILE":"9440916984"  
  }
  ,{   
    "TITLE":"",
    "SURNAME":"Govardhanam",
    "NAME":"Anantaram",
    "POSITION":"Vice-President",
    "MOBILE":"9866352054"  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Parasaram",
    "NAME":"Sesha Sai",
    "POSITION":"Vice-President",
    "MOBILE":"9492873235"  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Deevi",
    "NAME":"Yogananda Narasimha Deekshitulu",
    "POSITION":"Cheif Secretary",
    "MOBILE":"9959677000"  
  }
  ,{
    "TITLE":"",
    "SURNAME":"Rompicherla",
    "NAME":"Mohan",
    "POSITION":"Organising Secretary",
    "MOBILE":"9441831333"  
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Rompicherla",
    "NAME":" Murali Krishna",
    "POSITION":"Joint-secretary",
    "MOBILE":"9550251037"  
  }
  ,{
    "TITLE":"",
    "SURNAME":"Vedantam",
    "NAME":"Raghava Deekshitulu",
    "POSITION":"Joint-secretary",
    "MOBILE":"9849282050"  
  }  
  ,{    
    "TITLE":"",
    "SURNAME":"Sampara",
    "NAME":"Raghu Kumar",
    "POSITION":"Treasurer",
    "MOBILE":"9440635800"
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Rompicherla",
    "NAME":"Lakshmi Venkata Seshu Kumar",
    "POSITION":"Organisers",
    "MOBILE":"9959933822"
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Vadapally",
    "NAME":"ShobanBabu",
    "POSITION":"Organisers",
    "MOBILE":"9949042216"
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Deevi",
    "NAME":"Parthasarathi",
    "POSITION":"Commitee Member",
    "MOBILE":"9010479358"
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Sribhashyam",
    "NAME":"AnanthaCharyulu",
    "POSITION":"Commitee Member",
    "MOBILE":"9441512376"
  }
  ,{    
    "TITLE":"",
    "SURNAME":"S V",
    "NAME":"SatyanarayanaCharyulu",
    "POSITION":"Commitee Member",
    "MOBILE":"9492827299"
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Khandavalli",
    "NAME":"Venkata Ramana Murthy",
    "POSITION":"Commitee Member",
    "MOBILE":"9848832538"
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Agnihotram",
    "NAME":"SrinivasaCharyulu",
    "POSITION":"Commitee Member",
    "MOBILE":"9440035460"
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Sampara",
    "NAME":"Janardhan",
    "POSITION":"Commitee Member",
    "MOBILE":""
  }
  ,{    
    "TITLE":"",
    "SURNAME":"Deevi",
    "NAME":"Rambabu",
    "POSITION":"Commitee Member",
    "MOBILE":""
  }
  ];

const CommiteeGrid = ({id, title, data, style}) => (
  <>
    <h4><b>{title}</b></h4>
    <ReactDataGrid
      idProperty={id}
      columns={itemsGridColumns}
      dataSource={data}
      style={style}
    />
  </>
);

function SvmmMembers() {
  return (
    <>
      <div className="cd-section" id="svmmmembers">
        <div className="blogs-1" id="blogs-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 className="title">Sri Vikhanasa Maha Mandali Working Committee Members, Hyderabad</h2>
                <br></br>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="12">
                      <div>
                        <p>Vaikhanasa Maha Mandali elects its governing body by elections and the elected body will be handling their roles and responsibilities.</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">                      
                      <CommiteeGrid id="grid3" title="Working Comittee 2024" data={CurrentWorkingCommitee} style={{minHeight: 800}} />                      
                    </Col>                    
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                  <Row>
                    <Col md="12">
                      <CommiteeGrid id="grid2" title="Working Comittee Until 2023" data={WorkingCommitee2023} style={gridStyle}></CommiteeGrid>                      
                    </Col>                    
                  </Row>
              </Col>
            </Row>
            <Row>              
              <Col md="12">          
                <CommiteeGrid id="grid1" title="2014-2016 Working Comittee" data={WorkingCommitee2014} style={gridStyle}></CommiteeGrid>
              </Col>              
            </Row>
          </Container>
        </div>        
      </div>
    </>
  );
}

export default SvmmMembers;
