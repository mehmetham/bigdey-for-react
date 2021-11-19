import React from 'react';
import Logo from './logo';
import Navigation from './navigation';
import AccountNavigation from './accountNavigation';
import Announcement from './announcement';
import {Container, Row, Col} from 'react-bootstrap';
import './style/header.scss';

const Header = () => {
    return(
        <>

          <div id="header" className="header">
            <Announcement />
            <Container>
              <Row>
                <Col xs={5}>
                  <Logo />
                </Col>
                <Col xs={7}>
                  <AccountNavigation />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Navigation />
                </Col>
              </Row>
            </Container>
          </div> 
        </>
    )
}

export default Header