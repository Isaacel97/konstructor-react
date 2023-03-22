import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Select, Modal, Button, Text } from "native-base";
import CheckIcon from '@mui/icons-material/Check';
import LottieLoader from '../../components/lotties/LottieLoader';
import { get } from '../../../api/ws'

const Cotizaciones = () => {
  useEffect(() => {
    document.title = "Cotizaciones";
    document.querySelector('meta[name="description"]').setAttribute("content", "Gestion de cotizaciones");
    getData();
  }, []);

  const [loader, setLoader] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState('');
  const [dataStatus, setDataStatus] = useState([]);
  const [dataContact, setDataContact] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (dataContact.length !== 0) {
      setModalVisible(true);
    }
  }, [dataContact])

  const getData = async () => {
    const response = await get('cotizacion/listaCotizaciones');
    const getStatus = await get('cotizacion/status');
    setData(response);
    setDataStatus(getStatus);
    setLoader(false);
  }

  const updateStatus = async () => {
    console.log("status enviado", status);
  }

  return (
    <>
      {loader ? <LottieLoader /> :
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
                    {data ? data.map((row, index) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {row.id}
                        </TableCell>
                        <TableCell align="center">
                            <Button variant="ghost" onPress={
                                () => setDataContact(row)
                            }>{row.user.name}{row.user.apellido}</Button>
                        </TableCell>
                        <TableCell align="center">{row.fecha_cotizacion}</TableCell>
                        <TableCell align="center">{row.m2}</TableCell>
                        <TableCell align="center">{row.recamaras}</TableCell>
                        <TableCell align="center">{row.baños}</TableCell>
                        <TableCell align="center">{row.cocheras}</TableCell>
                        <TableCell align="center">${row.total}</TableCell>
                        <TableCell align="center">{row.status.status}</TableCell>
                        <TableCell align="center">{row.condicion.condicion}</TableCell>
                        <TableCell align="center">{row.acabado.acabado}</TableCell>
                    </TableRow>
                    )) : <TableRow><TableCell align="center" colSpan={11}>No hay datos</TableCell></TableRow>}
                </TableBody>
            </Table>
        </TableContainer>
      }
      <Modal isOpen={modalVisible} onClose={setModalVisible} size="xl">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Datos de contacto</Modal.Header>
          <Modal.Body>
            <Text>Nombre: {dataContact.user?.name}{dataContact.user?.apellido}</Text>
            <Text>Email: {dataContact.user?.email}</Text>
            <Text>Telefono: {dataContact.user?.telefono}</Text>
            <Select 
            minWidth="40" 
            accessibilityLabel='Select status' 
            placeholder={dataContact.status?.status}
            _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}}
            mt={1}
            onValueChange={(itemValue) => {
              setStatus(itemValue);
              console.log("value", itemValue);
            }}
            selectedValue={status}
              >
               {dataStatus.map((item, index) => (
                    <Select.Item key={index} label={item.status} value={item.id} />
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
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setModalVisible(false);
            }}>
                Cerrar
              </Button>
              <Button onPress={() => {
              updateStatus();
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