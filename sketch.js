function setup() {
    createCanvas(400, 400);
    background("green");
  }
  
  function draw() {
    
    fill("red")
    stroke("white")
    
    console.log(mouseIsPressed)
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    
    }  
  }