import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
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
    console.log("Correo:", email)
    console.log("Contraseña:", password)

    try {
      const { data } = await axios.post(baseUrl + "user/login/", {
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

      signIn({
        token: data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: email },
      })

      //navigate back
      navigate("/cotizador")

      console.log("response", data)
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
      console.log("correo mal ")
      setErrors({ email: "Ingresa un correo válido" })
      return false
    }
    if (password === "" || !validPassword) {
      console.log("contraseña mal ")
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
                <HStack>
                  <Input
                    placeholder="Ingresa tu password"
                    id="password"
                    variant={"filled"}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    type="password"
                    isInvalid={"password" in errors}
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
