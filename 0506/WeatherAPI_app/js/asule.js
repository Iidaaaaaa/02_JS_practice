const block = document.getElementById("block");
let topPosition = block.offsetTop;
let isUpPressed = false; // 上矢印キーが押されたかどうかを示すフラグ
let isDownPressed = false; // 下矢印キーが押されたかどうかを示すフラグ

document.body.addEventListener("keydown", function (event) {
  const key = event.key;

  switch (key) {
    case "ArrowUp":
      if (isUpPressed) {
        // 上矢印キーが既に押されている場合、入力を無視する
        return;
      }
      isUpPressed = true;
      isDownPressed = false;
      topPosition -= 150;
      console.log(topPosition);
      break;
    case "ArrowDown":
      if (isDownPressed) {
        // 下矢印キーが既に押されている場合、入力を無視する
        return;
      }
      isDownPressed = true;
      isUpPressed = false;
      topPosition += 150;
      console.log(topPosition);
      break;
  }

  block.style.top = `${topPosition}px`;
});
