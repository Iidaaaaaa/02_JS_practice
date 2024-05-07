function convertToBinary() {
  const number = document.getElementById("numberInput").value;
  const binary = Number(number).toString(2);
  document.getElementById("result").textContent = binary;
}
