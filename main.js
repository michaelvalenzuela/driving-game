let $carImg = document.getElementById("f1Car");
let moveCarId = null;
let position = $carImg.getBoundingClientRect();
let car = {
  locationX: position.x,
  locationY: position.y,
  isStarted: false,
  moveX: 1,
  moveY: 0,
  speed: 1
}


document.addEventListener("keydown", function(e){
  if(e.key === "ArrowDown"){
    $carImg.style.transform = "rotate(0deg) rotate(90deg)";
    car.moveX = 0;
    car.moveY = 1;
  }
  else if(e.key === "ArrowLeft"){
    $carImg.style.transform = "rotate(0deg) rotate(180deg)";
    car.moveX = -1;
    car.moveY = 0;
  }
  else if(e.key === "ArrowRight"){
    $carImg.style.transform = "rotate(0deg)";
    car.moveX = 1;
    car.moveY = 0;
  }
  else if(e.key === "ArrowUp"){
    $carImg.style.transform = "rotate(0deg) rotate(-90deg)";
    car.moveX = 0;
    car.moveY = -1;
  }
  else if (e.key === " "){
    if(!car.isStarted){
      startCar();
    }
    else {
      stopCar();
    }
  }
  else if(e.key === "+"){
    car.speed += 1;
  }
  else if(e.key === "-"){
    if(car.speed > 1){
      car.speed -= 1
    }
  }
});

function startCar(){
  car.isStarted = true;
  moveCarId = setInterval(moveCar, 16);
}

function stopCar(){
  car.isStarted = false;
  clearInterval(moveCarId);
}

function moveCar(){
  car.locationX += (car.moveX * car.speed);
  car.locationY += (car.moveY * car.speed);
  $carImg.style.top = car.locationY + "px";
  $carImg.style.left = car.locationX + "px";
}
