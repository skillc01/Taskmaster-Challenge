function setup() {
    createCanvas(600, 600);
    background(255);
  }
  
  function draw() {
    
    //rect(115,130,180,150);
    let c = mouseX;
    let y = mouseY;

    
    
    strokeWeight(8);
    fill(220,20,60); //red
    circle(295,220, 50+(y));
    strokeWeight(0);
    fill(255,255,255); //white
    circle(315,240, 40+(y));
    strokeWeight(8);
    fill(220,20,60); //red
    circle(355,220, 50+(y));
    strokeWeight(0);
    fill(255,255,255); //white
    circle(335,240, 40+(y));

    fill(255,255,255); //white
    circle(330,360, 40+(y*6));

    strokeWeight(0);
    fill(220+y,20+y,60+(y)); //crimson
    rect(305,220, 40,30); //bow
    stroke('black'); // Change the color
    strokeWeight(10);
    fill(c,y,113);
    fill(20+y,120+y,60+(y*2)); //wrapping colour
    rect(235,250,180,150);
    strokeWeight(0);
    fill(220+y,20+y,60+(y*2)); //crimson
    rect(235,310,180,30);
    rect(310,250,30,150);
    fill(150,75,150-y); //brown
    rect(270,280,110,75);
    fill((y*2)+220,(y*0.1)+20,(y*0.1)+60); //crimson
    circle(325,320,22);
  }
  
  // function mousePressed() { 
  //   let c = mouseX;
  //   let y = mouseY;
  //   fill(c,y,113); //christmas tree green
  //   rect(c,y,50,40);
  // }
  