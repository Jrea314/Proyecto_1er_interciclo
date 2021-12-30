c1 = 0;
function Left(){
    let atras = document.querySelector('.bi-chevron-left');
    document.querySelector('.bi-chevron-right').style.display = "block";
    let foto1 = document.getElementById('imagen_inicio');
        regresar();
        c1--;          
}
function Right(){
    let adelante = document.querySelector('.bi-chevron-right');
    document.querySelector('.bi-chevron-left').style.display = "block";
    let foto1 = document.getElementById('imagen_inicio');
        mover();
        c1++;     
}


function mover(){
        let galeria1 = ['img_inicio/01.jpg','img_inicio/02.jpg','img_inicio/03.jpg','img_inicio/04.jpg',
                          'img_inicio/05.jpg'];
        let  img = document.querySelector('img');
            if (c1<galeria1.length-1) {
                img.src = galeria1[c1+1];              
            }
            if (c1 == 3) {
                document.querySelector('.bi-chevron-right').style.display = "none";
                document.querySelector('.bi-chevron-left').style.display = "block";
            
            }           
}

function regresar(){
    let galeria1 = ['img_inicio/01.jpg','img_inicio/02.jpg','img_inicio/03.jpg','img_inicio/04.jpg',
                    'img_inicio/05.jpg'];
        let  img = document.querySelector('img');
        if (c1>0) {
            img.src = galeria1[c1-1];              
        }
        if (c1 == 1) {
            document.querySelector('.bi-chevron-right').style.display = "block";
            document.querySelector('.bi-chevron-left').style.display = "none";            
        }
}

