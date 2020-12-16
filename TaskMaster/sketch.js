function setup() {
    createCanvas(1200, 1200);
  }
  
  function draw() {
    background(255);
    //rect(115,130,180,150);
    let c = mouseX;
    let y = mouseY;
    
    strokeWeight(8);
    fill(220,20,60); //red
    circle(395,320, 50+(y*2));
    strokeWeight(0);
    fill(255,255,255); //white
    circle(415,340, 40+(y*2.2));
    strokeWeight(8);
    fill(220,20,60); //red
    circle(455,320, 50+(y*2));
    strokeWeight(0);
    fill(255,255,255); //white
    circle(435,340, 40+(y*2.2));
    strokeWeight(3-(y/2));
    fill(220+y,20+y,60+(y*2.2)); //crimson
    rect(405,320, 40,30); //bow
    stroke('black'); // Change the color
    strokeWeight(10);
    fill(c,y,113);
    fill(20+y,120+y,60+(y*2)); //wrapping colour
    rect(335,350,180,150);
    strokeWeight(0);
    fill(220+y,20+y,60+(y*2)); //crimson
    rect(335,410,180,30);
    rect(410,350,30,150);
    
  }
  
  function mousePressed() { 
    let c = mouseX;
    let y = mouseY;
  }
  