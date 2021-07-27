var slide = document.getElementById("slide");
var back = document.getElementById("back");
var next = document.getElementById("next");

var slideimg = new Array(
    "img/homepng3.png",
    "img/homepng1.png",
    "img/homepng2.png",
   
);

let i = 0;
next.onclick = function(){
    if (i < 2){
        slide.src = slideimg[i+1];
        i++;
    }
   
};

back.onclick = function(){
    if (i > 0){
        slide.src = slideimg[i-1];
        i--;
    }
   
};