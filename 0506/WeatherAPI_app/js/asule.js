const block = document.getElementById("block");
let initialPosition = getComputedStyle(block).top; // ジャンプ前の位置を保存
let isJumping = false; // ジャンプ中かどうかを示すフラグ

document.body.addEventListener("keydown", function (event) {
  const key = event.key;

  switch (key) {
    case "ArrowUp":
      if (isJumping) {
        // 既にジャンプ中の場合、入力を無視する
        return;
      }
      isJumping = true;
      // ジャンプモーションを作成
      let jumpHeight = 150;
      let jumpInterval = setInterval(() => {
        if (jumpHeight <= 0) {
          // ジャンプが終了したら、インターバルをクリア
          clearInterval(jumpInterval);
          block.style.top = initialPosition; // 元の位置に戻る
        } else if (jumpHeight > 75) {
          // ジャンプ中の上昇
          block.style.top = `${block.offsetTop - 5}px`; // 一度に移動する距離を半分に
          jumpHeight -= 5; // 一度に移動する距離を半分に
        } else {
          // ジャンプ中の下降
          block.style.top = `${block.offsetTop + 5}px`; // 一度に移動する距離を半分に
          jumpHeight -= 5; // 一度に移動する距離を半分に
        }
      }, 20); // 間隔を2倍に
      break;
  }
});

// 元の位置に戻ったら、ジャンプが終了したとみなす
block.addEventListener("transitionend", function () {
  if (block.style.top === initialPosition) {
    isJumping = false;
  }
});
