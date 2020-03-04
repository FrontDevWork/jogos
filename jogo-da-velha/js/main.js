 var btnIniciar = document.querySelector("#btn_iniciar_jogo");
 var paginaInicial = document.querySelector("#pagina_inicial");
 var palcoJogo = document.querySelector("#palco_jogo");

 var player1 = document.querySelector("#player_1")
 var player2 = document.querySelector("#player_2")

 var nome_player1 = document.querySelector("#nome_player1")
 var nome_player2 = document.querySelector("#nome_player2")


 btnIniciar.onclick =  function () {
     paginaInicial.style.display = "none";
     palcoJogo.style.display = "block";

     var nomeplayer1 = player1.value;
     var nomeplayer2 = player2.value;


     console.log(nomeplayer1);
     console.log(nomeplayer2);

     nome_player1.innerHTML = nomeplayer1;
     nome_player2.innerHTML = nomeplayer2;
 }