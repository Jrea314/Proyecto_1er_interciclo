const dias = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
console.log(localStorage.cedula+" "+localStorage.pass);

function hora() {
    let cedula = document.getElementById('date').value,
        numeroDia = new Date(cedula).getDay(),
        tipo = document.getElementById('validationCustom05'),
        elegir = tipo.options[tipo.selectedIndex].text;
    let nombreDia = dias[numeroDia];
        console.log(cedula);
        console.log(numeroDia);
        console.log(nombreDia);
    if (nombreDia == "lunes" || nombreDia == "martes" || nombreDia == "miércoles" || nombreDia == "jueves" || nombreDia == "viernes") {
        if (elegir == "mañana") {
            document.getElementById('m').style.display = "block";
            document.getElementById('t').style.display = "none";
            document.getElementById('n').style.display = "none";
            document.getElementById('f').style.display = "none";
        }
        if (elegir == "tarde") {
            document.getElementById('m').style.display = "none";
            document.getElementById('t').style.display = "block";
            document.getElementById('n').style.display = "none";
            document.getElementById('f').style.display = "none";
        }
        if (elegir == "noche") {
            document.getElementById('m').style.display = "none";
            document.getElementById('t').style.display = "none";
            document.getElementById('n').style.display = "block";
            document.getElementById('f').style.display = "none";
        }
    }
    if (nombreDia == "sábado" ) {
        if (elegir == "mañana") {
            document.getElementById('m').style.display = "block";
            document.getElementById('t').style.display = "none";
            document.getElementById('n').style.display = "none";
            document.getElementById('f').style.display = "none";
        }
        if (elegir == "tarde") {
            document.getElementById('m').style.display = "none";
            document.getElementById('t').style.display = "block";
            document.getElementById('n').style.display = "none";
            document.getElementById('f').style.display = "none";
        }
        if (elegir == "noche") {
            document.getElementById('m').style.display = "none";
            document.getElementById('t').style.display = "none";
            document.getElementById('n').style.display = "none";
            document.getElementById('f').style.display = "block";
        }
    }
    if (nombreDia == "domingo" ) {
            document.getElementById('m').style.display = "none";
            document.getElementById('t').style.display = "none";
            document.getElementById('n').style.display = "none";
            document.getElementById('f').style.display = "block";
    }

    //const nombreDia = dias[numeroDia];
}