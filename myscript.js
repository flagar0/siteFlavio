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

