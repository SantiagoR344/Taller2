"use strict";
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
btnGuardar.addEventListener('click', (e) => {
    //e.preventDefault();
    console.log("Ingreso a la validación del formulario");
    //Obtener los valores de los inputs
    const tipoDocumento = document.getElementById('tipoDocumento');
    const numeroDocumento = document.getElementById('numeroDocumento');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const celular = document.getElementById('celular');
    const email = document.getElementById('email');
    const linkedin = document.getElementById('linkedin');
    const github = document.getElementById('github');
    //La validación del formulario
    console.log(tipoDocumento.value);
});
