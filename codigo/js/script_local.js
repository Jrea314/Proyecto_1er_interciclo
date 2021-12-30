var num = 1;
c1 = 0;
c2 = 0;
c3 = 0;
function aparece1(){
    document.getElementById("ttl").innerHTML = "SpaWeb (Mall del Sur)";
    document.getElementById("ads").innerHTML = "Av. 25 de Julio y Ernesto Albán (1er piso local #05)";
    let foto = document.getElementById('imagen_inicio');
    foto.src = "../Galeria_01/0"+num+".jpg";
    let local = document.getElementById('img_local');
    local.src = "../imagenes/sur.jpg";
    let mapa = document.getElementById('map');
    mapa.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15947.220595725923!2d-79.902378!3d-2.226898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6fcac1d1dfc7%3A0x3a3205a3a7f44ede!2sMall%20del%20Sur%2C%20Guayaquil%20090202%2C%20Ecuador!5e0!3m2!1ses!2sus!4v1640742457584!5m2!1ses!2sus";
    otra_vez();
}
function aparece2(){
    document.getElementById("ttl").innerHTML = "SpaWeb (Malecón)";
    document.getElementById("ads").innerHTML = "Sargento Vargas #116 y Av. Olmedo (frente al Club de La Unión local #8)";
    let foto = document.getElementById('imagen_inicio');
    foto.src = "../Galeria_02/0"+num+".jpg";
    let local = document.getElementById('img_local');
    local.src = "../imagenes/centro.jpg";
    let mapa = document.getElementById('map');
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.6127254289127!2d-79.88181822741315!3d-2.1992536380492944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6e64b5869baf%3A0xaf915854329272dd!2sCentro%20Comercial%20Malec%C3%B3n!5e0!3m2!1ses!2sec!4v1640814402880!5m2!1ses!2sec";
    otra_vez();
}
function aparece3(){
    document.getElementById("ttl").innerHTML = "SpaWeb (Mall El Fortín)";
    document.getElementById("ads").innerHTML = "Km 25 Av. Perimetral, Entre Av. Modesto Luque y Calle Casuarina (2do piso local #14)";
    let foto = document.getElementById('imagen_inicio');
    foto.src = "../Galeria_03/0"+num+".jpg";
    let local = document.getElementById('img_local');
    local.src = "../imagenes/norte.jpg";
    let mapa = document.getElementById('map');
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.1146804572204!2d-79.95108588473087!3d-2.1094052376740997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d725f45bdf3db%3A0xfc0dd2a78f3c88a0!2sMall%20El%20Fort%C3%ADn!5e0!3m2!1ses!2sec!4v1640813578961!5m2!1ses!2sec";
    otra_vez();
}
function otra_vez(){
    document.querySelector('.bi-chevron-left').style.display = "none";
    document.querySelector('.bi-chevron-right').style.display = "block";
    c1 = 0;
    c2 = 0;
    c3 = 0;
}
function verificarL(){
    let atras = document.querySelector('.bi-chevron-left');
        document.querySelector('.bi-chevron-right').style.display = "block";
        let foto1 = document.getElementById('imagen_inicio');
        let palabra1 = "Galeria_01"
        let palabra2 = "Galeria_02"
        let palabra3 = "Galeria_03"

        if ((foto1.src).includes(palabra1)) {
            regresar1();
            c1--;
        }
        if ((foto1.src).includes(palabra2)) {
            regresar2();
            c2--;
        } 
        if ((foto1.src).includes(palabra3)) {
            regresar3();
            c3--;
        }       
    }
function verificarR(){
    let adelante = document.querySelector('.bi-chevron-right');
    document.querySelector('.bi-chevron-left').style.display = "block";
    let foto1 = document.getElementById('imagen_inicio');
    let palabra1 = "Galeria_01"
    let palabra2 = "Galeria_02"
    let palabra3 = "Galeria_03"

    if ((foto1.src).includes(palabra1)) {
        mover1();
        c1++;
    }
    if ((foto1.src).includes(palabra2)) {
        mover2();
        c2++;
    } 
    if ((foto1.src).includes(palabra3)) {
        mover3();
        c3++;
    }       
    

}


function mover1(){
        let galeria1 = ['../Galeria_01/01.jpg','../Galeria_01/02.jpg','../Galeria_01/03.jpg','../Galeria_01/04.jpg',
                        '../Galeria_01/05.jpg'];
        let  img = document.getElementById('imagen_inicio');
            if (c1<galeria1.length-1) {
                img.src = galeria1[c1+1];              
            }
            if (c1 == 3) {
                document.querySelector('.bi-chevron-right').style.display = "none";
                document.querySelector('.bi-chevron-left').style.display = "block";
            
            }
            
            
}

function mover2(){
    let galeria2 = ['../Galeria_02/01.jpg','../Galeria_02/02.jpg','../Galeria_02/03.jpg','../Galeria_02/04.jpg',
                    '../Galeria_02/05.jpg','../Galeria_02/06.jpg'];
    let  img = document.getElementById('imagen_inicio');
        if (c2<galeria2.length-1) {
            img.src = galeria2[c2+1];              
        }
        if (c2 == 4) {
            document.querySelector('.bi-chevron-right').style.display = "none";
            document.querySelector('.bi-chevron-left').style.display = "block"
            
        }
}

function mover3(){
    let galeria3 = ['../Galeria_03/01.jpg','../Galeria_03/02.jpg','../Galeria_03/03.jpg','../Galeria_03/04.jpg',
                    '../Galeria_03/05.jpg','../Galeria_03/06.jpg','../Galeria_03/07.jpg'];
    let  img = document.getElementById('imagen_inicio');
        if (c3<galeria3.length-1) {
            img.src = galeria3[c3+1];              
        }
        if (c3 == 5) {
            document.querySelector('.bi-chevron-right').style.display = "none";
            document.querySelector('.bi-chevron-left').style.display = "block"          
        }
}

function regresar1(){
    let galeria1 = ['../Galeria_01/01.jpg','../Galeria_01/02.jpg','../Galeria_01/03.jpg','../Galeria_01/04.jpg',
                    '../Galeria_01/05.jpg'];
        let  img = document.getElementById('imagen_inicio');
        if (c1>0) {
            img.src = galeria1[c1-1];              
        }
        if (c1 == 1) {
            document.querySelector('.bi-chevron-right').style.display = "block";
            document.querySelector('.bi-chevron-left').style.display = "none";            
        }
}

function regresar2(){
    let galeria2 = ['../Galeria_02/01.jpg','../Galeria_02/02.jpg','../Galeria_02/03.jpg','../Galeria_02/04.jpg',
                    '../Galeria_02/05.jpg','../Galeria_02/06.jpg'];
        let  img = document.getElementById('imagen_inicio');
        if (c2>0) {
            img.src = galeria2[c2-1];              
        }
        if (c2 == 1) {
            document.querySelector('.bi-chevron-right').style.display = "block";
            document.querySelector('.bi-chevron-left').style.display = "none";             
        }

}

function regresar3(){
    let galeria3 = ['../Galeria_03/01.jpg','../Galeria_03/02.jpg','../Galeria_03/03.jpg','../Galeria_03/04.jpg',
                    '../Galeria_03/05.jpg','../Galeria_03/06.jpg','../Galeria_03/07.jpg'];
        let  img = document.getElementById('imagen_inicio');
        if (c3>0) {
            img.src = galeria3[c3-1];              
        }
        if (c3 == 1) {
            document.querySelector('.bi-chevron-right').style.display = "block";
            document.querySelector('.bi-chevron-left').style.display = "none";             
        }
}

