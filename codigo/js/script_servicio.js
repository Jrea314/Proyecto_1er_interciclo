


function img(){
    let foto = document.getElementById('formFile') ;
    var imgElement = document.querySelector('img');

    foto.addEventListener('change', function() {
    var url = URL.createObjectURL(inputElement.files[0]);
    imgElement.src = url;
    });
    return imgElement.src;
}

function agregar() {
    let nombre = document.getElementById('exampleFormControlInput1').value ,
    descrip = document.getElementById('exampleFormControlTextarea1').value ,
    tiempo = document.getElementById('exampleFormControlInput2').value ,
    valor = document.getElementById('exampleFormControlInput3').value ,
    tipo = document.getElementById('validationCustom04'),
    foto = document.getElementById('formFile'),
    url = URL.createObjectURL(foto.files[0]),
    elegir = tipo.options[tipo.selectedIndex].text,
    estilo = "border: 2px solid rgb(0, 204, 255); padding-left: 3px;",
    cla = "cont",
    w = 300,
    h = 200;
    alert(foto);
    
    document.getElementById('servidor').innerHTML = "<div style="+estilo+" class="+cla+"><br><h3>"+nombre+"</h3><h5>"+descrip+"</h5><br><h5><strong>Duración:</strong>"+tiempo+"minutos</h5><br><h5><strong>Valor:</strong> $"+valor+"</h5><br><h5><strong>Tipo:</strong> "+elegir+"</h5><br><img width="+w+" height="+h+" src="+url+"><br><br></div><br>";

}
