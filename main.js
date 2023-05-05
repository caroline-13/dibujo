function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
}

function setup() {
    canvas = createCanvas(280, 280);
    background("white");
    canvas.mouseReleased(analizarDibujo);

}
function draw() {
    strokeWeight(13);
    stroke("black");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}
function borrar() {
    background("white");
}
function analizarDibujo() {
    classifier.classify(canvas, resultado);
}
function resultado(error, respuesta) {
    if (!error) {
        console.log(respuesta);
        var dibujo = respuesta[0].label;
        var confianza = respuesta[0].confidence * 100;
        confianza = Math.round(confianza);
        document.getElementById("confianza").innerHTML = "precision " + confianza + "%";
        fetch("https://api.mymemory.translated.net/get?q=" + dibujo + "&langpair=en|es")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                traduccion = data.responseData.translatedText;
                document.getElementById("dibujo").innerHTML = "etiqueta " + traduccion;
                hablar(traduccion);
            });

    }
}
function hablar(mensaje){
    var voz = window.speechSynthesis;
    var lectura = new SpeechSynthesisUtterance(mensaje);
    lectura.lang="es-MX";
    voz.speak(lectura);
}
