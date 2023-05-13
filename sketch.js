function preload(){
  imagemCenario = loadImage('Sprite/cenario/floresta.png');
  imagemGameOver= loadImage('Sprite/assets/game-over.png');
  imagemPersonagem = loadImage('Sprite/personagem/run.png');
  imagemInimigo = loadImage('Sprite/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('Sprite/inimigos/troll.png')
  imagemInimigoVoador = loadImage('Sprite/inimigos/gotinha-voadora.png');
  imagemTelaInicial = loadImage('Sprite/assets/telaInicial.png');
  imagemVida = loadImage('Sprite/assets/coracao.png');
  fonteTelaInicial = loadFont('Sprite/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial()
  jogo = new Jogo()
  cenas = {
    telaInicial,
    jogo
  }
  jogo.setup()
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2)

  frameRate(40)
  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key)
}

function draw() {
  // if(cenaAtual === 'jogo') {
  //   jogo.draw()
  // }
  cenas[cenaAtual].draw()
}