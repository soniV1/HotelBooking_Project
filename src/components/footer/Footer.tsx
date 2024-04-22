import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from 'react-bootstrap/Card';
import style from "./Footer.module.scss";
import {
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";

function Footer() {
  return (
    <footer className={style.footercont}>
      <Container>
        <Row>
          <Col className={style.footerBlock}>
            <h3>She Share</h3>
            <ul className={style.list}>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Career's</a>
              </li>
              <li>
                <a href="#">Follow Us</a>
                <a className={style.icon}>
                  <TiSocialInstagram />
                </a>
                <a className={style.icon}>
                  <TiSocialTwitter />
                </a>
                <a className={style.icon}>
                  <TiSocialLinkedin />
                </a>
              </li>
            </ul>
          </Col>
          <Col className={style.footerBlock}>
            <h3>Support</h3>
            <ul className={style.list}>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#"> cancellation policy</a>
              </li>
            </ul>
          </Col>
          <Col className={style.footerBlock}>
            <h3>Beacome a Host</h3>
            <ul className={style.list}>
              <li>
                <a href="#">Hosting Resources</a>
              </li>
              <li>
                <a href="#">Hosting Responsbility</a>
              </li>
              <li>
                <a href="#">Share a Room</a>
              </li>
              <li>
                <a href="#">Pets</a>
              </li>
            </ul>
          </Col>
          <Col className={style.footerBlock}>
            <h3>terms & privacy</h3>
            <ul className={style.list}>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
