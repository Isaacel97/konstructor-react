import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "@mui/material/styles"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import MenuIcon from "@mui/icons-material/Menu"
import DashboardIcon from "@mui/icons-material/Dashboard"
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import HomeIcon from "@mui/icons-material/Home"
import Dashboard from "../private/admin/Dashboard"
import Cotizaciones from "../private/admin/Cotizaciones"
import { makeStyles } from "@mui/styles"
import { Dimensions } from "react-native-web"
import { Button, Container, Text, View } from "native-base"
import estilos from "../../assets/js/styles/estilos"
import { useAuthUser, useAuthHeader } from "react-auth-kit"

// medida del drawer
const { width } = Dimensions.get("window")
const drawerWidth = width * 0.15

// estilos del drawer
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    top: 0,
    height: "100%",
    position: "fixed",
  },
}))

const StyledDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    top: 0,
    height: "100%",
    position: "fixed",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
})

const StyledList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
}))

// componente del drawer
const MenuDrawer = () => {
  const [admin, setAdmin] = useState(false)

  const authHeader = useAuthHeader()
  const auth = useAuthUser()
  //const signOut = useSignOut()

  useEffect(() => {
    if (auth()) {
      validateToken()
    }
  }, [])

  const validateToken = async () => {
    const token = authHeader().split(" ")[1]
    console.log(token)
    if (token) {
      console.log("realizando auth")
      const res = await fetch("https://icandelario-dev.com/back/public/api/user/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()
      if (data.type === 2) {
        navigate("/", { replace: true })
      }
      console.log(data);
      if (data.type === 1) setAdmin(true)
    }
  }
  // conts para el drawer
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = useState("dashboard")

  // funcion para abrir y cerrar el drawer
  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  // funcion para seleccionar el tab
  const handleTabChange = (newValue) => {
    setSelectedTab(newValue)
  }
  const exit = () => {
    navigate("/", { replace: true })
  }
  // vista
  return (
    <>
      {admin && (
        <View style={estilos.container}>
          {/* Header */}
          <Container>
            <Button
              onPress={handleDrawerOpen}
              variant="ghost"
              leftIcon={<MenuIcon />}
              style={{ marginStart: open ? drawerWidth : 0 }}
            >
              <Text>Menu</Text>
            </Button>
          </Container>
          {/* Drawer */}
          <StyledDrawer
            variant="persistent"
            open={open}
            classes={{ paper: classes.drawerPaper }}
          >
            <StyledList>
              <Button
                leftIcon={<DashboardIcon />}
                variant="ghost"
                onPress={() => handleTabChange("dashboard")}
              >
                <Text>Gráficos</Text>
              </Button>
              <Button
                leftIcon={<RecentActorsIcon />}
                variant="ghost"
                onPress={() => handleTabChange("cotizaciones")}
              >
                <Text>Cotizaciones</Text>
              </Button>
              <Button
                leftIcon={<HomeIcon />}
                variant="ghost"
                onPress={() => exit()}
              >
                <Text>Volver</Text>
              </Button>
            </StyledList>
          </StyledDrawer>
          {/* Return component seleted */}
          {selectedTab === "dashboard" && <Dashboard />}
          {selectedTab === "cotizaciones" && <Cotizaciones />}
        </View>
      )}
    </>
  )
}

export default MenuDrawer
