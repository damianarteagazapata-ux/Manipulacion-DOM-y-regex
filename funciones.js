document.querySelector("#miFormulario").addEventListener("submit", function (e) {
    e.preventDefault();
// datos
    let nombre = document.getElementById("nombre").value.trim();
    const nombreregex = /^[A-Za-z\s]+$/;
    let edad = parseInt(document.getElementById("edad").value);
    let correo = document.getElementById("correo").value.trim();
    const correoregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let telefono = document.getElementById("telefono").value.trim();
    const telefonoregex = /^\d{10}$/;
    let contraseña = document.getElementById("contraseña").value.trim();
    const contraregex =  /^(?=.*\d).{8,}$/;

// prints
    let mensaje = document.getElementById("mensaje");
    let mensajenombre = document.getElementById("mensajenombre");
    let mensajeedad = document.getElementById("mensajeedad");
    let mensajecorreo = document.getElementById("mensajecorreo");
    let mensajetelefono = document.getElementById("mensajetelefono");
    let mensajecontraseña = document.getElementById("mensajecontraseña");
    let resultado = document.getElementById("resultado");
    const users = [];

// añadir usuarios
    users.push({
        nombre: nombre,
        edad: edad,
        correo: correo,
        telefono: telefono,
        contraseña: contraseña
    });
// logica
    if (!nombre || !edad || !correo || !telefono || !contraseña) {
        mensaje.textContent = "falta de datos";
        return;
   } else {
        mensajenombre.textContent = "";
    }

    if (!nombreregex.test(nombre)) {
        mensajenombre.textContent = "nombre mal";
        return;
    } else {
        mensajenombre.textContent = "";
    }

    if (!correoregex.test(correo)) {
        mensajecorreo.textContent = "correo mal";
        return;
    } else {
        mensajecorreo.textContent = ""; 
    }

    if (!telefonoregex.test(telefono)) {
        mensajetelefono.textContent = "teléfono mal";
        return;
    } else {
        mensajetelefono.textContent = "";
    }
    
    if (!contraregex.test(contraseña)) {
        mensajecontraseña.textContent = "contraseña mal";
        return;
    } else {
        mensajecontraseña.textContent = "";
    }

    if (edad <= 0) {
        mensajeedad.textContent = "edad negativa o cero";
        return;
    }
    // printear usuarios del array en una lista y mostrar mensaje de datos correctos
    let lista = document.createElement("ul");
    users.forEach(user => {
        let li = document.createElement("li");
        li.textContent = `Nombre: ${user.nombre}, Edad: ${user.edad}, Correo: ${user.correo}, Teléfono: ${user.telefono}`;
        lista.appendChild(li);
    });
    resultado.appendChild(lista);

    mensaje.textContent = "datos correctos";

    let div = document.createElement("div");
    div.innerHTML = "Nombre: " + nombre + "<br>Edad: " + edad;

    // resultado.appendChild(div);

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("contraseña").value = "";
});