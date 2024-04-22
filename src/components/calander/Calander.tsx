import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date:any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date:any) => {
    setEndDate(date);
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>From:</Form.Label>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            className="form-control"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>To:</Form.Label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="dd/MM/yyyy"
            className="form-control"
          />
        </Form.Group>
      </Row>
    </Form>
  );
};

export default Calendar;
