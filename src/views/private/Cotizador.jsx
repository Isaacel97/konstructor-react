import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { Carrusel } from "../components/ImagensSlides"
import { FiSend } from "react-icons/fi"
import SlideColegio from "../../assets/images/slides/KONSTRUCTOR WEB_2.jpg"
import SlideExp from "../../assets/images/slides/KONSTRUCTOR WEB_5.jpg"
import SlideCotizador from "../../assets/images/slides/KONSTRUCTOR WEB_1.jpg"
import { CategoryContainer } from "../components/CategoryContainer"
import Slidecontact from "../../assets/images/slides/KONSTRUCTOR WEB_8.jpg"
import { InputComp, CheckboxComp } from "../components/InputComp"
import { get, post } from "../../api/ws"
import { useAuthUser } from "react-auth-kit"
import { url } from "../../api/ws"
import { Tooltip } from "native-base"
import InfoIcon from "@mui/icons-material/Info"
//componente modal
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tu cotización
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.nombre}</h4>
        <p>
          La contrucción de tu casa, tendría un costo de $ {props.costo} pesos.
          Para más información, favor de contactanos al 442 449 9749 o
          contacto@konstruktor.com.mx con gusto te atenderemos.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function Cotizador() {
  //data user
  const auth = useAuthUser()
  useEffect(() => {
    document.title =
      "Calcula online el presupuesto para construir 1 casa; incluye mano de obra, albañiles en Querétaro"
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "¿Deseas construir una casa, local comercial, residencia, casa pequeña en Querétaro? Obtén en línea un presupuesto con precios actuales del costo de materiales, albañiles, licencia de construccíón, plano arquitectónico y permisos en el estado de queretaro"
      )
    getCondiciones()
  }, [])
  //id user
  const id = auth().id
  console.log("id storage", id)
  // metros cuadrados del terreno
  const [metros, setMetros] = useState("")
  // nombre de condicion
  const [condicion, setCondicion] = useState("")
  // activa o desactiva checkbox
  const [checked, setChecked] = useState(false)
  // almacenar arreglo condiciones desde DB
  const [condiciones, setCondiciones] = useState(null)
  // id condicion desde la base de datos
  const [condicion_id, setCondicion_id] = useState("")
  // para cambiar boton de calculo m2 a cotizar
  const [checkM2, setCheckM2] = useState(false)
  // cantidad de areas
  const [recamaras, setRecamaras] = useState("")
  const [banos, setBanos] = useState("")
  const [cocheras, setCocheras] = useState("")
  const [niveles, setNiveles] = useState("")
  // area de construccion
  const [dataArea, setDataArea] = useState("")
  //deshabilitar select
  const [isDisabled, setIsDisabled] = useState(false)
  //abre modal
  const [modalShow, setModalShow] = useState(false)

  //tipos acabados
  const [acabados, setAcabados] = useState([])
  const [acabado, setAcabado] = useState("")
  //datos de contacto
  const [nombre, setNombre] = useState("")
  // const [telefono, setTelefono] = useState('');

  //costo total
  const [costo, setCosto] = useState("")
  const [estudio, setEstudio] = useState(false)
  const [cuartoLavado, setCuartoLavado] = useState(false)
  const [cuartoServicio, setCuartoServicio] = useState(false)
  const [salaTV, setSalaTV] = useState(false)
  const [portico, setPortico] = useState(false)
  const [vestidor, setVestidor] = useState(false)
  const [otro, setOtro] = useState("")
  const [condicionInfo, setCondicionInfo] = useState("Información")

  // obtiene condiciones desde la base de datos
  const getCondiciones = async () => {
    const data = await get("cotizacion/condicion")
    setCondiciones(data)
  }

  // valores input area terreno
  const metrosChange = (event) => {
    const value = event.target.value
    setMetros(value)
    catCondicion(value)
  }

  // checkbox area terreno
  const handleCheckboxValue = (value) => {
    if (value) {
      setChecked("checked")
    } else {
      setChecked("")
    }
  }

  // input de checkbox area terreno
  const handleArea = (value) => {
    console.log("Area:", value)
    setMetros(value)
    catCondicion(value)
  }

  // valores selects recamaras, banos y chocheras
  const handleSelect = (setOption, event) => {
    console.log(event.target.value)
    console.log(event.target.name)
    setOption(event.target.value)
  }

  // asgina condicion segun area de terreno
  const catCondicion = (value) => {
    //AQUI ISA

    //DE LINEA
    if (value > condiciones[0].m2 && value < condiciones[1].m2) {
      setCondicion(condiciones[0].condicion)
      setCondicion_id(condiciones[0].id)
      setCondicionInfo('Terreno de hasta 99m2, con maximo de 3 recamaras, 1.5 baños y 2 cocheras. Acabados de linea')
    }
    //RESIDENCIAL
    else if (value >= condiciones[1].m2 && value < condiciones[2].m2) {
      setCondicion(condiciones[1].condicion)
      setCondicion_id(condiciones[1].id)
      setCondicionInfo('Terreno de 100m2 hasta 349m2, con maximo de 4 recamaras, 3 baños, 4 cocheras y otras opciones. Acabados residenciales o premium')
    }
    //CAMPESTRE
    else if (value >= condiciones[2].m2) {
      setCondicion(condiciones[2].condicion)
      setCondicion_id(condiciones[2].id)
      setCondicionInfo('Terreno desde 350m2, con maximo de 6 recamaras, 6 baños, 4 cocheras y otras opciones. Acabados de campestre o premium')
    } else {
      setCondicion("")
    }
  }

  // calcula area de construccion
  const calculaArea1 = async (
    recamaras,
    banos,
    cocheras,
    condicion_id,
    area
  ) => {
    const data = {}
    data["condicion_id"] = condicion_id
    data["recamaras"] = recamaras
    data["banos"] = banos
    data["cocheras"] = cocheras
    data["area"] = area
    const res = await post("cotizacion/calculoArea", data)
    setDataArea(res)
    const dataAcabados = await get(
      "cotizacion/acabados/condicion/" + condicion_id
    )
    setAcabados(dataAcabados)
    setIsDisabled(true)
  }

  const cotización = async (
    precioM2,
    areaConstruccion,
    recamaras,
    banos,
    cocheras,
    metros,
    COS,
    CUS,
    niveles,
    condicionId
  ) => {
    const precio = precioM2 * areaConstruccion
    console.log("Precio:", precio)
    console.log("PrecioM2:", precioM2)
    //useState para mostrar precio al cliente y dataCost para mandarlo a la base de datos
    setCosto(precio.toLocaleString("en"))
    const dataCost = precio.toLocaleString("en")
    const data = {}
    //data set cotizacion
    data["id_user"] = id
    data["metros"] = metros
    data["recamaras"] = recamaras
    data["banos"] = banos
    data["cocheras"] = cocheras
    data["condicionId"] = condicionId
    data["acabado"] = precioM2
    data["costo"] = dataCost
    //data envia email
    data["area"] = areaConstruccion
    data["COS"] = COS
    data["CUS"] = CUS
    data["niveles"] = niveles
    data["estudio"] = estudio
    data["cuarto_lavado"] = cuartoLavado
    data["cuarto_servicio"] = cuartoServicio
    data["sala_tv"] = salaTV
    data["portico"] = portico
    data["vestidor"] = vestidor
    data["otro"] = otro
    // data['nombre'] = nombre;
    // data['telefono'] = telefono;
    console.log("Cotización:", data)

    const resInsert = await post("cotizacion/createCotizacion", data)
    if (resInsert.estado) {
      console.log("Cotización enviada, lo logramos!!!")
      setNombre(resInsert.nombre)
      await post("cotizacion/enviaCotizacion", data)
    } else {
      console.log("Error al enviar cotización")
      console.log("algo hicimos mal #sadface2")
    }
  }

  const contenido = (
    <>
      <h2>
        Agenda una cita con uno de nuestros arquitectos o ingenieros civiles en
        Querétaro
      </h2>
      <br />
      <a href={url + '/login'}>
        <img
          src={Slidecontact}
          alt="Contactanos"
        />
      </a>
    </>
  )
  const handleChkbxEstudio = () => {
    setEstudio((prev) => !prev)
  }
  const handleChkbxCuartoLavado = () => {
    setCuartoLavado((prev) => !prev)
  }
  const handleChkbxCuartoServicio = () => {
    setCuartoServicio((prev) => !prev)
  }
  const handleChkbxSalaTV = () => {
    setSalaTV((prev) => !prev)
  }
  const handleChkbxVestidor = () => {
    setVestidor((prev) => !prev)
  }
  const handleChkbxPortico = () => {
    setPortico((prev) => !prev)
  }
  const handleOtro = (value) => {
    setOtro(value)
  }

  return (
    <div>
      <NavBar />
      <Carrusel
        imgSlide1={SlideColegio}
        descripcion1="Imagen Ing's y Arq's"
        imgSlide2={SlideExp}
        descripcion2="Imagen 20 años de experiencia"
        imgSlide3={SlideCotizador}
        descripcion3="Imagen Ingresar a cotizador en línea"
      />
      {/* inicio cotizador */}
      <Container>
        <div className="description mt-4">
          <h1>
            Obtén un presupuesto que incluye: mano de obra de maestro de obra,
            albañiles, materiales, acabados en Querétaro en función a tus
            necesidades
          </h1>
        </div>
        <div className="contact-page">
          <h2 className="text-center">Cotizador</h2>
          <br />
          <Row>
            <Col lg="12">
              <div className="inner-content">
                <Form className="ps-5 pe-5 pt-4 pb-4">
                  {/* m2 */}
                  <Row>
                    <Col md={12}>
                      <Form.Group controlId="forM2">
                        <Form.Label>¿Cúal es el área de tu terreno?</Form.Label>
                        {checked === "checked" ? (
                          <Form.Control
                            disabled
                            type="number"
                            placeholder="Calculando..."
                            value={metros}
                            onChange={metrosChange}
                            min={60}
                          />
                        ) : (
                          <Form.Control
                            type="number"
                            placeholder="Ingresa los m2"
                            value={metros}
                            onChange={metrosChange}
                            min={60}
                          />
                        )}
                        <CheckboxComp
                          control="area"
                          col="12"
                          text="No se el área de mi terreno"
                          onCheckboxChange={handleCheckboxValue}
                          onAreaChange={handleArea}
                        />
                        {checked === "checked" && (
                          <p className="text-center">
                            El área de tu terreno es de {metros} m2
                          </p>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* check m2 */}
                  <h6 className="mt-4 text-center">
                    <strong>
                      Condición: {condicion}{" "}
                      {condicion && (
                        <Tooltip
                          label={condicionInfo}
                          openDelay={500}
                          placement="top"
                          bg="indigo.500"
                          _text={{
                            color: "#fff",
                          }}
                        >
                          <InfoIcon />
                        </Tooltip>
                      )}
                    </strong>
                  </h6>
                  {metros > 60 && (
                    <>
                      <Row className="justify-content-md-center mt-3">
                        <Col
                          md={3}
                          className="mb-2"
                        >
                          <Form.Select
                            disabled={isDisabled}
                            value={recamaras}
                            onChange={(e) => handleSelect(setRecamaras, e)}
                            arial-label="Recamaras"
                          >
                            <option>Recamaras</option>
                            {condicion === condiciones[0].condicion && (
                              <>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </>
                            )}
                            {condicion === condiciones[1].condicion && (
                              <>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </>
                            )}
                            {condicion === condiciones[2].condicion && (
                              <>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </>
                            )}
                          </Form.Select>
                        </Col>
                        <Col
                          md={3}
                          className="mb-2"
                        >
                          <Form.Select
                            disabled={isDisabled}
                            value={banos}
                            onChange={(e) => handleSelect(setBanos, e)}
                            arial-label="Banos"
                          >
                            <option>Baños</option>
                            {condicion === condiciones[0].condicion && (
                              <>
                                <option value="1">1</option>
                                <option value="1.5">1.5</option>
                              </>
                            )}
                            {condicion === condiciones[1].condicion && (
                              <>
                                <option value="2">2</option>
                                <option value="2.5">2.5</option>
                                <option value="3">3</option>
                              </>
                            )}
                            {condicion === condiciones[2].condicion && (
                              <>
                                <option value="2.5">2.5</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </>
                            )}
                          </Form.Select>
                        </Col>
                        <Col md={3}>
                          <Form.Select
                            disabled={isDisabled}
                            value={cocheras}
                            onChange={(e) => handleSelect(setCocheras, e)}
                            arial-label="Cocheras"
                          >
                            <option>Cocheras</option>
                            {condicion === condiciones[0].condicion && (
                              <>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </>
                            )}
                            {condicion === condiciones[1].condicion && (
                              <>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </>
                            )}
                            {condicion === condiciones[2].condicion && (
                              <>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </>
                            )}
                          </Form.Select>
                        </Col>
                      </Row>
                      {/* checks */}
                      {metros >= 100 && (
                        <>
                          <Row className="justify-content-md-center mt-3">
                            <CheckboxComp
                              control="estudio"
                              col="auto"
                              text="Estudio"
                              handleChange={handleChkbxEstudio}
                            />
                            <CheckboxComp
                              control="cuarto_lavado"
                              col="auto"
                              text="Cuarto lavado"
                              handleChange={handleChkbxCuartoLavado}
                            />
                            <CheckboxComp
                              control="cuartos_servicio"
                              col="auto"
                              text="Cuarto de servicio"
                              handleChange={handleChkbxCuartoServicio}
                            />
                            <CheckboxComp
                              control="sala_tv"
                              col="auto"
                              text="Sala de TV"
                              handleChange={handleChkbxSalaTV}
                            />
                          </Row>
                          <Row className="justify-content-md-center mt-1">
                            <CheckboxComp
                              control="vestidor"
                              col="auto"
                              text="Vestidor"
                              handleChange={handleChkbxVestidor}
                            />
                            {metros >= 350 && (
                              <>
                                <CheckboxComp
                                  control="portico"
                                  col="auto"
                                  text="Portico"
                                  handleChange={handleChkbxPortico}
                                />
                              </>
                            )}
                          </Row>
                          <Row className="justify-content-md-center">
                            <InputComp
                              control="otro"
                              col="3"
                              controlId="otro"
                              type="text"
                              placeholder="Otro"
                              handleChange={handleOtro}
                            />
                          </Row>
                        </>
                      )}
                      {/* construccion estatica */}
                      <Row className="justify-content-md-center mt-2">
                        <Col className="mt-2">
                          <h6>Para tu casa tambien se contempla:</h6>
                          {condicion === condiciones[0].condicion && (
                            <p>Sala, comedor y cocina.</p>
                          )}
                          {condicion === condiciones[1].condicion && (
                            <p>
                              Sala, comedor, cocina, desayunador y vestidor.
                            </p>
                          )}
                          {condicion === condiciones[2].condicion && (
                            <p>
                              Sala, comedor, cocina, desayunador, vestidor y con
                              Isla.
                            </p>
                          )}
                          <p>
                            <strong>Construcción:</strong>{" "}
                            {dataArea.areaConstruccion}m2
                          </p>
                        </Col>
                      </Row>
                      {checkM2 && (
                        <>
                          <Row>
                            <Col
                              md={3}
                              className="mb-2 mt-2"
                            >
                              <Form.Select
                                value={niveles}
                                onChange={(e) => handleSelect(setNiveles, e)}
                                arial-label="Recamaras"
                              >
                                <option>Niveles</option>
                                {dataArea.primerNivel === true && (
                                  <>
                                    <option value="1">1</option>
                                  </>
                                )}
                                <option value="2">2</option>
                              </Form.Select>
                            </Col>
                            <Col
                              md={3}
                              className="mb-2 mt-2"
                            >
                              <Form.Select
                                value={acabado.id}
                                onChange={(e) => {
                                  handleSelect(setAcabado, e)
                                }}
                                arial-label="Acabados"
                              >
                                <option>Acabados</option>
                                {acabados.map((item) => (
                                  <option
                                    key={item.id}
                                    value={item.precio}
                                  >
                                    {item.acabado}
                                  </option>
                                ))}
                              </Form.Select>
                            </Col>
                          </Row>
                          {/* <Row>
                          <InputComp onInputChange={e => handleSelect(setNombre, e)} col="4" controlId="Nombre" label="Nombre" type="text" placeholder="Nombre" min={2}/>
                          <InputComp onInputChange={e => handleSelect(setTelefono, e)} col="4" controlId="Telefono" label="Telefono" type="number" placeholder="Telefono" min={10} max={10}/>
                          {nombre === "" && telefono === "" && <p className="text-danger">Para obtener tu cotización llena los campos de contacto</p>}
                        </Row> */}
                        </>
                      )}
                    </>
                  )}
                  <Row style={{ justifyContent: "flex-end" }}>
                    <Col
                      md={2}
                      className="mt-2"
                    >
                      {checkM2 && niveles !== "" && acabado !== "" && (
                        <Button
                          type="button"
                          id="calcular-m2"
                          size="lg"
                          variant="secondary"
                          onClick={() => {
                            cotización(
                              acabado,
                              dataArea.areaConstruccion,
                              recamaras,
                              banos,
                              cocheras,
                              metros,
                              dataArea.COS,
                              dataArea.CUS,
                              niveles,
                              condicion_id,
                              estudio,
                              cuartoLavado,
                              cuartoServicio,
                              salaTV,
                              vestidor,
                              portico,
                              otro
                            )
                            setModalShow(true)
                          }}
                        >
                          <FiSend />
                          Cotizar
                        </Button>
                      )}
                      {recamaras !== "" &&
                        banos !== "" &&
                        cocheras &&
                        !checkM2 && (
                          <Button
                            type="button"
                            id="form-submit"
                            size="lg"
                            variant="secondary"
                            onClick={() => {
                              calculaArea1(
                                recamaras,
                                banos,
                                cocheras,
                                condicion_id,
                                metros
                              )
                              setCheckM2(true)
                            }}
                          >
                            Calcular m2
                          </Button>
                        )}
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* fin vista */}
      <CategoryContainer contenido={contenido} />
      <Footer />
      <MyVerticallyCenteredModal
        nombre={nombre}
        costo={costo}
        show={modalShow}
        onHide={() => {
          setModalShow(false)
          // window.location.reload()
        }}
      />
    </div>
  )
}

export default Cotizador
