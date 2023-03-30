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
import { post } from "../../api/ws"

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
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmrPassword, setConfirmrPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  const validPhone = /^\d{10}$/
  const validName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
  const [errors, setErrors] = useState({})
  const handleSubmit = async () => {
    try {
      console.log("nombre --->", name)
      const dataUser = {
        name: name,
        apellidos: lastName,
        email: email,
        password: password,
        role_id: 2,
        telefono: phone
      }
      const res = await post("user/create", dataUser)
      if (res.status === 500) {
        setErrors({ errorCreate: res.message })
      }  
      if (res.status === 200) {
        navigate("/login")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }
  const handleErrors = () => {
    console.log("validando")
    const validated = validate()
    console.log(errors)
    if (validated) {
      setErrors({})
      handleSubmit()
    }
    console.log("handle errrs")
  }
  function validate() {
    setErrors({})
    if (name === "" || !validName.test(name)) {
      setErrors({ name: "Ingresa un nombre valido" })
      return false
    }
    if (lastName === "" || !validName.test(lastName)) {
      setErrors({ lastName: "El apellido es requerido" })
      return false
    }
    if (email === "" || !validEmail.test(email)) {
      setErrors({ email: "Ingresa un correo válido" })
      return false
    }
    if (phone === "" || !validPhone.test(phone)) {
      setErrors({ phone: "Ingresa un teléfono válido" })
      return false
    }
    if (password === "" || !validPassword.test(password)) {
      setErrors({ password: "Ingresa una contraseña válida" })
      return false
    }
    if (confirmrPassword === "" || confirmrPassword !== password) {
      setErrors({ confirmPassword: "Las contraseñas no coinciden" })
      return false
    }
    return true
  }
  return (
    <>
      <NavBar />
      <View>
        <Center mt={16}>
          <h2>Crea una cuenta</h2>
          <HStack
            bg="white"
            rounded="lg"
            overflow="hidden"
            w="100%"
            h="100%"
            p={16}
            direction="row"
            space={8}
          >
            <Box w={"50%"}>
              <Image
                source={imgSala}
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
                  <FormControl.Label>Nombre</FormControl.Label>
                  <Input
                    placeholder="Ingresa tu nombre"
                    variant={"filled"}
                    value={name}
                    onChangeText={setName}
                    type="text"
                    isInvalid={"name" in errors}
                  />
                  <FormControl.ErrorMessage
                    leftIcon={<AiOutlineInfoCircle />}
                    isInvalid={"name" in errors}
                  >
                    {errors.name}
                  </FormControl.ErrorMessage>
                </Stack>
                <Stack>
                  <FormControl.Label>Apellidos</FormControl.Label>
                  <Input
                    placeholder="Ingresa tus apellidos"
                    variant={"filled"}
                    value={lastName}
                    onChangeText={setLastName}
                    type="text"
                    isInvalid={"lastName" in errors}
                  />
                  <FormControl.ErrorMessage
                    leftIcon={<AiOutlineInfoCircle />}
                    isInvalid={"lastName" in errors}
                  >
                    {errors.lastName}
                  </FormControl.ErrorMessage>
                </Stack>
                <Stack>
                  <FormControl.Label>Correo</FormControl.Label>
                  <Input
                    placeholder="ejemplo@email.com"
                    variant={"filled"}
                    value={email}
                    onChangeText={setEmail}
                    type="email"
                    id="emailReg"
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
                  <FormControl.Label>Teléfono</FormControl.Label>
                  <Input
                    placeholder="Ingresa tu teléfono"
                    variant={"filled"}
                    value={phone}
                    onChangeText={setPhone}
                    type="phone-pad"
                    isInvalid={"phone" in errors}
                  />
                  <FormControl.ErrorMessage
                    leftIcon={<AiOutlineInfoCircle />}
                    isInvalid={"phone" in errors}
                  >
                    {errors.phone}
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

                  <FormControl.HelperText htmlFor="password">
                    La contraseña debe tener al menos 8 caracteres, una
                    mayúscula, una minúscula y un número.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    htmlFor="password"
                    leftIcon={<AiOutlineInfoCircle />}
                    isInvalid={"password" in errors}
                  >
                    {errors.password}
                  </FormControl.ErrorMessage>
                </Stack>
                <Stack>
                  <FormControl.Label
                    id="label"
                    htmlFor="confirm-password"
                  >
                    Confirmar contraseña
                  </FormControl.Label>
                  <HStack>
                    <Input
                      placeholder="Confirma tu password"
                      id="confirm-password"
                      variant={"filled"}
                      value={confirmrPassword}
                      onChangeText={setConfirmrPassword}
                      secureTextEntry={!showConfirmPassword}
                      type="password"
                      isInvalid={"confirmPassword" in errors}
                      w={"95%"}
                    />
                    <Button
                      aria-label="Mostrar/ocultar confirmar contraseña"
                      onPress={toggleConfirmPassword}
                      size="md"
                      colorScheme="dark"
                      w={"5%"}
                    >
                      {showConfirmPassword ? (
                        <AiFillEyeInvisible />
                      ) : (
                        <AiFillEye />
                      )}
                    </Button>
                  </HStack>
                  <FormControl.ErrorMessage
                    htmlFor="confirm-password"
                    leftIcon={<AiOutlineInfoCircle />}
                    isInvalid={
                      "confirmPassword" in errors || "errorCreate" in errors
                    }
                  >
                    {errors.confirmPassword || errors.errorCreate}
                  </FormControl.ErrorMessage>
                </Stack>
                <Button
                  onPress={handleErrors}
                  size="md"
                  colorScheme="dark"
                  mt={2}
                >
                  <Text>Registrarse</Text>
                </Button>
              </FormControl>
              <HStack alignSelf={"center"}>
                <Text mt={2}>¿Ya tienes cuenta? </Text>{" "}
                <Link
                  href="/login"
                  alignSelf={"end"}
                >
                  Inicia sesión
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
