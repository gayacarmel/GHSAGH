let vid; 
let mySound; 
function preload() {
  mySound = loadSound("cat.mp3");
  } 
function setup() {   
createCanvas(600, 600);  
  vid = createVideo("brif 2 - digital.mp4"); 
  vid.size(400, 400);  
  vid.volume(1);  
  vid.loop(); 
  vid.hide(); 
} 
function draw() {  
  background(5);   
  let img = vid.get(); 
  image(img, 10, 10);   //filter(POSTERIZE, 3); 
}

function mousePressed() { mySound.play(); } 