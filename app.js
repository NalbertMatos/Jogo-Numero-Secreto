function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.4});
}

let contador
let numeroSecreto
parametrosNovoJogo();

function parametrosNovoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100:');
    contador = 0;
    limparInput();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute() {
    contador++;
    console.log(contador)
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', "Você acertou!");
        let mensagemTentativas = contador > 1 ? `Em ${contador} tentativas!` : "E de primeira!";
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        //exibirTextoNaTela('h1', "Você errou...");
        if (chute>numeroSecreto) {
            exibirTextoNaTela('p', "O número secreto é menor.");
        }else{
            exibirTextoNaTela('p', "O numero secreto é maior.");
        }
        limparInput();
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*100) + 1;
}

function limparInput() {
    chute = document.querySelector('input');
    chute.value = '';
}
