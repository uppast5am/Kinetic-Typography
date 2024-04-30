let font;
let h = 300;
let w = 450;
let a = 5; //a for amplitude
let g = 200; //g for green
let b = 180; //b for blue
let gInc = true;
let bInc = true;
let frame = 0;
let points = [];
let text = 'hello world';

function preload() {
  font = loadFont('Nunito-VariableFont_wght.ttf');
}

function setup() {
  createCanvas(w, h);
  points = font.textToPoints(text, 35, (h/2), 80); //string, x, y, size
  print(points.length);
}


function draw() {
  background(0);
  for (let i = 0; i < points.length; i++) {
    
    //GREEN CONTROL
    if (g < 200 && gInc == false){
      gInc = true;
    } else if (g > 255 && gInc == true) {
      gInc = false;
    }
    g = gInc == true ? g + 0.001 : g - 0.001;
    //BLUE CONTROL
    if (b < 180 && bInc == false){
      bInc = true;
    } else if (b > 255 && bInc == true) {
      bInc = false;
    }
    b = bInc == true ? b + 0.0015 : b - 0.0015;


    //print("gInc=", gInc, " g=", g, " b=", b);
    stroke(0, g, b, 100);
    strokeWeight(1);
    line(points[i].x, points[i].y+ a * sin(frame + i), w/2, h); //x1, x2, y1, y2
    
    stroke(130, g, b, 255);
    ellipse(points[i].x , points[i].y+ a * sin(frame + i*25), 5, 5);
  }
  frame += a/100; 
}

