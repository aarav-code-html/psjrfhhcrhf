img = "";
status="";
function preload(){
    img=loadImage('adh.jpg')
}
function setup() {
    canvas= createCanvas(640,420)
    canvas.center()
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("sofa",45,75);
    noFill();
    stroke('#FF0000')
rect(25,11,450,350);
    
    fill("#FF0000");
    text("shelf",400,75);
    noFill();
    stroke('#FF0000')
rect(350,11,200,200);
}

function modelloaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResult);

}
function gotResult(){
    if(error){
        console.log(error);
    }
    console.log(results);
}