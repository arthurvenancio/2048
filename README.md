<h1>2048</h1>
<p>Este repositório é dedicado para reprodução de uma versão web do jogo mobile 2048. Este projeto foi feito com intuito apenas de praticar conceitos de programação javascript.</p>

<h2>Avisos</h2>
<p>A versão final do jogo está publicada no link https://arthurvenancio.github.io/2048 e no repositório a branch final é a gh-pages </p>

<h2>Mecânicas Gerais</h2>
<p>O objetivo final do jogo é você conseguir que um bloco atinga o valor <strong>2048</strong>. Mas como fazer isso não é algo tão fácil então o record mantém a sua maior pontuação enquanto ainda está usando o site. <em>(Possível feature de melhoria: manter pontuação do jogador com cookies)</em></p>

<p>A mecânica principal do jogo é que quando você escolher uma das quatro direções para os blocos irem no tabuleiro eles iram todos se deslocar nessa direção e se encontrarem algum bloco de valor igual durante o movimento eles irão se juntar e o bloco final dobrará de valor. Ao final de cada movimento um novo bloco <strong>(Sempre de valor 2)</strong> irá aparecer no tabuleiro caso tenha espaço.</p>

<p>O jogo chega no Game Over quando não houver mais jogadas possíveis para que o jogador possa fazer.</p>

<p>Na parte superior da tela temos 2 botões destacados na cor laranja. O primeiro de nome "Reiniciar", reinicia o jogo. Já o segundo, "Desfazer", desfaz a última jogada feita pelo usuário</p>

<h2>Versão Desktop</h2>
<p>A versão desktop foi pensada para ser jogada através das setas do teclado como indicado na tela para o usuário.</p>

insira imagem

<p>Caso o usuário não utilize as teclas indicadas, o aviso ficará mais enfatico.</p>

insira imagem

<h2>Versão Mobile</h2>
<p>A versão mobile funciona de duas formas possíveis: a primeira é através de swipes na tela do aparelho de maneira convencional, porém os usuários teste reportaram dificuldade em utilizar o swipe para baixo já que esse comando naturalmente também é utilizado para recarregar a página, então foi implementado um segundo jeito de controle através de setas virtuais na tela para que o usuário possa usar de maneira mais simples</p>

insira imagem
