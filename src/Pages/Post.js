import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import '../Components/Shablon-style.css';

import SvitilnikContentPlinkaSanity from '../Components/ChildComponents/SvitilnikContentPlinkaSanity.js';
import ContentPlitkaSanity from '../Components/ChildComponents/ContentPlitkaSanity.js';
import LampContentPlitkaSanity from '../Components/ChildComponents/LampContentPlitkaSanity.js';
import PhotoColadz from '../Components/ChildComponents/PhotoColadz.js';
import GlobusBar from '../Components/ChildComponents/GlobusBar.js';



export default function Post() {

  return (
    <>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
      <Row className=" ml-3 ">
        <Col sm={12} md={12} lg={3} className="mt-3 ">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Годинники</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Світильники</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Лампи</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="for">Фотоколаж</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="five">Глобус-бар</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12} md={12} lg={9} >
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ContentPlitkaSanity  />
            </Tab.Pane> 
            <Tab.Pane eventKey="second">
              <SvitilnikContentPlinkaSanity />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <LampContentPlitkaSanity />
            </Tab.Pane>
            <Tab.Pane eventKey="for">
              <PhotoColadz />
            </Tab.Pane>
            <Tab.Pane eventKey="five">
              <GlobusBar />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </>
  );
}