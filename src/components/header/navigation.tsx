import React from 'react';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useTranslation} from 'react-i18next';

const Navigation = () => {
  const { i18n } = useTranslation();

  const changeLanguageOnClick = (lng:any) => {
    i18n.changeLanguage(lng);
  };

  return(
      <> 
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <NavDropdown title={i18n.language === 'en-US' ? "English" : 'Turkish'} id="language-nav-dropdown">
                            <NavDropdown.Item onClick={() => changeLanguageOnClick('tr')}>Turkish</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguageOnClick('en-US')}>English</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </>
  )
}

export default Navigation