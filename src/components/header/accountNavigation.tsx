import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Cookies } from 'react-cookie';

const AccountNavigation = () => {
  //const [cookies, setCookie] = useCookies(['localize']);
  const { i18n } = useTranslation();
  const cookie = new Cookies();
  const changeLanguageOnClick = (lng: string) => {
    cookie.set('localize', lng, { path: '/' });
    i18n.changeLanguage(lng);
  };


  const [modalShow, setModalShow] = useState(false);
  return(
      <>

        <div className="search-holder">
          <ul>
            <li>
              <a href="javascript:;" className="language-icons" onClick={() => setModalShow(true)}><i className="scape-basic-Globe"></i></a>
            </li>
            <li>
              <a href="#"><i className="scape-basic-Search"></i></a>
            </li>
            <li>
              <a href="#"><i className="scape-basic-Shopping-Cart"></i></a>
            </li>
          </ul>
        </div>
        <div className="account-navigation">
          <ul>
            <li>
              <a href="#" className="btn btn-purple-color">Kayıt Ol</a>
            </li>
            <li>
              <a href="#" className="btn btn-base-color">Giriş Yap</a>
            </li>
          </ul>
        </div>


        <Modal  show={modalShow} onHide={() => setModalShow(false)}  aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Bölge Ayarları
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Sitenin bölge, dil ve para birimi ayarlarını değiştirebilirsiniz
            </p>
              <Form.Select aria-label="Bölge Ayarları" value={i18n.language}  onChange={(e) => changeLanguageOnClick(e.target.value)}>
                <option value="tr">Türkiye (Türkçe)</option>
                <option value="en-US">United States (English)</option>
            </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>Close</Button>
          </Modal.Footer>
        </Modal>

      </>
  )
}

export default AccountNavigation