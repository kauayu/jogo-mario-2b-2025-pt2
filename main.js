 const mario = document.querySelector(".mario")
 const pipe = document.querySelector(".pipe")
 const nuvem = document.querySelector(".nuvem")
 const startButton = document.querySelector(".start")
 const gameOverScreen = document.querySelector(".game-over")
 const scoreElement = document.querySelector(".score")

 audioStart = new Audio("/sound/audio_theme.mp3");
 const gameOverSound = new Audio("./soud/audio_gameover.mp3");

 let gameStarted = false;
 let score = 0;

 const startGame = () => {
     gameStarted = true;
     audioStart.play();

     pipe.style.animation = "pipe-animation 1.5s infinite linear";

     startButton.style.display = "none";
     mario.style.opacity = "1";
     pipe.style.opacity = "1";
     nuvem.style.opacity = "1";
}


 const jump = () => {
     mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }
    ,500);
}

const updateScore = () => {
    score += 1;
    scoreElement.textcontent = score;
const loop = setInterval(() => {
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.left = `${marioPosition}px`;

        mario.src = "./imagem/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
    }
},10);
document.addEventListener("keydown", jump);

gameOverScreen.style.display = "flex";
} else if (pipePosition < 0 && gameStarted)