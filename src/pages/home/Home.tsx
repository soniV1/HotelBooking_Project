import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "./Home.module.scss";
import Card from "react-bootstrap/Card";
import Calendar from "../../components/calander/Calander";
import Profile from "../../components/profile/Profile";
import City from "../../components/city/City";
import Search from "../../components/search/Search";

const citys = ["banglore", "goa", "HP", "UK", "kashmir", "shimla", "keral"];
function Home() {
  return (
    <>
      <Container className={style.cont}>
        <Row
          className={style.backgroudimg}
          style={{ background: `url(images/hotal2.jpeg)` }}
        >
          <Col>
            <button className={style.shareRoom}>Share A Room</button>
          </Col>
          <Col>
            <button className={style.rentRoom}>Rent A Room</button>
          </Col>
          <Col>
            <ul className={style.link}>
              <li>
                <a href="#">Safety</a>
              </li>
              <li>
                {" "}
                <a href="#">Adventure</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* //second row------ */}
        <Row className={style.ro2}>
          <Col sm={8}>
            <h3>Book Your Stay Now</h3>
            <Search />
          </Col>
          <Col sm={4}>
            <Profile />
          </Col>
        </Row>

        {/* //third row------ */}

        <Row className={`${style.ro3}`}>
          {citys.map((city, index) => (
            <Col sm={2} key={`${city}-${index}`} className="d-flex mb-5">
              <City cityName={city} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
