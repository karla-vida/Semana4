const data = document.querySelector("#data");

data.addEventListener(
  "change",
  function () {
    verificaEstacao();
  },
  false
);

function verificaEstacao() {
  let data = document.getElementById("data").value;

  //const dataFormatada = new Date(data);
  const dataFormatada = new Date(`${data} 00:00`);

  if (!(dataFormatada instanceof Date) || isNaN(dataFormatada)) {
    alert("Data inválida");
    return;
  }

  const dia = dataFormatada.getDate();
  const mes = dataFormatada.getMonth() + 1;
  let imagem = document.getElementById("img");
  let estacao = document.getElementById("estacao");
  if (
    (dia >= 22 && mes === 3) ||
    mes === 4 ||
    mes === 5 ||
    (dia <= 21 && mes === 6)
  ) {
    estacao.innerText = "Outono";
    imagem.src = "outono.jpg";
    return;
  }

  if (
    (dia >= 22 && mes === 6) ||
    mes === 7 ||
    mes === 8 ||
    (dia <= 21 && mes === 9)
  ) {
    estacao.innerText = "Inverno";
    imagem.src = "inverno.jpg";
    return;
  }

  if (
    (dia >= 22 && mes === 9) ||
    mes === 10 ||
    mes === 11 ||
    (dia <= 21 && mes === 12)
  ) {
    estacao.innerText = "Primavera";
    imagem.src = "primavera.jpg";
    return;
  }
  estacao.innerText = "Verão";
  imagem.src = "verao.jpg";
}
