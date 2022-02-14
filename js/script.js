
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/
var entradaCodificada = '';
var saidaDescriptografada = '';
var textoResultado = '';
var entrada = '';
//entrada.value;
//var entrada = 'aeiou';

function criptografar(){
    event.preventDefault(); //para não carregar a pagina de no após clicar e limpar os campos
    entrada = document.querySelector('#input-texto').value;
    entradaCodificada = entrada.replace(/[e\é\ê]/gi, 'enter')
    .replace(/[i\í\î]/gi, 'imes').
    replace(/[a\á\â\ã\á]/gi, 'ai').
    replace(/[o\ó\õ\ô\ó]/gi, 'ober').
    replace(/[u\ú\ú]/gi, 'ufat');
    console.log(entradaCodificada);

    textoResultado = document.querySelector('#msg');

    textoResultado.value = entradaCodificada;

}


/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

var palavrasChave = ['enter', 'imes', 'ai', 'ober', 'ufat']

function descriptografar(){
    event.preventDefault();
    var verificar = palavrasChave.some(elementoArray => entradaCodificada.includes(elementoArray));
    if (verificar) {
        saidaDescriptografada = textoResultado.replace('enter', 'e')
        .replace('imes', 'i' ).
        replace('ai', 'a').
        replace('ober', 'o').
        replace('ufat', 'u'); 
        console.log(saidaDescriptografada);
        } else {
        alert('A mensagem não está criptografada');
    }

}

var ElementoBotaoC = document.querySelector('#btn-cripto');
ElementoBotaoC.addEventListener('click', criptografar);

var ElementoBotaoD = document.querySelector('#btn-descripto');
ElementoBotaoD.addEventListener('click', descriptografar);

var ElementoBotaoCopy = document.querySelector('#btn-copy');
ElementoBotaoCopy.addEventListener('click', copiaTexto);


function copiaTexto(){
    var texto = document.querySelector('#msg');

    navigator.clipboard.writeText(texto.value);

    // Podemos ainda limpar a caixa de texto, atribuindo o valor '' ao elemento: 

    texto.value = '';
    var campoEntrada = document.querySelector('#input-texto');
    campoEntrada.focus();
    console.log('copiaTexto');
}
