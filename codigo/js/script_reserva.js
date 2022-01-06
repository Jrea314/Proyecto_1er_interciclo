const dias = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
console.log(localStorage.cedula+" "+localStorage.pass);
console.log(localStorage.nombre+" "+localStorage.apellido);
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
        subtotal = document.getElementById('subtotal'),
        iva = document.getElementById('iva'),
        total = document.getElementById('total');
        localStorage.servicio = ser;
        localStorage.local = lo;
        localStorage.turno = elegir;
    console.log(elegir+" "+numeroDia+" "+ser+" "+lo+" "+hora1);
    if (ser == "Depilación") {
        document.getElementById('s').style.display = "block";
        document.getElementById('i').style.display = "block";
        document.getElementById('total1').style.display = "block";
        document.getElementById('pago').style.display = "block";
        subtotal.innerHTML="$20";
        iva.innerHTML="$2.4";
        total.innerHTML="$22.4";
    }if (ser == "Faciales") {
        document.getElementById('s').style.display = "block";
        document.getElementById('i').style.display = "block";
        document.getElementById('total1').style.display = "block";
        document.getElementById('pago').style.display = "block";
        subtotal.innerHTML="$40";
        iva.innerHTML="$4.8";
        total.innerHTML="$44.8";
    }if (ser == "Masajes") {
        document.getElementById('s').style.display = "block";
        document.getElementById('i').style.display = "block";
        document.getElementById('total1').style.display = "block";
        document.getElementById('pago').style.display = "block";
        subtotal.innerHTML="$35";
        iva.innerHTML="$4.2";
        total.innerHTML="$39.2";
    }if (ser == "Depilación-Faciales") {
        document.getElementById('s').style.display = "block";
        document.getElementById('i').style.display = "block";
        document.getElementById('total1').style.display = "block";
        document.getElementById('pago').style.display = "block";
        subtotal.innerHTML="$60";
        iva.innerHTML="$7.2";
        total.innerHTML="$67.2";
    }if (ser == "Depilación-Masajes") {
        document.getElementById('s').style.display = "block";
        document.getElementById('i').style.display = "block";
        document.getElementById('total1').style.display = "block";
        document.getElementById('pago').style.display = "block";
        subtotal.innerHTML="$55";
        iva.innerHTML="$6.6";
        total.innerHTML="$61.6";
    }if (ser == "Faciales-Masajes") {
        document.getElementById('s').style.display = "block";
        document.getElementById('i').style.display = "block";
        document.getElementById('total1').style.display = "block";
        document.getElementById('pago').style.display = "block";
        subtotal.innerHTML="$75";
        iva.innerHTML="$9";
        total.innerHTML="$84";
    }if (ser == "Todos los servicios") {
        document.getElementById('s').style.display = "block";
        document.getElementById('i').style.display = "block";
        document.getElementById('total1').style.display = "block";
        document.getElementById('pago').style.display = "block";
        subtotal.innerHTML="$95";
        iva.innerHTML="$11.4";
        total.innerHTML="$106.4";
    }

}

function final() {
    alert("Servicio "+localStorage.servicio+" en el local "+localStorage.local+" con turno en la "+localStorage.turno+" reservado");
}

function cancelar() {
    alert("Servicio "+localStorage.servicio+" en el local "+localStorage.local+" con turno en la "+localStorage.turno+" cancelado");
}