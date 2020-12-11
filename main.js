let $carImg = document.getElementById("f1Car");
let moveCarId = null;
let position = $carImg.getBoundingClientRect();
let car = {
  locationX: position.x,
  locationY: position.y
}


document.addEventListener("keydown", function(e){
  console.log(e);
  if(e.key === "ArrowDown"){
    $carImg.style.transform = "rotate(0deg) rotate(90deg)";
  }
  else if(e.key === "ArrowLeft"){
    $carImg.style.transform = "rotate(0deg) rotate(180deg)";
  }
  else if(e.key === "ArrowRight"){
    $carImg.style.transform = "rotate(0deg)";
  }
  else if(e.key === "ArrowUp"){
    $carImg.style.transform = "rotate(0deg) rotate(-90deg)";
  }
  else if (e.key === " "){
    startCar();
  }
});

function startCar(){
  moveCarId = setInterval(function(e){
    car.locationX += 1;
    car.locationY += 0;
    $carImg.style.top = car.locationY + "px";
    $carImg.style.left = car.locationX + "px";
  }, 16);
}
