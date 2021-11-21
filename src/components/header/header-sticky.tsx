import React from 'react';
import Navigation from './navigation';
import AccountNavigation from './accountNavigation';
import {Row, Col} from 'react-bootstrap';

const HeaderSticky = () => {
    return(
      <>
        <Row className="pre-header-top">
          <Col className="pre-header-navigation" xs={8}>
            <a href="/">
              <img src="assets/images/logo-icon-dark.png" alt="BigDey.com" title="BigDey.com" height="40"/>
            </a>
            <Navigation />
          </Col>
          <Col className="pre-header-account" xs={4}>
            <AccountNavigation />
          </Col>
        </Row>
      </>
    )
}

export default HeaderSticky