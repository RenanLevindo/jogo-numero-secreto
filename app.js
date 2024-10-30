// Lista de números sorteados
let listaNumerosSorteados = [];
// valor para multiplicação do numero secreto
let valorMultiplo = 10;
// guarda numero aleatório gerado
let numeroAleatorio = gerarNumeroAleatorio();
//inicia contagem de tentantivas em 1
let tentativas = 1;

// Exibir texto na tela
function estilo(tag, texto){
    let alteracao = document.querySelector(tag);
    alteracao.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

//limpa campo de número após click no Novo Jogo
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
}

// exibe mensagem inicial
function exibirMensagemInicial(){
    estilo('h1', 'Jogo do número secreto');
    estilo('p', 'Escolha um número entre 1 e 10');
}

//Exibindo mensagem inicial ao começar o jogo
exibirMensagemInicial();

// Verifica se o chute == numero aleatorio e faz suas tratativas
function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio){
        estilo('h1', 'Acertou!');
        let palavraTentativa = tentativas == 1 ? 'tentativa':'tentativas';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        estilo('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled'); // encontrando o botão novo jogo pelo seu id reiniciar e habilitando ele, eliminando o disabled
    } else{
        if (chute > numeroAleatorio){
            estilo('p', 'Número secreto é menor');
        }else{
            estilo('p', 'Número secreto é maior');
        }
        tentativas++;
        limparCampo()
    }

}

//gera nummero aleatorio
function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random()*valorMultiplo + 1);
   let qtd = listaNumerosSorteados.length;

   if(qtd == valorMultiplo){
    listaNumerosSorteados = [];
   }
   if(numeroEscolhido in listaNumerosSorteados){ // poderia ser (listaNumerosSorteados.includes(numeroEscolhido))
    let numeroEscolhido = parseInt(Math.random()*valorMultiplo + 1);
    return numeroEscolhido;
   }else{
    listaNumerosSorteados.push(numeroEscolhido); // push inclui algo na lista
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
   }
}

//reinicia o jogo ao ser clicado o botão de novo jogo
function reiniciarJogo(){
    exibirMensagemInicial();
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


