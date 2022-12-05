var drumButtons = document.querySelectorAll("button.drum");

for (let buttonNum = 0; buttonNum < drumButtons.length; buttonNum++) {
  document.querySelectorAll("button.drum")[buttonNum].addEventListener("click", function () {
    makeSound(this.innerHTML);
  });
}

document.addEventListener("keypress", (event) =>
  makeSound(event.key)
);

function makeSound(key) {
  switch (key) {
    case "w":
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      const kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      const tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      const tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      const tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      const tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(this);
      break;
  }
}