import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Registation from "../../pages/Registation/Registation";
import Login from "../../pages/Login/Login";
import style from "./Header.module.scss";
import { FaRegUser } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import { FaHotel } from "react-icons/fa";
// import Registation from '../../pages/Registation/Registation';

function Header() {
  const [show, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [showLogin, setIsModalOpen] = useState(false);

  const handleCloseModalLogin = () => {
    setIsModalOpen(false);
  };
  const handleShowModalLogin = () => {
    setIsModalOpen(true);
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <FaHotel className={style.hotelcon} />
        <Navbar.Brand href="#home" className={style.headerText}>
          She Share Vocation Rental
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <FaRegUser />
          <RiLoginBoxLine />
          <Form className="d-flex">
            <Button
              variant="outline-success"
              onClick={handleShowModal}
              className={style.reg}
            >
              Register
            </Button>

            <Registation show={show} handleCloseModal={handleCloseModal} />
            <Button
              variant="outline-success"
              onClick={handleShowModalLogin}
              className={style.log}
            >
              LogIn
            </Button>
            <Login
              showLogin={showLogin}
              handleCloseModalLogin={handleCloseModalLogin}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
