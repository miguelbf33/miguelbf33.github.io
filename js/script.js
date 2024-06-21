//Menú

var menu_visible=false;
let menu=document.getElementById("menu");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display="block";
        menu_visible=true;

    }else{
        menu.style.display="none";
        menu_visible=false;
    }
}

//barras
function crearBarra(id_barra){
for(i=0;i<=8;i++){
    let div = document.createElement("div");
    div.className="e";
    id_barra.appendChild(div);
}
}
//seleccionar todas las barras para luego manipularlas
let html=document.getElementById("html");
crearBarra(html);
let wordpress=document.getElementById("wordpress");
crearBarra(wordpress);
let java=document.getElementById("java");
crearBarra(java);

//guardar la cantidad de barras  que se van pintando
//array que cada posicion pertenece a un elemento
let contadores=[-1,-1,-1,];
let entro=false;

function efectoHabilidades(){
    var habilidades= document.getElementById("habilidades");
    var distancia_skills= window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
entro=true;
const intervalHtml=setInterval(function(){
    pintarBarra(html,16,0,intervalHtml);
},100);
const intervalJava=setInterval(function(){
    pintarBarra(java,11,1,intervalJava);
},100);
const intervalWordpress=setInterval(function(){
    pintarBarra(wordpress,11,2,intervalWordpress);
},100);
    }
}
//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x=contadores[indice];
    if(x<cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor="#940253";
    }else{
        clearInterval(interval);
    }
}//detecto el scrolling del mouse 
window.onscroll=function(){
    efectoHabilidades();
}

