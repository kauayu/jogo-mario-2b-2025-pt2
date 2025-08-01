 const mario = document.querySelector(".mario")
 const pipe = document.querySelector(".pipe")
 const nuvem = document.querySelector(".nuvem")
 const startButton = document.querySelector(".start")
 const gameOverScreen = document.querySelector(".game-over")
 const scoreElement = document.querySelector(".score")

 audioStart = new Audio("./sound/audio_theme.mp3");
 const gameOverSound = new Audio("./sound/audio_gameover.mp3");

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
    scoreElement.textContent = score;
    const animationSpeed = 1.5/ (1 + score/500);
    pipe.style.animation = `pipe-animation ${animationSpeed}s infinite linear`;
}

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

        audioStart.pause();
        gameOverSound.play();

        clearInterval(loop);
        gameOverScreen.style.display = "flex";
    } else if (pipePosition < 0 && gameStarted) {
     updateScore();
     pipe.style.left = '';     
    }
},10);

document.addEventListener("keydown", jump);

const restartGame = () => {
    window.location.reload();
}
