import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const InputComp = (props) => {
  const [valor, setValor] = useState('');

  const handleChange = (event) => {
    setValor(event.target.value);
    props.onInputChange(event);
  }; 

  return (
    <Col md={props.col}>
      <Form.Group controlId={props.controlId}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control value={valor} onChange={handleChange} type={props.type} placeholder={props.placeholder} min={2} max={10}/>
      </Form.Group>
    </Col>
  )
}

export const CheckboxComp = (props) => {
  const [checked, setChecked] = useState(false);
  const [largo, setLargo] = useState('');
  const [ancho, setAncho] = useState('');

  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.onCheckboxChange(event.target.checked);
  };

  const handleInput = (setOption, event) => {
    setOption(event.target.value);
    console.log('Input:', event.target.value);
  };

  const calcularArea = () => {
    let area = largo * ancho;
    props.onAreaChange(area);
  }

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
    {checked && props.control === 'area' &&
      <Row className="mt-2" style={{justifyContent: "center"}}>
        <InputComp onInputChange={e => handleInput(setLargo, e)}  col="4" controlId="largo" label="Largo:" type="number" placeholder="Largo" min={2}/>
        <InputComp onInputChange={e => handleInput(setAncho, e)} col="4" controlId="ancho" label="Ancho:" type="number" placeholder="Ancho" min={2}/>
        <Col md={4} className="mt-4">
          <Button
            type="button"
            id="form-submit"
            size="lg"
            variant="secondary"
            onClick={calcularArea}>
            Calcular
          </Button>
        </Col>
      </Row>
    }
    </>

  )
}
