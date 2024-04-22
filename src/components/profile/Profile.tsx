import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "./Profile.module.scss";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaDribbble,
} from "react-icons/fa";

function Profile() {
  return (
    <>
      <div className={style.card}>
        <div className={style.imgwrapper}>
          {" "}
          <img src="images/profile2.jpeg" alt="John" className={style.avatar} />
        </div>
        <div className={style.content}>
          {" "}
          <h3>jennifer lawrence</h3>
          <p className={style.title}>Hobbies - Acting,Playing</p>
          <p>Age - 30</p>
        </div>
        <div className={style.iconparent}>
          <div className={style.icon}>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
          <div className={style.icon}>
            {" "}
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
          <div className={style.icon}>
            {" "}
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
          <div className={style.icon}>
            {" "}
            <a href="#">
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
