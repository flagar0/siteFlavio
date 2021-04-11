var resultado;

function Calcular(){
    var binario = document.getElementById('entra1').value;
    var lblResul = document.getElementById('resultado');
    var final =0;
    var tamanho
    var multi =1;
    var numeroAtual =0;
    var n;

    tamanho = parseInt(binario.length,10);

    do{
        n = binario[tamanho-1];
        console.log(n);
        numeroAtual = parseInt(n,10);
        console.log(numeroAtual);
        final = final + (numeroAtual* multi);
        console.log(tamanho);
        multi = multi*2;
        tamanho = tamanho-1;

    }while (tamanho >0);{
        lblResul.innerHTML = final.toString();
        console.log(final);
    }
}

function Mudar(){
    let caixa = document.getElementById('caixa');
    var supEsq = document.getElementById('supEsq').value;
    var supDir = document.getElementById('supDir').value;
    var infEsq = document.getElementById('infEsq').value;
    var infDir = document.getElementById('infDir').value;

    if((supEsq <0|| supDir<0|| infEsq<0|| infDir<0) || (supEsq =="" && supDir=="" && infEsq=="" && infDir=="")){
        alert("Digite um Valor válido!");
    }else{

        if(supEsq ==""){
            supEsq="0";
        }
        if(supDir ==""){
            supDir="0";
        }
        if(infEsq ==""){
            infEsq="0";
        }
        if(infDir ==""){
            infDir="0";
        }


    caixa.style.cssText=
    'background-color: green;'+
    'padding: 8%;'+
    'margin: 5%;'+
    'border-radius: '+ supEsq+'px '+ supDir+'px '+infEsq+'px '+infDir+'px;'

    resultado ='border-radius: '+ supEsq+'px '+ supDir+'px '+infEsq+'px '+infDir+'px;';
    }
}

function Copiar(){
    if(resultado != null){
        var fullLink = document.createElement('input');
        document.body.appendChild(fullLink);
        fullLink.value = resultado;
        fullLink.select();
        document.execCommand("copy", false);
        fullLink.remove();
        alert("Texto Copiado: " + fullLink.value);
    }
}


function mudarCor(){
    fundo = document.getElementById('cycler');

    var antigo =  rgb2hex(fundo.style.backgroundColor)
    antigo = antigo.replace(/#/g, '');
    var hexa = parseInt(antigo,16);
    var valor =  hexa + 64;

    var final = valor.toString(16)


    fundo.style.backgroundColor =  "#"+   final
}

var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

function Contar(){
    funContar(document.getElementById('calendario').value);
}

function verCookie(){
    if(document.cookie != null){
        document.getElementById('contador').innerHTML = document.cookie;
    }
}

function funContar(dataEsp){
    var dato = new Date()
    var inicio = new Date(dato.getFullYear(), dato.getMonth(), dato.getDate()); //Dia de Hoje

    var dataCalc = new Date(dataEsp.substring(6,10), parseInt(dataEsp.substring(4,5)-1), dataEsp.substring(0,2));
    dataCalc.setMonth(parseInt(dataEsp.substring(4,5)-1));

    var timeDiff = dataCalc.getTime() - inicio.getTime();   
    if (timeDiff <0){
        alert("Digite um Valor Válido.");
    }else{
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        document.getElementById('contador').innerHTML = diffDays;
        document.cookie = diffDays;
    }
}