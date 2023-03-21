import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Select, Modal, Button, Text } from "native-base";
import CheckIcon from '@mui/icons-material/Check';

function createData(id, name, fecha, m2, recamaras, banos, cocheras, precio, status, condicion, acabado) {
    return { id, name, fecha, m2, recamaras, banos, cocheras, precio, status, condicion, acabado };
  }
  
const rows = [
createData(1, 'Juan Lopez', '2021-10-10', 100, 2, 1, 1, 1000000, 'Sin cita', 'De linea', 'De linea'),
createData(2, 'Ernesto Cruz', '2021-10-10', 100, 3, 3, 2, 1000000, 'Sin cita', 'Residencial', 'Residencial'),
createData(3, 'Marco Castillo', '2021-10-10', 100, 2, 1, 1, 1000000, 'Sin cita', 'Campestre', 'Premium'),
createData(4, 'Maria Hernandez', '2021-10-10', 100, 2, 1, 1, 1000000, 'Sin cita', 'Campestre', 'Campestre'),
createData(5, 'Juan Lopez', '2021-10-10', 100, 2, 1, 1, 1000000, 'Sin cita', 'De linea', 'De linea'),
];

const Cotizaciones = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [status, setStatus] = useState('');
    const [dataContact, setDataContact] = useState([]);

    const openModal = (rows) => {
        setModalVisible(true);
        setDataContact(rows);
    }
  return (
    <>
        <TableContainer  component={Paper} style={{margin: 16}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>ID</TableCell>
                        <TableCell align="center">Nombre</TableCell>
                        <TableCell align="center">Fecha</TableCell>
                        <TableCell align="center">M2</TableCell>
                        <TableCell align="center">Recamaras</TableCell>
                        <TableCell align="center">Baños</TableCell>
                        <TableCell align="center">Cocheras</TableCell>
                        <TableCell align="center">Precio</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Condicion</TableCell>
                        <TableCell align="center">Acabado</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {row.id}
                        </TableCell>
                        <TableCell align="center">
                            <Button variant="ghost" onPress={
                                () => {openModal(row)}
                            }>{row.name}</Button>
                        </TableCell>
                        <TableCell align="center">{row.fecha}</TableCell>
                        <TableCell align="center">{row.m2}</TableCell>
                        <TableCell align="center">{row.recamaras}</TableCell>
                        <TableCell align="center">{row.banos}</TableCell>
                        <TableCell align="center">{row.cocheras}</TableCell>
                        <TableCell align="center">${row.precio}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        <TableCell align="center">{row.condicion}</TableCell>
                        <TableCell align="center">{row.acabado}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      
      <Modal isOpen={modalVisible} onClose={setModalVisible} size="xl">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Datos de contacto</Modal.Header>
          <Modal.Body>
            <Text>Nombre: {dataContact.name}</Text>
            <Text>Email: {dataContact.fecha}</Text>
            <Text>Telefono: {dataContact.m2}</Text>
            <Select 
            minWidth="40" 
            accessibilityLabel='Select status' 
            placeholder={dataContact.status}
            _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}}
            mt={1}
            onValueChange={(itemValue) => {
                setStatus(itemValue);
                console.log(status);
              }}>
                <Select.Item label="Sin cita" value="1" />
                <Select.Item label="Cita" value="2" />
                <Select.Item label="Cotizado" value="3" />
                <Select.Item label="Aprobado" value="4" />
                <Select.Item label="Rechazado" value="5" />
            </Select>  
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setModalVisible(false);
            }}>
                Cerrar
              </Button>
              <Button onPress={() => {
              setModalVisible(false);
            }}>
                Guardar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
  </>
  )
}

export default Cotizaciones