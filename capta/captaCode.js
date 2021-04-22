var caract = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
var c = document.getElementById("imagem");
var ctx = c.getContext("2d");
var fontes = ['Arial','Times','Courier New','Comic Sans','Impact','Console Lucida']
var estilo = ['normal ','italic ','oblique ','bolder ','lighter ','small-caps ','normal '];
var codigin;
var correto = false;
const saida = document.getElementById('saida');

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomQ(min, max) {
    return Math.random() * (max - min) + min;
  }

function gerarCod(){
    ctx.clearRect(0, 0, 250, 100);
    var codigo ='';
    for(var i=0;i<getRandom(4,6);i++){
        var num =getRandom(0,62);
        if(codigo==''){
            codigo = caract[num];
        }else{
            codigo = codigo + caract[num];
        }
    }
    codigin=codigo;
    gerarText(codigo);
    
}

function gerarText(texto){

    var pscX = getRandom(10,140);
    var pscY = getRandom(35,80);
    var squish = getRandom(40,120);
    var angle = getRandom(-5,5);

    ctx.font = estilo[getRandom(0,6)] + "35px "+fontes[getRandom(0,5)];//Fonte
    ctx.save();
    ctx.filter = 'blur('+getRandomQ(0,1)+'px)';//Blur
    ctx.rotate(angle * Math.PI / 180);//Giro
    ctx.fillText(texto, pscX, pscY,squish);//Texto
    ctx.restore();
    gerarLinha();
}

function gerarLinha(){
    var vezes=getRandom(1,6)
    for(var p=0;p<vezes;p++){
        var largura = getRandomQ(0.5,3)
        var x1 = getRandom(0,230);
        var y1 = getRandom(0,90);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.bezierCurveTo(getRandom(0,250), getRandom(0,90), getRandom(0,240), getRandom(0,100), getRandom(50,250), getRandom(0,90));
        ctx.lineWidth = largura;
        ctx.stroke();
        
    }
    gerarPontos(p);
    
}

function gerarPontos(linhas){
    if(linhas<=3){
        var qtd = getRandom(5,20)
}else{
    var qtd = getRandom(3,10)
}

    for(var i=0;i<qtd;i++){
        ctx.beginPath();
        ctx.arc(getRandom(5,230), getRandom(5,90), getRandom(1,3), 0, 2 * Math.PI);
        ctx.stroke();
    }
    
}

function Leia(){
let utter = new SpeechSynthesisUtterance();
utter.lang = 'en-UK';
utter.text = codigin;
utter.volume = 0.5;
utter.rate = 0.7;

window.speechSynthesis.speak(utter);
}

function Verifique(){
    if(saida.value==codigin.toLowerCase() || saida.value==codigin || saida.value==codigin.toUpperCase()){
        correto=true;
    }
}