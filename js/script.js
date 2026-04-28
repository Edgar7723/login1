function entrar() {
    let usuario = document.getElementById('usuarioInput').value;
    let password = document.getElementById('passInput').value;
    
    let mensaje = document.getElementById('mensajeFeedback');

    if (usuario == "admin" && password == "12345") {
        mensaje.innerHTML = "¡Bienvenido " + usuario + "!";
        mensaje.style.color = "green";
        mensaje.style.backgroundColor = "#eaffea";
        mensaje.style.border = "1px solid green";

    } else {
        mensaje.innerHTML = "Error: Usuario o contraseña equivocados";
        mensaje.style.color = "red";
        mensaje.style.backgroundColor = "#ffeaea";
        mensaje.style.border = "1px solid red";
        mensaje.style.padding = "5px";
    }
}
document.getElementById('btnIngresar').onclick = entrar;