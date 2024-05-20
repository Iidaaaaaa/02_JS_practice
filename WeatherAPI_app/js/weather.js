const codeNums = [
  { 愛知県: 230000 },
  { 岐阜県: 210000 },
  { 三重県: 240000 },
  { 静岡県: 220000 },
];

const weekUrl = `https://www.jma.go.jp/bosai/forecast/data/forecast/${codeNums[0]["愛知県"]}.json`;

fetch(weekUrl)
  .then(function (response) {
    if (response.status !== 200) {
      console.log("問題がありました。ステータスコード:" + response.status);
      return;
    }
    // responseのテキストを調べる
    response.json().then(function (data) {
      const Data = data[1].tempAverage.areas[0].area.code;
      const Dataarea = document.querySelector(".data");
      Dataarea.textContent = Data;
    });
  })
  .catch(function (err) {
    console.log("Fetchエラー:", err);
  });
