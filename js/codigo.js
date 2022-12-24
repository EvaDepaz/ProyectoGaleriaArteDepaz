
var x=0;
function rotacion() {
   
    var imagenes=["/img/portada1.jpg","/img/portada2.jpg","/img/portada3.jpg","/img/portada4.jpg","/img/portada5.jpg","/img/portada6.jpg"];
    document.getElementById("portada").src=imagenes[x];
    x++;
    if(x>=6)x=0;
    setTimeout(rotacion,2000);
    

}
rotacion();
//Cambiar colores texto centrado
var a=0;
function cambiarcolores(){
    var colores = ["white","#D3D3D3","#F5F5F5","white","#F0F0F0"];
    document.getElementById("centrado").style.color=colores[a];
    a++;
    if(a>4) a=0;
    setTimeout(cambiarcolores,2000);

}
cambiarcolores ();


//TEXTO Centrado slider
var b=0;
function deslizante(){
    var texto=["LAS GRANDES OBRAS DE VELÁZQUEZ","EN ART GALLERY LIMA"]
   
    document.getElementById("centrado").textContent=texto[b];
    b++;
    if(b>1)b=0;
    setTimeout(deslizante,6000);
}

deslizante();











//funciones para iconos redes sociales
function rotar(p){
    document.getElementsByClassName("icon")[p].style.transform="rotate(360deg)";
    document.getElementsByClassName("icon")[p].style.transition="all 2s";
}

function norotar(q){
    document.getElementsByClassName("icon")[q].style.transform="rotate(-360deg)";
    document.getElementsByClassName("icon")[q].style.transition="all 2s";
}




/////////aumentar flecha UP
function aumentoOfr(e){
    document.getElementsByClassName("flecha")[e].setAttribute("style", "width:30px");


}
 
function disminuyeOfr(f){
    document.getElementsByClassName("flecha")[f].setAttribute("style", "width:25px");


}



//zoom imagenes

function zoom(k){
    document.getElementsByClassName("imgObra")[k].setAttribute("style","scale:1.1","margin-left:10px")

}

function Nozoom(j){
    document.getElementsByClassName("imgObra")[j].setAttribute("style","transition:0.5s","scale:1")
}


