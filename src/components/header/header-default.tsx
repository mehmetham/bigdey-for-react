import React from 'react';
import Logo from './logo';
import Navigation from './navigation';
import AccountNavigation from './accountNavigation';
import {Row, Col} from 'react-bootstrap';

const HeaderDefault = () => {
    return(
      <>
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
      </>
    )
}

export default HeaderDefault