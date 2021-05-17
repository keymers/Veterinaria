$(document).ready(function () {
    $("#form").validate({
      rules: {
        usuario: {
          required: true,
          minlength: 3
        },
        contrasena: {
          required: true,
          minlength: 3
        },
      },
      messages: {
        usuario: {
            minlength: "Min 3 caracteres"
        },
        contraseña: {
            minlength: "Min 3 caracteres"
        },
      }
   
    });
  });
  