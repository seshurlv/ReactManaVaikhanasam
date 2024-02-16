import React from "react";
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import DirectoryItems from './DirectorySourceFile.json';

// reactstrap components
import {  
  Container,
  Row,
  Col
} from "reactstrap";

const filterValue = [
  { name: 'Name', operator: 'contains', type: 'string', value: '' },
  { name: 'Father', operator: 'contains', type: 'string', value: '' },
  { name: 'Gotram', operator: 'contains', type: 'string', value: '' },
];

// core components
const columns = [
  { name: "Sno", header: "Sno", minWidth: 10, maxWidth: 70, defaultFlex: 1 },
  { name: "Name", header: "Name", minWidth: 500, defaultFlex: 1, type: 'string' },
  { name: "Father", header: "Father", minWidth: 300, maxWidth: 1000, defaultFlex: 1 },
  { name: "Gotram", header: "Gotram", minWidth: 200, maxWidth: 1000, defaultFlex: 1 },  
];

// define grid styles here
const gridStyle = { minHeight: 650 };

// define tabular data here
const dataSource = DirectoryItems;
  
function Directory() {
  return (
    <>
      <div className="cd-section" id="directory">
        <div className="team-1" data-background-color="gray">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">Vaikhanasa Directory</h2>
                <h4 className="description">
                  Vaikhanasa Directory is the service to make information available regarding our vaikhanasas residing at different parts of this world. 
                  Please let us know the names of the persons not listed in this table through the feedback form available in contact page. 
                  We will make the best possible effort to include the names as early as posssible.
                  <br/><br />
                  Please send the below details to get added into this list: Name (full name with surname), Gotram, Fathers Name, Native place, Phone, Email, Address, Profession, 
                  photo via email provided below @ <b>seshu.manavaikhanasam@gmail.com</b>                  
                </h4>
                <br/><br/>
                <ReactDataGrid
                  idProperty="id"
                  columns={columns}
                  dataSource={dataSource}
                  style={gridStyle}
                  defaultFilterValue={filterValue}
                />                
              </Col>
            </Row>            
          </Container>
        </div>
      </div>
    </>
  );
}

export default Directory;
