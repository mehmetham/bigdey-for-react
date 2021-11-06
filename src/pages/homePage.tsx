import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Translation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Translation> 
              {t => <h1>{t('title')} Anasayfa</h1>} 
            </Translation>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;

