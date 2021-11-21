import React from 'react';
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './_footer.scss'

const Footer = () => {
    return(
        <>
          <div id="footer" className="footer">
            <Container>
              <div className="footer-navigation">
                <ul>
                  <li><a href="#">Biz Ne Yapıyoruz?</a></li>
                  <li><a href="#">Sıkça Sorulan Sorular</a></li>
                  <li><a href="#">Basın Odası</a></li>
                  <li><a href="#">İş Olanakları</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Tedarikçiler</a></li>
                  <li><a href="#">Arkadaşına Öner</a></li>
                </ul>
              </div>
              <div className="footer-socials">
                <ul>
                  <li>
                    <a href="https://facebook.com/" target="_blank">
                      <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/" target="_blank">
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/" target="_blank">
                      <FontAwesomeIcon icon={["fab", "youtube"]} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-copyright">
              © 2021 BigDey. Tüm hakları saklıdır. <a href="#">Gizlilik Sözleşmesi</a> | <a href="#">Kullanıcı Sözleşmesi</a>
              </div>
            </Container>
          </div>
        </>
    )
}
export default Footer;