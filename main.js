function preload(){
    classifier=ml5.imageClassifier("DoodleNet");
}

function setup(){
    canvas=createCanvas(280,280);
    background("white");
    canvas.mouseReleased(analizarDibujo);

}
function draw (){
    strokeWeight(13);
    stroke("black");
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function borrar(){
    background("white");
}
function analizarDibujo(){
    classifier.classify(canvas,resultado);
}
function resultado(error,respuesta){
if(!error){
    console.log(respuesta);
}
}