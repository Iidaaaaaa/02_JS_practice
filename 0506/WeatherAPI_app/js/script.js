const Btn = document.querySelector(".Btn");
const Area = document.querySelector(".Area");
const Area2 = document.querySelector(".Area2");

Btn.addEventListener("click", function () {
  Area.textContent = "";
  const number = document.getElementById("numberInput").value;
  const binary = Number(number).toString(2);
  document.getElementById("result").textContent = binary;

  let charArray = [];
  for (let i = 0; i < binary.length; i++) {
    charArray[i] = binary[i];
    if (charArray[i] === "0") {
      const Zero = document.createElement("div");
      Zero.classList.add("zero");
      Area.appendChild(Zero); // 修正
    } else {
      const One = document.createElement("div");
      One.classList.add("one");
      Area2.appendChild(One); // 修正
    }
    console.log(charArray[i]);
  }
});
