function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    rect(115,130,180,150);
    let c = mouseX;
    let y = mouseY;
    
    strokeWeight(8);
    fill(220,20,60); //crimson
    circle(175,100, 50);
    strokeWeight(0);
    fill(255,255,255); //white
    circle(195,120, 40);
    strokeWeight(8);
    fill(220,20,60); //crimson
    circle(235,100, 50);
    strokeWeight(0);
    fill(255,255,255); //white
    circle(215,120, 40);
    strokeWeight(10);
    fill(220,20,60); //crimson
    rect(185,100, 40,30);
    stroke('black'); // Change the color
    strokeWeight(10);
    fill(c,y,113);
    fill(1+c*2,10+y*2,250); //yellow
    rect(115,130,180,150);
    fill(220,20,60); //crimson
    rect(115,190,180,30);
    rect(190,130,30,150);
    
  }
  
  function mousePressed() { 
    let c = mouseX;
    let y = mouseY;
  }
  