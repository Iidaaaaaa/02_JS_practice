import { Data } from "./weather.js";

const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");
let isJumping = false;
let decreaseAmount = 0.1;
let speed = 2;
let gameStarted = false;
let gameInterval;
window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" && !isJumping) {
    jump();
  }
});

function jump() {
  let position = 0;
  isJumping = true;
  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 10;
          dino.style.bottom = position + "px";
        }
      }, 20);
    } else {
      position += 10;
      dino.style.bottom = position + "px";
    }
  }, 20);
}
window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" && !isJumping) {
    jump();
  }
  if (e.key === " " && !gameStarted) {
    startGame();
    gameStarted = true;
  }
});

setInterval(() => {
  if (
    dino.offsetLeft === 20 &&
    dino.offsetTop === 884 &&
    obstacle.offsetLeft === 20
  ) {
    alert("Game Over");
  }
}, 100);

let score = 0;
const scoreElement = document.querySelector(".score");

// 10秒間で20000になるように、1ミリ秒ごとの増加量を計算
const incrementPerMillisecond = 20000 / 10000;

// 1ミリ秒ごとにスコアを増加させる
const intervalId = setInterval(() => {
  score += incrementPerMillisecond;
  scoreElement.textContent = Math.floor(score); // 小数点以下を切り捨てて表示

  // スコアが20000になったらタイマーを停止
  if (score >= Data) {
    clearInterval(intervalId);
  }
}, 1);
