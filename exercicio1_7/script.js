let contasClientes = [
  {
    id: 1,
    nome: "Cliente 01",
    saldo: 500,
  },
  {
    id: 2,
    nome: "Cliente 02",
    saldo: 3000,
  },
  {
    id: 3,
    nome: "Cliente 03",
    saldo: 5000,
  },
];

let contas = document.getElementById("contas");

function selecionarContas() {
  contasClientes.forEach((conta) => {
    contas.innerHTML += `<option>${conta.nome} </option>`;
  });
}

let gerarListItem = (conteudo) => {
  return "<li>" + conteudo + "</li>";
};
