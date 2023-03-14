import React, {useEffect, useState} from 'react';
import { View, Stack, FormControl, Input, Button, HStack, VStack, Image, Text } from 'native-base';
import { NavBar } from '../components/NavBar';
import imgSala from '../../assets/images/listing-01.jpg';
import { AiFillEye, AiFillEyeInvisible, AiOutlineInfoCircle } from 'react-icons/ai';

const Login = () => {
  useEffect(() => {
    document.title = "Si vas a construir una casa en Querétaro, cotiza Ws 4424499749";
    document.querySelector('meta[name="description"]').setAttribute("content", "Obtén un presupuesto en línea y conoce los permisos que necesitas para construir casa, local o residencia en Querétaro; ingenieros civiles y arquitectos experimentados");
  }, []);

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const validPhone = /^\d{10}$/;
  const validName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const [errors, setErrors] = useState(false);

  const handleSubmit = () => {
    console.log('Nombre:', nombre);
    console.log('Apellidos:', apellidos);
    console.log('Correo:', correo);
    console.log('Telefono:', telefono);
    console.log('Contraseña:', Password);
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const handleErrors = () => {
    if (nombre === '' || !validName.test(nombre)) {
      setErrors(true);
    } else if (apellidos === '' || !validName.test(apellidos)) {
      setErrors(true);
    } else if (correo === '' || !validEmail.test(correo)) {
      setErrors(true);
    } else if (telefono === '' || !validPhone.test(telefono)) {
      setErrors(true);
    } else if (Password === '' || !validPassword.test(Password)) {
      setErrors(true);
    } else if (confirmarPassword === '' || confirmarPassword !== Password) {
      setErrors(true);
    } else {
      setErrors(false);
      handleSubmit();
    }
  }

  return (
    <>
      <NavBar />
      <View flex={1} alignItems='center' mt={4}>
        <h2>Registro</h2>
        <HStack style={{width: "90%", height: "100%"}} space={1} mt={3}>
          <VStack flex={1}>
            <Image source={imgSala} size='full' resizeMode='cover' alt={"Foto sala"} />
          </VStack>
          <VStack flex={1}>
            <FormControl isInvalid={errors}>
              <Stack>
                <FormControl.Label>Nombre</FormControl.Label>
                <Input placeholder="Ingresa tu nombre" variant={'filled'} value={nombre} onChangeText={setNombre} type="text"/>
                <FormControl.ErrorMessage leftIcon={<AiOutlineInfoCircle/>}>
                  El nombre no es valido.
                </FormControl.ErrorMessage>
              </Stack>
              <Stack>
                <FormControl.Label>Apellidos</FormControl.Label>
                <Input placeholder="Ingresa tus apellidos" variant={'filled'} value={apellidos} onChangeText={setApellidos} type="text"/>
                <FormControl.ErrorMessage leftIcon={<AiOutlineInfoCircle/>}>
                  Los apellidos no son validos.
                </FormControl.ErrorMessage>
              </Stack>
              <Stack>
                <FormControl.Label>Correo</FormControl.Label>
                <Input placeholder="ejemplo@email.com" variant={'filled'} value={correo} onChangeText={setCorreo} type="email"/>
                <FormControl.ErrorMessage leftIcon={<AiOutlineInfoCircle/>}>
                  El correo no es válido.
                </FormControl.ErrorMessage>
              </Stack>
              <Stack>
                <FormControl.Label>Teléfono</FormControl.Label>
                <Input placeholder="Ingresa tu telefono" variant={'filled'} value={telefono} onChangeText={setTelefono} type="phone-pad"/>
                <FormControl.ErrorMessage leftIcon={<AiOutlineInfoCircle/>}>
                  El teléfono debe tener 10 dígitos.
                </FormControl.ErrorMessage>
              </Stack>
              <Stack>
                <FormControl.Label htmlFor="password">Contraseña</FormControl.Label>
                <HStack>
                  <Input placeholder="Ingresa tu password" id="password" variant={'filled'} value={Password} onChangeText={setPassword} secureTextEntry={!showPassword} type="password"/>
                  <Button aria-label="Mostrar/ocultar contraseña" onPress={togglePassword} size='md' colorScheme="dark">
                    {showPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}
                  </Button>
                </HStack>
                
                <FormControl.HelperText htmlFor="password">
                  La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.
                </FormControl.HelperText>
                <FormControl.ErrorMessage htmlFor="password" leftIcon={<AiOutlineInfoCircle/>}>
                  Contraseña inválida.
                </FormControl.ErrorMessage>
              </Stack>
              <Stack>
                <FormControl.Label id="label" htmlFor="confirm-password">Confirmar contraseña</FormControl.Label>
                <HStack>
                  <Input placeholder="Confirma tu password" id="confirm-password" variant={'filled'} value={confirmarPassword} onChangeText={setConfirmarPassword} secureTextEntry={!showConfirmPassword} type="password"/>
                  <Button aria-label="Mostrar/ocultar confirmar contraseña" onPress={toggleConfirmPassword} size='md' colorScheme="dark">
                    {showConfirmPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}
                  </Button>
                </HStack>
                <FormControl.ErrorMessage htmlFor="confirm-password" leftIcon={<AiOutlineInfoCircle/>}>
                  Las contraseñas no coinciden.
                </FormControl.ErrorMessage>
              </Stack>
              <Button onPress={handleErrors} size='md' colorScheme="dark" mt={2}>
                <Text>Registrarse</Text>
              </Button>
            </FormControl>
          </VStack>
        </HStack>
      </View>
    </>
  );
}

export default Login;
