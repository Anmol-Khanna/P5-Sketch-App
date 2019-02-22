function setup() {
  createCanvas(800, 800);
  noCursor();
  background(220);
  frameRate(200);
}


function draw() {
	var defaultSize=10;	
    var colourRed=255
	var colourBlue=0;
	var colourGreen=0;
	var size = setStrokeWeight(defaultSize);
	//if(KeyIsPressed===true){
	//	fill(0,0,255);
	//	ellipse(mouseX,mouseY,50,50);
	//}
	//colourRed = setColour(IsKeyDown(LEFT_ARROW));
	//colourBlue = setColour(IsKeyDown(LEFT_ARROW));
	//colourGreen = setColour(IsKeyDown(LEFT_ARROW)); //if left arrow key is down, set all these equal to background colour, as an "eraser" of sorts. Later make the colour a struct or something 
	//drawWhiteCursor(size);
	if(mouseIsPressed){
		drawLine(size, colourRed, colourBlue, colourGreen);
		}	
	//else{
  //  background(220);
		//drawWhiteCursor(size);
	//	}
}

function setCol(IsKeyDown){
	//var colour=10; //colour of background 
	if(isKeyDown == true){
		//return colour;
		fill(0,0,255);
	ellipse(mouseX,mouseY,50,50);
	}
}
function drawWhiteCursor(size) {
	/*fill(255,255,255);
	ellipse(mouseX,mouseY,size,size);
	strokeWeight(size);
    stroke(color(255,255,255));
	line(mouseX,mouseY,pmouseX,pmouseY);*/ //do nothing lel
}	

function setStrokeWeight(size){
	var alpha=5;		//scaling factor
	var diff= abs(max((mouseX-pmouseX),(mouseY-pmouseY)));
	print(diff);
  	if(diff>=7){
     	size=size-(alpha*(2/3));//make strokeWeight smaller
     }
	return size;
}
 function drawLine(size, colourRed, colourBlue, colourGreen){
 	strokeWeight(size);
    stroke(color(colourRed,colourGreen,colourBlue));
 	//ellipse(mouseX,mouseY,size,size);
	line(mouseX,mouseY,pmouseX,pmouseY);
 }

