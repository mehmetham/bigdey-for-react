import React, {useEffect, useState} from 'react';
import Request from '../utils/request';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Translation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/sass/style.scss';

const HomePage = () => {

  const request = new Request();

  const [name, setNames] = useState(null);

  const getName = async() => {
    await request.get(`${process.env.REACT_APP_API_URL}posts/123/comments`, null)
      .then(response => {
        setNames(response.data.data[0].name);
      })
      .catch(error => {
          console.log(error);
      });
  }

  useEffect(() => {
    getName();
  }); // empty dependency array means this effect will only run once (like componentDidMount in classes)

  
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Translation> 
              {t => <h1>{t('title')} {name}</h1>} 
            </Translation>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;

