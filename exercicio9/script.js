function exibaIdade() {
  let idade = parseInt(document.getElementById("idade").value);

  let resultado = "";

  if (idade <= 15) {
    resultado = "jovem";
  } else if (idade >= 65) {
    resultado = "idoso";
  } else {
    resultado = "adulto";
  }
  let p = document.createElement("p");
  p.innerText = resultado;
  let div = document.getElementById("resultado");
  div.appendChild(p);
  idade = 0;
}
