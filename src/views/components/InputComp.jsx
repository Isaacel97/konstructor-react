import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const InputComp = (props) => {
  return (
    <Col md={props.col}>
    <Form.Group controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder} min={2}/>
    </Form.Group>
  </Col>
  )
}

export const CheckboxComp = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.onCheckboxChange(event.target.checked);
  };

  return (
    <>
    <Col md={props.col}>
      <Form.Check
        type="checkbox"
        label={props.text}
        checked={checked}
        onChange={handleChange}
      />
    </Col>
    {checked &&
      <Row className="mt-2" style={{justifyContent: "center"}}>
        <InputComp col="6" controlId="largo" label="Largo:" type="number" placeholder="Largo" min={2}/>
        <InputComp col="6" controlId="ancho" label="Ancho:" type="number" placeholder="Ancho" min={2}/>
      </Row>
    }
    </>

  )
}
