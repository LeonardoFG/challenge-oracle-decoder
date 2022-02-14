
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

var entradaCodificada = entrada.replace(/[e\é\ê]/gi, 'enter')
.replace(/[i\í\î]/gi, 'imes').
replace(/[a\á\â\ã\á]/gi, 'ai').
replace(/[o\ó\õ\ô\ó]/gi, 'ober').
replace(/[u\ú\ú]/gi, 'ufat');
console.log(entradaCodificada);

var textoResultado = document.querySelector('.text-input');

textoResultado.value = entradaCodificada;


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
} else {
	alert('A mensagem não está criptografada');
}