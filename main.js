function DaBaby() {
  document.getElementById("daBabyPic").style.display = "block";
  document.getElementById("ReloadP").style.display = "block";
  document.getElementById("letsGoo").style.display = "block";
  DaBabyAudio();
}

function DaBabyAudio() {
  var audio = new Audio("audio/daBaby.mp3");
  audio.oncanplaythrough = function () {
    audio.play();
    document.getElementById("daBabyButton").style.display = "none";
    document.getElementById("lilPumpButton").style.display = "none";
  };
}

function LilPumpAudio() {
  var audio = new Audio("audio/lilPump.mp3");
  audio.oncanplaythrough = function () {
    audio.play();
    document.getElementById("daBabyButton").style.display = "none";
    document.getElementById("lilPumpButton").style.display = "none";
  };
}

// function DoAgain() {
//   document.getElementById("daBabyPic").style.display = "none";
//   document.getElementById("ReloadP").style.display = "none";
//   document.getElementById("letsGoo").style.display = "none";
//   document.getElementById("daBabyButton").style.display = "block";
//   document.getElementById("lilPumpButton").style.display = "block";
// }

function FakePump() {
  DaBaby();
  document.getElementById("actualPump").style.display = "block";
}

function ActualPump() {
  document.getElementById("lilPumpPic").style.display = "block";
  document.getElementById("ReloadP").style.display = "block";
  document.getElementById("lilPumpButton").style.display = "none";
  document.getElementById("actualPump").style.display = "none";
  document.getElementById("daBabyPic").style.display = "none";
  document.getElementById("ReloadP").style.display = "none";
  document.getElementById("letsGoo").style.display = "none";
  LilPumpAudio();
}

// var daBabyAudio = document.getElementById("daBabyAudio");
// var lilPumpAudio = document.getElementById("lilPumpAudio");
