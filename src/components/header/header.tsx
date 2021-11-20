import React from 'react';
import Logo from './logo';
import Navigation from './navigation';
import AccountNavigation from './accountNavigation';
import Announcement from './announcement';
import {Row, Col} from 'react-bootstrap';
import './_header.scss';

const Header = () => {
    return(
      <>
        <div className="header-background">
          <div id="header" className="header">
              <Announcement />
              <div className="pre-header">
                <Row className="pre-header-top">
                  <Col className="pre-header-logo" xs={5}>
                    <Logo />
                  </Col>
                  <Col className="pre-header-account" xs={7}>
                    <AccountNavigation />
                  </Col>
                </Row>
                <Row className="pre-header-navigation">
                  <Col md={12}>
                    <Navigation />
                  </Col>
                </Row>
              </div>
            </div> 
        </div>
      </>
    )
}

export default Header