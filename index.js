document.querySelector(".btns").addEventListener("click", function() {
  var ele1 = document.querySelector(".btns");
  ele1.classList.toggle("click");
  var ele2 = document.querySelector(".sidebar");
  ele2.classList.toggle("show");
})


document.querySelector(".start").addEventListener("click", function() {
  var firstbutton = document.querySelector(".start");
  var middleS = document.querySelector(".middleSection");
  firstbutton.classList.add("hidden");
  middleS.classList.remove("mid");
  var len = document.querySelectorAll(".btn").length;
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    var key = this.innerHTML;
    sound(key.toUpperCase());
    animation(key.toUpperCase());
  });
}

document.addEventListener("keypress", function(event) {
  sound((event.key).toUpperCase());
  animation((event.key).toUpperCase());
});
});





function sound(key) {
  switch (key) {
    case "Q":
      var tom1 = new Audio("sounds/Q.mp3");
      tom1.play();
      break;

    case "W":
      var tom2 = new Audio("sounds/W.mp3");
      tom2.play();
      break;

    case "E":
      var tom3 = new Audio("sounds/E.mp3");
      tom3.play();
      break;

    case "R":
      var tom4 = new Audio("sounds/R.mp3");
      tom4.play();
      break;

    case "T":
      var snare = new Audio("sounds/T.mp3");
      snare.play();
      break;

    case "A":
      var crash = new Audio("sounds/A.mp3");
      crash.play();
      break;

    case "S":
      var kickbass = new Audio("sounds/S.mp3");
      kickbass.play();
      break;

    case "D":
      var kickbass = new Audio("sounds/D.mp3");
      kickbass.play();
      break;

    case "F":
      var kickbass = new Audio("sounds/F.mp3");
      kickbass.play();
      break;

    case "X":
      var kickbass = new Audio("sounds/X.mp3");
      kickbass.play();
      break;
    default:
  }
}

function animation(key) {
  var active = document.querySelector("." + key);
  active.classList.add("pressed");
  setTimeout(function() {
    active.classList.remove("pressed");
  }, 100);
}
