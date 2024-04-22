import { Chiikawa } from "./class.js";

// story:話, title:題名, image:サムネイル名, id:YouTube動画id
const chiikawas = [
  {
    story: 1,
    title: "かためのプリン／ホットケーキ",
    image: "chiikawa-001.webp",
    id: "pbQQAwSQUX4",
  },
  {
    story: 2,
    title: "スフィンクス／ほんものだ",
    image: "chiikawa-002.webp",
    id: "i6d3K6ln-d4",
  },
  {
    story: 3,
    title: "イカ／パイシチュー",
    image: "chiikawa-003.webp",
    id: "a7cwqxmn7rY",
  },
  {
    story: 4,
    title: "ブロッコリー／ピザまん",
    image: "chiikawa-004.webp",
    id: "l9IAr7WY-Xk",
  },
  {
    story: 5,
    title: "チャリメラ／チャルメラ",
    image: "chiikawa-005.webp",
    id: "cE8wVmwY7VY",
  },
];
const Div = document.querySelector(".contents");

chiikawas.forEach((taiwan) => {
  const List = new Chiikawa(
    taiwan.story,
    taiwan.title,
    taiwan.image,
    taiwan.id
  );
  Div.insertAdjacentHTML("beforeend", List.descript());
});
