var btnIniciar = document.querySelector("#btn_iniciar_jogo");
var paginaInicial = document.querySelector("#pagina_inicial");
var palcoJogo = document.querySelector('#palco_jogo');

var player1 = document.querySelector("#player_1");
var player2 = document.querySelector("#player_2");

var ElNomePlayer1 = document.querySelector('#nome_player1');
var ElNomePlayer2 = document.querySelector('#nome_player2');

btnIniciar.onclick = function() {
    paginaInicial.style.display = 'none';
    palcoJogo.style.display = 'block';

    var nomePlayer1 = player1.value;
    var nomePlayer2 = player2.value;

    ElNomePlayer1.innerHTML = nomePlayer1;
    ElNomePlayer2.innerHTML = nomePlayer2;
}

