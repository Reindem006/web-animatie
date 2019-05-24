var button = document.querySelector('.fly');
var flying = document.querySelector('.plane');
var audio = new Audio('audio1.mp3');

button.addEventListener('click',function(){
    flying.classList.toggle('animate');
    play();
})

/* Audio afspelen */

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

var rotate = document.querySelector('.logo');

window.addEventListener('keydown',function(e){
    if (68 == e.keyCode) {
        rotate.classList.toggle('draaien');
    }
})
