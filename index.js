let imagenesUno = ["img/Fondo1.jpeg", "img/Fondo4.jpeg"];
let imagenesDos = ["img/Fondo2.jpeg", "img/Fondo5.jpeg"];
let contImgUno = 0;
let contImgDos = 0;

function cambiarImg(numContImg){

    if(numContImg == 1){
        contImgUno = contImgUno + 1;
        

        let imagen =  document.getElementById("imgUno");
        imagen.style.backgroundImage = "url('" + imagenesUno[contImgUno] + "')";
        if( contImgUno == 1)
            contImgUno = -1;
    }
    
    if(numContImg == 2){
        contImgDos = contImgDos + 1;
        

        let imagen =  document.getElementById("imgDos");
        imagen.style.backgroundImage = "url('" + imagenesDos[contImgDos] + "')";
        if( contImgDos == 1)
            contImgDos = -1;
    }
    

}

function mensaje(){
    alert("Azul es la mejor persona que no creo merecerme pero doy gracias que haya llegado.");
}
