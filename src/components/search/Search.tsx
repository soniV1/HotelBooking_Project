import { Button, Col, Form, Row } from "react-bootstrap";
import style from "./Search.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
function Search() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };
  return (
    <>
      {/* <Form> */}
      <Row className={style.searchContainer}>
        <Col xs={11}>
          <Row>
            <Col sm={7}>
              <label className={style.label}> Check in - Check out</label>
              <Row className={style.picker}>
                <Col>
                  <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    selectsStart
                    startDate={startDate}
                    minDate={new Date()}
                    endDate={endDate}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className={style.start}
                    placeholderText="Check in"
                  />
                </Col>
                <Col>
                  <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className={style.end}
                    placeholderText="Check out"
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <label className={style.label}> Search Destination</label>
              <Row className={style.rightPicker}>
                <input
                  type="text"
                  placeholder="Search Destination"
                  className={style.input}
                />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={1}>
          <label className={style.buttonLabel}> search</label>
          <Row className={style.buttonPicker}>
            <button className={style.button}>Search</button>
          </Row>
        </Col>
      </Row>
      {/* </Form> */}
    </>
  );
}

export default Search;
