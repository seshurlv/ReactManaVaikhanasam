import React from "react";
import { useTranslation } from 'react-i18next';
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
const getColumns = (t) => [
  { name: "Sno", header: t('directory.gridHeaders.sno'), minWidth: 10, maxWidth: 70, defaultFlex: 1 },
  { name: "Name", header: t('directory.gridHeaders.name'), minWidth: 500, defaultFlex: 1, type: 'string' },
  { name: "Father", header: t('directory.gridHeaders.father'), minWidth: 300, maxWidth: 1000, defaultFlex: 1 },
  { name: "Gotram", header: t('directory.gridHeaders.gotram'), minWidth: 200, maxWidth: 1000, defaultFlex: 1 },  
];

// define grid styles here
const gridStyle = { minHeight: 650 };

// define tabular data here
const dataSource = DirectoryItems;
  
function Directory() {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="cd-section" id="directory">
        <div className="team-1" data-background-color="gray">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">{t('directory.title')}</h2>
                <h4 className="description">
                  {t('directory.description')}
                  <br/><br />
                  {t('directory.addDetails')} <b>{t('directory.email')}</b>                  
                </h4>
                <br/><br/>
                <ReactDataGrid
                  idProperty="id"
                  columns={getColumns(t)}
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
