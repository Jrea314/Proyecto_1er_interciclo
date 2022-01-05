var c = new Array(),
    n = new Array(),
    a = new Array(),
    d = new Array(),
    t = new Array(),
    e = new Array(),
    p = new Array();
        
function registrar() {
    let cedula = document.getElementById('exampleFormControlInput1').value,
        nombre = document.getElementById('exampleFormControlInput2').value,
        apellido = document.getElementById('exampleFormControlInput3').value,
        direccion = document.getElementById('exampleFormControlInput4').value,
        telefono = document.getElementById('exampleFormControlInput5').value,
        correo = document.getElementById('exampleFormControlInput6').value,
        pass = document.getElementById('inputPassword').value;
        localStorage.cedula = document.getElementById('exampleFormControlInput1').value;
        localStorage.pass = document.getElementById('inputPassword').value;
    c.push(cedula);
    n.push(nombre);
    a.push(apellido);
    d.push(direccion);
    t.push(telefono);
    e.push(correo);
    p.push(pass);
    alert("cuentra creada");
    for(var i=0; i<c.length; i++) {
        console.log(c[i]+" "+n[i]+" "+a[i]+" "+d[i]+" "+t[i]+" "+e[i]+" "+p[i]);
    }
    //console.log(c[i]+" "+n[i]+" "+a[i]+" "+d[i]+" "+t[i]+" "+e[i]);
}

function validar() {
    let cedula = document.getElementById('exampleFormControlInputa').value,
        pass = document.getElementById('inputPassworda').value; 
        console.log(localStorage.cedula+" "+localStorage.pass);
        if (localStorage.cedula == cedula && localStorage.pass == pass) {
            alert("tiene cuenta");
            document.getElementById('botonZ').style.display = "block";
        }if (localStorage.cedula == cedula && localStorage.pass != pass) {
            alert("contraseña incorrecta");
        }
}

function limpiar() {
    let cedula = document.getElementById('exampleFormControlInput1').value,
        nombre = document.getElementById('exampleFormControlInput2').value,
        apellido = document.getElementById('exampleFormControlInput3').value,
        direccion = document.getElementById('exampleFormControlInput4').value,
        telefono = document.getElementById('exampleFormControlInput5').value,
        correo = document.getElementById('exampleFormControlInput6').value,
        pass = document.getElementById('inputPassword').value;

        cedula = "";
        nombre = "";
        apellido = "";
        direccion = "";
        telefono = "";
        correo = "";
        pass = "";
}
 


