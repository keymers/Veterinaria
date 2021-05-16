$(document).ready(function() {
    $("#contacto").validate({
        rules: {
            "txtNombre": {
                required: true,
                minlength: 5
            },
            "txtCorreo": {
                required: true,
                email: 5
            },
            "txtEscriba": {
                required: true,
                minlength: 30
            }
        },
        messages: {
            "txtNombre": {
                required: 'Ingrese su nombre',
                minlength: 'Minimo 5 caracteres'
            },
            "txtCorreo": {
                required: 'Ingrese su correo',
                email: 'No cumple formato ***@***'
            },
            "txtEscriba": {
                required: 'Ingrese su consulta',
                minlength: 'Minimo 30 caracteres'
            }
        }

    });
});