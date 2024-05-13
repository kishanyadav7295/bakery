var menuBtn = document.querySelector("#menu");
var menuBgOverlay = document.querySelector(".menu-bg-overlay");
var menu = document.querySelector("nav ul");
var menuBgLayer = document.querySelector(".menu-bg-layer"); 
// var menuBgLayer = document.querySelector(".menu-bg-layer");
// var menuBgLayer = document.querySelector("#menu-bg-layer");



// document.addEventListener(
//     "scroll",
//     function(event){
//       console.log(window.scrollY);
//     }
// )


 



menuBtn.addEventListener(
"click",
function(){
// menu.style.left = 0;
// menuBgOverlay.style.display = "block";
document.body.classList.toggle("open-menu");
}
)

menuBgOverlay.addEventListener(
"click",
function(){
document.body.classList.remove("open-menu")});




 



// document.addEventListener(
// "scroll",
// function(event){
//  if(window.scrollY >= 38){
// document.body.classList.add("stick-menu");
// }else{
// document.body.classList.remove("stick-menu");
// }});




















$('.testi-slider').slick({
autoplay: true,
autoplaySpeed: 2000,
infinite: true,
slidesToShow: 2,
slidesToScroll: 2,
dots:true,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});