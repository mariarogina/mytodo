const input = document.getElementById("main_input_id");
const goButton = document.getElementById("main_button_id");

const resultDiv = document.getElementById("result");

goButton.onclick = () => {
  const value = input.value;

  const resultString = "You entered1: " + value;

  resultDiv.innerText = resultString;
};