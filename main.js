function setup(){
    canvas=createCanvas(280,280);
    background("white");

}
function draw (){
    strokeWeight(13);
    stroke("black");
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}