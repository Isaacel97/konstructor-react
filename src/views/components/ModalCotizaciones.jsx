import React, { useState } from "react"
import { Select, Modal, Text, Button } from "native-base"
import CheckIcon from "@mui/icons-material/Check"
import { ClassNameConfigurator } from "@mui/base"
function ModalCotizaciones(props) {
  const {
    modalVisible,
    setModalVisible,
    dataContact,
    dataStatus,
    updateStatus,
    setStatus,
    status,
  } = props
  const [placeholder, setPlaceholder] = useState("")
  return (
    <Modal
      isOpen={modalVisible}
      onClose={setModalVisible}
      size="xl"
      position={"center"}
      _backdrop={{
        bg: "black",
        opacity: 0.5,
      }}
      margin={0}
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Datos de contacto</Modal.Header>
        <Modal.Body>
          <Text>
            Nombre: {dataContact.user?.name}
            {dataContact.user?.apellido}
          </Text>
          <Text>Email: {dataContact.user?.email}</Text>
          <Text>Telefono: {dataContact.user?.telefono}</Text>
          <Select
            selectedValue={status}
            minWidth="200"
            accessibilityLabel="Select status"
            placeholder={placeholder || dataContact.status?.status}
            // placeholder="chooose"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => {
              setPlaceholder(
                dataStatus.filter((item) => {
                  return parseInt(itemValue) === item.id
                })[0].status
              )
              setStatus(itemValue)
            }}
          >
            {dataStatus.map((item, index) => (
              <Select.Item
                key={index}
                label={item.status}
                value={item.id}
              />
            ))}
            {/* <Select.Item label="Sin cita" value="1" />
                <Select.Item label="Cita" value="2" />
                <Select.Item label="Cotizado" value="3" />
                <Select.Item label="Aprobado" value="4" />
                <Select.Item label="Rechazado" value="5" /> */}
          </Select>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setModalVisible(false)
              }}
            >
              Cerrar
            </Button>
            <Button
              onPress={() => {
                updateStatus(dataContact.id)
                setModalVisible(false)
              }}
            >
              Guardar
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default ModalCotizaciones
