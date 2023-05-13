function preload(){
    imagemCenario = loadImage('Sprite/cenario/floresta.png');
    imagemGameOver= loadImage('Sprite/assets/game-over.png');
    imagemPersonagem = loadImage('Sprite/personagem/run.png');
    imagemInimigo = loadImage('Sprite/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('Sprite/inimigos/troll.png')
    imagemTelaInicial = loadImage('Sprite/assets/telaInicial.png');
    fonteTelaInicial = loadFont('Sprite/assets/fonteTelaInicial.otf');
    imagemInimigoVoador = loadImage('Sprite/inimigos/gotinha-voadora.png');
    somDoJogo = loadSound('sons/florest.wav');
    somDoPulo = loadSound('sons/somPulo.mp3');
  }