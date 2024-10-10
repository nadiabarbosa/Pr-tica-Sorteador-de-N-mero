function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert ('O valor inserido no campo "Do número" deve ser inferior ao valor inserido no campo "Até o número". Verifique!');
        return;
    };
    
    if (quantidade > (ate - de + 1)) {
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">A quantidade de números sorteados deve ser inferior ou igual a diferença entre o número inicial e final. </label>';
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(de, ate); 
        
        while (sorteados.includes(numero)){
            numero = gerarNumeroAleatorio(de, ate);
        } 

        sorteados.push(numero);
    };
   
   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;

   alterarStatusBotaoReiniciar(); 
};

function gerarNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function alterarStatusBotaoReiniciar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    }else{
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    };
};

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotaoReiniciar();
};

