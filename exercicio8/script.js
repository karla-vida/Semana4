const button = document.querySelector("#button");

button.addEventListener(
  "click",
  function () {
    verificaPar();
  },
  false
);

//let numero=input;
function verificaPar() {
  let numero = parseInt(document.querySelector("#input").value);
  let resultado;
  if (numero % 2 == 0) {
    resultado = "Par";
  } else {
    resultado = "Ímpar";
  }
  let div = document.getElementById("resultado");
  div.innerText = resultado;
}
