import React from "react";
import { Card } from "react-bootstrap";
import style from "./City.module.scss";
interface IProps {
  cityName: string;
}
function City({ cityName }: IProps) {
  return (
    <>
      <Card className={style.city}>
        <Card.Img variant="top" src={`images/${cityName}.jpeg`} />
        <Card.Body>
          <Card.Text>
            <h3>
              <a> {cityName} </a>
            </h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default City;
