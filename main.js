var SpeechRecognition=window.webkitSpeechRecognition;
var reconocedor=new SpeechRecognition();
function inicio(){
    document.getElementById("textbox").innerHTML="";
    reconocedor.start();
}
reconocedor.onresult=function(event){
    console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
speak();
}
function speak(){
    var synth=window.speechSynthesis;
    var speakdata=document.getElementById("textbox").value;
    var dialgo=new SpeechSynthesisUtterance(speakdata);
    synth.speak(dialgo);
Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");