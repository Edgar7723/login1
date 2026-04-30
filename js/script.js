function entrar() {
    let usuario = document.getElementById('usuarioInput').value;
    let password = document.getElementById('passInput').value;
    
    let mensaje = document.getElementById('mensajeFeedback');

    if (usuario == "admin" && password == "12345") {
        localStorage.setItem("usuario", usuario);
        window.location.href = "pages/principal.html";
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

const btnIngresar = document.getElementById('btnIngresar');
if (btnIngresar) {
    btnIngresar.onclick = entrar;
}

function cerrarSesion() {
    localStorage.removeItem("usuario");
    window.location.href = "../index.html";
}

if (
    !localStorage.getItem("usuario") &&
    window.location.pathname.includes("principal.html")
) {
    window.location.href = "../index.html";
}
const btnCerrar = document.getElementById("btnCerrarSesion");
if (btnCerrar) {
    btnCerrar.onclick = cerrarSesion;
}