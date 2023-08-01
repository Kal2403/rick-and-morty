const validation = (data) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d).{6,10}$/;

  let errors = {};

  if (!emailRegex.test(data.email)) {
    errors.email = "Debe ser un email valido";
  }
  if (!data.email) {
    errors.emailVacio = "Debes ingresar un email";
  }
  if (data.email.length > 35) {
    errors.caracteres = 'El email no puede tener mas de 35 caracteres';
  }
  if (!passwordRegex.test(data.password)) {
    errors.password =  "La contraseña de tener entre 6 y 10 caracteres";
  }
  return errors;
}

export default validation;
