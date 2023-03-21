import React, { useEffect, useState } from "react"
import {
  View,
  Stack,
  FormControl,
  Input,
  Button,
  HStack,
  VStack,
  Image,
  Text,
} from "native-base"
import { NavBar } from "../components/NavBar"
import imgSala from "../../assets/images/listing-01.jpg"
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineInfoCircle,
} from "react-icons/ai"
import axios from "axios"
const Login = () => {
  useEffect(() => {
    document.title =
      "Si vas a construir una casa en Querétaro, cotiza Ws 4424499749"
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Obtén un presupuesto en línea y conoce los permisos que necesitas para construir casa, local o residencia en Querétaro; ingenieros civiles y arquitectos experimentados"
      )
  }, [])

  const [correo, setCorreo] = useState("")
  const [correoError, setCorreoError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const [showPassword, setShowPassword] = useState(false)

  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

  const [errors, setErrors] = useState(false)

  const handleSubmit = async () => {
    console.log("Correo:", correo)
    console.log("Contraseña:", password)

    const response = await axios.post("http://127.0.0.1:8000/api/user/login/", {
      email: correo,
      password,
    })
    console.log("response", response)

    if (response.status === 401) {
      setPasswordError(response.message)
    }
    if (response.status === 404) {
      setCorreoError(response.message)
    }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleErrors = () => {
    const validated = validate()
    if (validated) {
      setCorreoError(false)
      setPasswordError(false)
      handleSubmit()
    }
  }

  function validate() {
    let x = 0
    if (correo === "" || !validEmail.test(correo)) {
      setCorreoError("Ingresa un correo válido")
      x = 1
    } else {
      setCorreoError("")
    }
    if (password === "" || !validPassword) {
      setPasswordError("Ingresa una contraseña válida")
      x = 1
    } else if (password.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres")
    } else {
      setPasswordError("")
    }
    if (x === 1) return false
    return true
  }

  return (
    <>
      <NavBar />
      <View
        flex={1}
        alignItems="center"
        mt={4}
      >
        <h2>Iniciar sesión</h2>
        <HStack
          style={{ width: "90%", height: "100%" }}
          space={1}
          mt={3}
        >
          <VStack flex={1}>
            <Image
              source={imgSala}
              size="full"
              resizeMode="cover"
              alt={"Foto sala"}
            />
          </VStack>
          <VStack flex={1}>
            <FormControl>
              <Stack>
                <FormControl.Label htmlFor="email">Correo</FormControl.Label>
                <Input
                  placeholder="ejemplo@email.com"
                  id="email"
                  variant={"filled"}
                  value={correo}
                  onChangeText={setCorreo}
                  type="email"
                  isInvalid={correoError}
                />
                <FormControl isInvalid={correoError}>
                  <FormControl.ErrorMessage leftIcon={<AiOutlineInfoCircle />}>
                    {correoError}
                  </FormControl.ErrorMessage>
                </FormControl>
              </Stack>
              <Stack>
                <FormControl.Label htmlFor="password">
                  Contraseña
                </FormControl.Label>
                <HStack>
                  <Input
                    placeholder="Ingresa tu password"
                    id="password"
                    variant={"filled"}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    type="password"
                    isInvalid={passwordError}
                  />
                  <Button
                    aria-label="Mostrar/ocultar contraseña"
                    onPress={togglePassword}
                    size="md"
                    colorScheme="dark"
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </Button>
                </HStack>
                <FormControl isInvalid={passwordError}>
                  <FormControl.ErrorMessage leftIcon={<AiOutlineInfoCircle />}>
                    {passwordError}
                  </FormControl.ErrorMessage>
                </FormControl>
              </Stack>
              <Button
                onPress={handleErrors}
                size="md"
                colorScheme="dark"
                mt={2}
              >
                <Text>Iniciar sesión</Text>
              </Button>
            </FormControl>
          </VStack>
        </HStack>
      </View>
    </>
  )
}

export default Login
