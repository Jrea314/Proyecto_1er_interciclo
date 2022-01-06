
function agregar() {
    let nombre = document.getElementById('exampleFormControlInput1').value ,
    descrip = document.getElementById('exampleFormControlTextarea1').value ,
    tiempo = document.getElementById('exampleFormControlInput2').value ,
    valor = document.getElementById('exampleFormControlInput3').value ,
    tipo = document.getElementById('validationCustom04'),
    foto = document.getElementById('formFile'),
    url = URL.createObjectURL(foto.files[0]),
    elegir = tipo.options[tipo.selectedIndex].text,
    sucursal = document.getElementById('validationCustom05'),
    lugar = sucursal.options[sucursal.selectedIndex].text,
    estilo = "border: 2px solid rgb(0, 204, 255); padding-left: 3px;",
    cla = "cont",
    w = 300,
    h = 200;

    let div = document.createElement("div")
    div.style = estilo;
    let servidor = document.getElementById('servidor')
    servidor.insertAdjacentElement("beforeend", div);
    div.insertAdjacentHTML("beforeend", "<br><h3>"+nombre+"</h3><h5>"+descrip+"</h5><br><h5><strong>Duración:</strong> "+tiempo+" minutos</h5><br><h5><strong>Valor:</strong> $"+valor+"</h5><br><h5><strong>Tipo:</strong> "+elegir+"</h5><br><h5><strong>Sucursal:</strong> "+lugar+"</h5><br><img width="+w+" height="+h+" src="+url+"><br><br>");
    servidor.insertAdjacentHTML("beforeend", "<br>");
    borrar();
    //document.getElementById('servidor').innerHTML = "<div style="+estilo+" class="+cla+"><br><h3>"+nombre+"</h3><h5>"+descrip+"</h5><br><h5><strong>Duración:</strong>"+tiempo+"minutos</h5><br><h5><strong>Valor:</strong> $"+valor+"</h5><br><h5><strong>Tipo:</strong> "+elegir+"</h5><br><img width="+w+" height="+h+" src="+url+"><br><br></div><br>";

}

function borrar() {
    let nombre = document.getElementById('exampleFormControlInput1'),
    descrip = document.getElementById('exampleFormControlTextarea1'),
    tiempo = document.getElementById('exampleFormControlInput2'),
    valor = document.getElementById('exampleFormControlInput3'),
    tipo = document.getElementById('validationCustom04'),
    tipo1 = document.getElementById('validationCustom05'),
    foto = document.getElementById('formFile');

    nombre.value = "";
    descrip.value = "";
    tiempo.value = "";
    valor.value = "";
    tipo.value = "";
    tipo1.value = "";
    foto.value = "";
}


