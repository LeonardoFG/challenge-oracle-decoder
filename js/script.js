
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

//var entrada = document.querySelector('.text-input').value;
//entrada.value;
var entrada = 'aeiou';

function criptografar(){
    var entradaCodificada = entrada.replace(/[e\é\ê]/gi, 'enter')
    .replace(/[i\í\î]/gi, 'imes').
    replace(/[a\á\â\ã\á]/gi, 'ai').
    replace(/[o\ó\õ\ô\ó]/gi, 'ober').
    replace(/[u\ú\ú]/gi, 'ufat');
    console.log(entradaCodificada);

    var textoResultado = document.querySelector('.text-input');

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
var verificar = palavrasChave.some(elementoArray => entradaCodificada.includes(elementoArray));

if (verificar) {
    descriptografar();
    console.log(saidaDescriptografada);
} else {
	alert('A mensagem não está criptografada');
}

function descriptografar(){
    var saidaDescriptografada = textoResultado.replace('enter', 'e')
    .replace('imes', 'i' ).
    replace('ai', 'a').
    replace('ober', 'o').
    replace('ufat', 'u'); 
    console.log(saidaDescriptografada);
}

var ElementoBotaoC = document.querySelector('#btn-cripto');

ElementoBotaoC.addEventListener('click', criptografar());

var ElementoBotaoD = document.querySelector('#btn-descripto');

ElementoBotaoD.addEventListener('click', descriptografar());

input-texto.addEventListener('click', function () {
	// linhas de código...
})

// ou

input-texto.textContent = 'blablabla'
input-texto.value = 'taltaltal'


function copiaTexto(){
    var texto = document.querySelector('.texto-class')

    navigator.clipboard.writeText(texto.value)

    // Podemos ainda limpar a caixa de texto, atribuindo o valor '' ao elemento: 

    texto.value = ''
}
