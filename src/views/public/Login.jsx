import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  View,
  Stack,
  FormControl,
  Input,
  Button,
  HStack,
  Image,
  Text,
  Link,
  Box,
  Center,
} from "native-base"
import { NavBar } from "../components/NavBar"
import imgSala from "../../assets/images/listing-01.jpg"
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineInfoCircle,
} from "react-icons/ai"
import axios from "axios"
import { useSignIn } from "react-auth-kit"
import { baseUrl } from "../../api/ws"

const Login = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  const signIn = useSignIn()
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

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(baseUrl + "user/login", {
        email,
        password,
      })
      console.log(data)
      if (data.status === 401) {
        setErrors({ password: data.message })
      }
      if (data.status === 404) {
        setErrors({ email: data.message })
      }
      if (data.status === 200) {
        console.log("usuario", data);
        signIn({
          token: data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { 
            email: email,
            id: data.id,
           },
        })
        navigate("/cotizador")
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleErrors = () => {
    console.log("validando")
    const validated = validate()
    console.log(errors)
    if (validated) {
      setErrors({})
      handleSubmit()
    }
  }
  function validate() {
    setErrors({})
    if (email === "" || !validEmail.test(email)) {
      setErrors({ email: "Ingresa un correo válido" })
      return false
    }
    if (password === "" || !validPassword) {
      setErrors({ password: "Ingresa una contraseña válida" })
      return false
    } else if (password.length < 8) {
      setErrors({ password: "La contraseña debe tener al menos 8 caracteres" })
      return false
    }
    return true
  }

  return (
    <>
      <NavBar />
      <View>
        <Center mt={16}>
          <Text fontSize="4xl">Iniciar sesión</Text>
          <HStack
            bg="white"
            rounded="lg"
            overflow="hidden"
            w="100%"
            h="600px"
            p={16}
            direction="row"
            spacing={8}
          >
            <Box w={"50%"}>
              <Image
                src={imgSala}
                alt="Segun Adebayo"
                size="100%"
                rounded="lg"
                resizeMode="cover"
              />
            </Box>
            <Box
              w={"50%"}
              paddingX={8}
            >
              <FormControl>
                <Stack>
                  <FormControl.Label htmlFor="email">
                    Correo electrónico
                  </FormControl.Label>
                  <Input
                    placeholder="ejemplo@email.com"
                    id="email"
                    variant={"filled"}
                    value={email}
                    onChangeText={setEmail}
                    type="email"
                    isInvalid={"email" in errors}
                  />
                  <FormControl.ErrorMessage
                    leftIcon={<AiOutlineInfoCircle />}
                    isInvalid={"email" in errors}
                  >
                    {errors.email}
                  </FormControl.ErrorMessage>
                </Stack>
                <Stack>
                  <FormControl.Label htmlFor="password">
                    Contraseña
                  </FormControl.Label>
                  <HStack w={"full"}>
                    <Input
                      placeholder="Ingresa tu password"
                      id="password"
                      variant={"filled"}
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                      type="password"
                      isInvalid={"password" in errors}
                      w={"95%"}
                    />
                    <Button
                      aria-label="Mostrar/ocultar contraseña"
                      onPress={togglePassword}
                      size="md"
                      colorScheme="dark"
                      w={"5%"}
                    >
                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </Button>
                  </HStack>
                  <FormControl.ErrorMessage
                    leftIcon={<AiOutlineInfoCircle />}
                    isInvalid={"password" in errors}
                  >
                    {errors.password}
                  </FormControl.ErrorMessage>
                </Stack>
                <Button
                  onPress={handleErrors}
                  size="md"
                  colorScheme="dark"
                  mt={8}
                >
                  <Text>Iniciar sesión</Text>
                </Button>
              </FormControl>
              <HStack alignSelf={"center"}>
                <Text mt={2}> ¿No tienes cuenta? </Text>
                <Link href="/registro" alignSelf={"end"}>
                  Regístrate
                </Link>
              </HStack>
            </Box>
          </HStack>
        </Center>
      </View>
    </>
  )
}

export default Login
