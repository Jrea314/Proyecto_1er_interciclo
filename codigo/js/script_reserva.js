const dias = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
console.log(localStorage.cedula+" "+localStorage.pass);

function hora() {
    let fecha = document.getElementById('date').value,
        numeroDia = new Date(fecha).getDay(),
        tipo = document.getElementById('validationCustom05'),
        elegir = tipo.options[tipo.selectedIndex].text;
    let nombreDia = dias[numeroDia];
        console.log(fecha);
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

function pago() {
    let fecha = document.getElementById('date').value,
        numeroDia = new Date(fecha).getDay(),
        servicio = document.getElementById('validationCustom03'),
        ser = servicio.options[servicio.selectedIndex].text,
        local = document.getElementById('validationCustom04'),
        lo = local.options[local.selectedIndex].text,
        tipo = document.getElementById('validationCustom05'),
        elegir = tipo.options[tipo.selectedIndex].text,
        hora1 = document.getElementById('hora1').value,
        h1 = new Date(hora1).getDay(),
        subtotal = document.getElementById('subtotal'),
        iva = document.getElementById('iva'),
        total = document.getElementById('total');
    console.log(elegir+" "+numeroDia+" "+ser+" "+lo+" "+hora1);
    let horaN = document.getElementById('horaN').innerHTML;
    if (ser == "Depilación") {
        document.getElementById('s').style.display = "block";
        document.getElementById('i').style.display = "block";
        document.getElementById('total1').style.display = "block";
        document.getElementById('pago').style.display = "block";
        subtotal.innerHTML="$20";
        iva.innerHTML="$2.4";
        total.innerHTML="$22.4";
    }if (servicio == "Faciales") {
        console.log("adentro"+horaN);
    }if (servicio == "Masajes") {
        console.log("adentro"+horaN);
    }if (servicio == "Depilación-Faciales") {
        console.log("adentro"+horaN);
    }if (servicio == "Depilación-Masajes") {
        console.log("adentro"+horaN);
    }if (servicio == "Faciales-Masajes") {
        console.log("adentro"+horaN);
    }if (servicio == "Todos los servicios") {
        console.log("adentro"+horaN);
    }

}