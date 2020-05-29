$(".animate_1").css({
    visibility: "visible",
    opacity: 0.0
}).animate({
    opacity: 1.0
}, 2000);
// Function galeria de colchones
var zFondos150 = ["url('imagenes/colchon.png')", "url('imagenes/colchon2.png')", "url('imagenes/colchon3.png')", "url('imagenes/colchon4.png')"];
var zFondos600 = ["url('imagenes/colchon.png')", "url('imagenes/colchon2.png')", "url('imagenes/colchon3.png')", "url('imagenes/colchon4.png')"];
var imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
var subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
imagenPrincipal.style.backgroundImage = zFondos600[0];
subImagenes[0].style.backgroundImage = zFondos150[0];
subImagenes[1].style.backgroundImage = zFondos150[1];
subImagenes[2].style.backgroundImage = zFondos150[2];
subImagenes[3].style.backgroundImage = zFondos150[3];
subImagenes[0].addEventListener("mouseover", accion0);
subImagenes[1].addEventListener("mouseover", accion1);
subImagenes[2].addEventListener("mouseover", accion2);
subImagenes[3].addEventListener("mouseover", accion3);
subImagenes[0].addEventListener("click", accion0);
subImagenes[1].addEventListener("click", accion1);
subImagenes[2].addEventListener("click", accion2);
subImagenes[3].addEventListener("click", accion3);

function accion0() {
    imagenPrincipal.style.backgroundImage = zFondos600[0];
}

function accion1() {
    imagenPrincipal.style.backgroundImage = zFondos600[1];
}

function accion2() {
    imagenPrincipal.style.backgroundImage = zFondos600[2];
}

function accion3() {
    imagenPrincipal.style.backgroundImage = zFondos600[3];
}
// inicio animacion 2
// TweenMax.fromTo(".animate_2", 2.2, {width:"0px","opacity":"0"}, {"opacity":"1",width:"100%",  ease:Power0.easeNone, repeat:0, repeatDelay:2});
// TweenMax.fromTo(".animate_3", 2.2, {width:"0px","opacity":"0"}, {"opacity":"1",width:"100%",  ease:Power0.easeNone, repeat:0, repeatDelay:2});
// Fin animacion 2
// Inicio animacion 3 (linea)
  TweenMax.fromTo("hr", 2.2, {width:"0px"}, {width:"80%",  ease:Power0.easeNone, repeat:3, repeatDelay:2});
// Fin animacion 3 (line)
/*Inicio animacion 4*/
// center elements
TweenMax.set(".circlie", {left:"50%", top:"50%", xPercent:-50, yPercent:-50, alpha:0});

// random scale, or I can use cycle here
// TweenMax.staggerTo(".circlie", 1, {cycle: {scale:[1, .25, .5, .75]}});

var scales = [0.25, 0.5, 0.75, 1];
var colors = ["#fff"];

TweenLite.set(".circlie", { scale: sample(scales) });

var tl = new TimelineMax({ repeat: -1 });

for (var i = 0; i < 100; i++) {
  
  tl.to(".circlie", 1, {
    backgroundColor: sample(colors),
    x: random(-100, 100),
    y: random(-100, 100),
    alpha: random(1),
    repeat:1,
    repeatDelay:0.1,
    yoyo: true,
    ease:Expo.easeOut
  });
}

function sample(list) {
  return function() {
    return list[Math.floor(Math.random() * list.length)];
  }  
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return function() {    
    return Math.random() * (max - min) + min;
  }
}
/*Fin animacion 4*/

/*Inicio animacion 5*/
TweenMax.fromTo(".background_container_2", 1.2, {width:"0px",position:"relative",left:"0"}, 
  {width:"80%",left:"5em",  ease:Power0.easeNone, repeat:2, repeatDelay:2});


/*Fin animacion 5*/

/*Inicio animacion 6(slider multi item)*/

/*Fin animacion 6(slider multi item)*/