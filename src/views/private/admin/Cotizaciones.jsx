import React, { useState, useEffect } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import { TablePagination } from "@mui/material"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import {
  Select,
  Modal,
  Button,
  Text,
  Alert,
  VStack,
  HStack,
  IconButton,
  View,
} from "native-base"
import CloseIcon from "@mui/icons-material/Close"
import LottieLoader from "../../components/lotties/LottieLoader"
import { get, post } from "../../../api/ws"
import { useAuthUser } from "react-auth-kit"
import ModalCotizaciones from "../../components/ModalCotizaciones"
import { width } from "@mui/system"

const Cotizaciones = () => {
  const auth = useAuthUser()
  const [loader, setLoader] = useState(true)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState([])
  const [alertColor, setAlertColor] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [status, setStatus] = useState("")
  const [dataStatus, setDataStatus] = useState([])
  const [dataContact, setDataContact] = useState([])
  const [data, setData] = useState([])

  //PAGINATOR
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  //

  useEffect(() => {
    if (dataContact.length !== 0) {
      setModalVisible(true)
    }
  }, [dataContact])

  useEffect(() => {
    document.title = "Cotizaciones"
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Gestion de cotizaciones")
    getData()
  }, [])

  const getData = async () => {
    setLoader(true)
    const response = await get("cotizacion/listaCotizaciones")
    const getStatus = await get("cotizacion/status")
    setData(response)
    setDataStatus(getStatus)
    setLoader(false)
  }

  const updateStatus = async (idCotizacion) => {
    //preparando data para enviar por post
    const sendData = {}
    sendData["id"] = idCotizacion
    sendData["status_id"] = status
    //obteniendo respuesta y mostrar alerta con mensaje
    const response = await post(`cotizacion/setStatus`, sendData)
    setShowAlert(true)
    setAlertMessage(response)
    if (response.estado) {
      getData()
      setAlertColor("success")
    } else {
      setAlertColor("error")
    }
    setTimeout(() => {
      setShowAlert(false)
    }, 2000)
  }

  const handleModal = (row) => {
    row !== dataContact ? setDataContact(row) : setModalVisible(true)
  }

  return (
    <>
      {loader ? (
        <LottieLoader />
      ) : (
        <View>
          <TableContainer
            component={Paper}
            style={{
              padding: 32,
              margin: "auto",
              width: "100%",
            }}
          >
            {/* Alert status */}
            {showAlert && (
              <Alert
                maxW="400"
                status={alertColor}
                zIndex={9999}
                position="fixed"
                top="10px"
                right="10px"
              >
                <VStack
                  space={2}
                  flexShrink={1}
                  w="100%"
                >
                  <HStack
                    flexShrink={1}
                    space={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <HStack
                      flexShrink={1}
                      space={2}
                      alignItems="center"
                    >
                      <Alert.Icon />
                      <Text
                        fontSize="md"
                        fontWeight="medium"
                        color="coolGray.800"
                      >
                        {alertMessage.message}
                      </Text>
                    </HStack>
                    <IconButton
                      variant="unstyled"
                      _focus={{ borderWidth: 0 }}
                      icon={<CloseIcon size="3" />}
                      _icon={{ color: "coolGray.600" }}
                      onPress={() => setShowAlert(false)}
                    />
                  </HStack>
                </VStack>
              </Alert>
            )}
            <Table
              sx={{
                minWidth: 650,
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              }}
              aria-label="simple table"
            >
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
                {data ? (
                  data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:nth-of-type(odd)": {
                            backgroundColor: "#f5f5f5",
                          },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            variant="link"
                            onPress={() => handleModal(row)}
                          >
                            {row.user.name}
                            {row.user.apellido}
                          </Button>
                        </TableCell>
                        <TableCell align="center">
                          {row.fecha_cotizacion}
                        </TableCell>
                        <TableCell align="center">{row.m2}</TableCell>
                        <TableCell align="center">{row.recamaras}</TableCell>
                        <TableCell align="center">{row.baños}</TableCell>
                        <TableCell align="center">{row.cocheras}</TableCell>
                        <TableCell align="center">${row.total}</TableCell>
                        <TableCell align="center">
                          {row.status.status}
                        </TableCell>
                        <TableCell align="center">
                          {row.condicion.condicion}
                        </TableCell>
                        <TableCell align="center">
                          {row.acabado.acabado}
                        </TableCell>
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <TableCell
                      align="center"
                      colSpan={11}
                    >
                      No hay datos
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </View>
      )}
      <ModalCotizaciones
        dataContact={dataContact}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        dataStatus={dataStatus}
        status={status}
        setStatus={setStatus}
        updateStatus={updateStatus}
      />
    </>
  )
}

export default Cotizaciones
