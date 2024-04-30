
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;

        // if (idSelecionado === 'ultron') return;

        /* OBJETIVO 1 - QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM TEMOS QUE:
        
        - COLOCAR A CLASSE SELECIONADO NO PERSONAGEM QUE PASSAMOS OU MOUSE EM CIMA PARA ADICIONAR A ANIMAÇÃO DELE.
        
        - RETIRAR A CLASSE SELECIONADO DO PERSONAGEM QUE JÁ ESTÁ SELECIONADO.*/

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        /*OBJETIVO 2 - QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM DA LISTAGEM,TROCAR A IMAGEM E NOME DO PERSONAGEM GRANDE.
       - ALTERAR IMAGEM DO JOGADOR 1 / - ALTERAR O NOME DO JOGADOR 2 */

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
        

        const nomeJogador1 = document.getElementById('nome-jogador-1');

        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;


    });
});

