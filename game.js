p1x=300
p2x=250
p1y=300
p2y=100

var music;
var fireSound;
var fartSound;
var g_over1_Sound;
var g_over2_Sound;

function preload() {
  music = loadSound("musicAS.mp3")
  fireSound = loadSound("Scifi-03.mp3")
  fartSound = loadSound("fart.mp3")
  g_over1_Sound = loadSound("game_over.mp3")
  g_over2_Sound = loadSound("game_over(1).mp3")
}

function setup() {
  createCanvas(1350, 630);
	background(102,153,153);
}

function draw() {
minion()
}
function minion()
{
	
	background(102,153,153);

  if (p1x<0)p1x=0;
	if (p1y<50)p1y=50;
  if (p1x>1250)p2x=1250;
	if (p1y>525)p1y=525;

  if (keyIsDown(LEFT_ARROW))p1x -=1;
	if (keyIsDown(RIGHT_ARROW)){p1x += 1;}
	if (keyIsDown(UP_ARROW)){p1y-=1;}
	if (keyIsDown(DOWN_ARROW)){p1y+=1;}
	
	fill(26,140,255);
	ellipse(p1x+50,p1y,100,100)
	fill(255,204,0)
	rect(p1x,p1y,100,100);
	fill(153, 153, 102)
  ellipse(p1x+50,p1y,40,40)
  fill(255,255,255)
  ellipse(p1x+50,p1y,30,30)
  fill(0,0,0)
  ellipse(p1x+50,p1y,10,10)
  fill(26,140,255);
  rect(p1x,p1y+60,100,40)
  rect(p1x,p1y+60,100,40)
  fill(255,255,255)
  ellipse(p1x+25,p1y+100,25,25)
  ellipse(p1x+75,p1y+100,25,25)	
  if (p2x<0)p2x=0;
	if (p2y<50)p2y=50;
  if (p2x>1250)p2x=1250;
	if (p2y>525)p2y=525;

  keyTyped();
	fill(0,0,0);
	ellipse(p2x+50,p2y,100,100)
	fill(255,204,0)
	rect(p2x,p2y,100,100);
	fill(153, 153, 102)
  ellipse(p2x+50,p2y,40,40)
  fill(255,255,255)
  ellipse(p2x+50,p2y,30,30)
  fill(0,0,0)
  ellipse(p2x+50,p2y,10,10)
	fill(0,0,0);
  rect(p2x,p2y+60,100,40)
  rect(p2x,p2y+60,100,40)
  fill(255,255,255)
  ellipse(p2x+25,p2y+100,25,25)
  ellipse(p2x+75,p2y+100,25,25)	

}
function fire(fx,fy)
{
    fill(255,0,0);
    arc(fx,fy,75,50,2.0,-2.0,PIE)
 
}

function fart(fax,fay)
{
    fill(51, 204, 51);
  ellipse(fax,fay,25,25);
}

function keyTyped() {
  if(key=='i')
  {
    fx=p1x;
  fy=p1y+50;
	while(fx>0)
  {

    fireSound.play() ;

	  fire(fx,fy);
    fx-=50;}
  }
  if(key=='o')
  {
  fax=p1x+115;
  fay=p1y+70;
	while(fax<1350)
  {

    fartSound.play() ;

	fart(fax,fay);
    fax+=20;}
  }
  if(key=='f')
  {
    fx=p2x;
  fy=p2y+70;
	while(fx>0)
  {
    fartSound.play() ;

    fart(fx,fy);
    fx-=20;}
  }
  if(key=='g')
  {
  fax=p2x+115;
  fay=p2y+50;
	while(fax<1350)
  {
	   fireSound.play() ;

	fire(fax,fay);
    fax+=50;}
  }
  if (key === 'a') {
    p2x = p2x -1
  } 
  if (key === 'd') {
    p2x=p2x+1;
  }
  if (key === 'w') {
    p2y=p2y-1;
  }
  if (key === 's') {
    p2y=p2y+1;

}
	
}
function player2()
{
  keyTyped()
}