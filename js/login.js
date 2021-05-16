$(document).ready(function () {
    $("#form").validate({
      rules: {
        usuario: {
          required: true,
          minlength: 3
        },
        contraseña: {
          required: true,
          minlength: 3
        },
      },
      messages: {
        usuario: {
          required: "Debe ingresar el nombre del usuario",
          minlength: "Min. 3 caracteres",
        },
        contraseña: {
          required: "Debe ingresar la contraseña",
          minlength: "Min. 3 caracteres"
        },
      }
   
    });
  });
  