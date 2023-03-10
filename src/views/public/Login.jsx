import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/templatemo-plot-listing.css';
import { Container, Stack, FormControl, Input } from 'native-base';

const Login = () => {
  useEffect(() => {
    document.title = "Si vas a construir una casa en Querétaro, cotiza Ws 4424499749";
    document.querySelector('meta[name="description"]').setAttribute("content", "Obtén un presupuesto en línea y conoce los permisos que necesitas para construir casa, local o residencia en Querétaro; ingenieros civiles y arquitectos experimentados");
  }, []);

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleSubmit = () => {
    console.log('Nombre:', nombre);
    console.log('Apellidos:', apellidos);
    console.log('Correo:', correo);
    console.log('Telefono:', telefono);
    console.log('Contraseña:', contrasena);
  }
  
  return (
    <>
      <Container>
        <FormControl>
          <Stack space={4} w="100%">
            <Stack>
              <FormControl.Label>Nombre</FormControl.Label>
              <Input variant={'filled'} value={nombre} onChangeText={setNombre} />
            </Stack>
            <Stack>
              <FormControl.Label>Apellidos</FormControl.Label>
              <Input variant={'filled'} value={apellidos} onChangeText={setApellidos} />
            </Stack>
            <Stack>
              <FormControl.Label>Correo</FormControl.Label>
              <Input variant={'filled'} value={correo} onChangeText={setCorreo} />
            </Stack>
            <Stack>
              <FormControl.Label>Teléfono</FormControl.Label>
              <Input variant={'filled'} value={telefono} onChangeText={setTelefono} />
            </Stack>
            <Stack>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input variant={'filled'} value={contrasena} onChangeText={setContrasena} />
            </Stack>
            <Stack>
              <FormControl.Label>Confirmar contraseña</FormControl.Label>
              <Input variant={'filled'} value={confirmarContrasena} onChangeText={setConfirmarContrasena} />
            </Stack>
          </Stack>
        </FormControl>
      </Container>
    </>
  );
}

export default Login;
