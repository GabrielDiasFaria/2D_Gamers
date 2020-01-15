# 2D_Gamers
Motor MMO para jogos.

Criado com o intuito de utilizar NodeJs e Socket.Io para montar um motor de MMO.

1st_Release
> Server.js
  > Responsável por gerenciar a parte do Servidor.
  > Nele ficarão todas as informações e controles de emmit e on do Socket para interação com os jogadores
 
 Public
 > createGame
  -> Módulo responsável por controlar regras do jogo
 
 > keyboardListener
  -> Módilo responsável por controlar os inputs do usuáro
  
 > renderScreen
  -> Responsável por renderizar a tela dos players
  
 > index.html
  -> Controla a comunicação com o Socket do servidor para renderizar enviando e recebendo eventos
