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
let operacao = document.getElementById("operacao");

function selecionarContas() {
  contasClientes.forEach((conta) => {
    contas.innerHTML += `<option value=${conta.id}>${conta.nome} </option>`;
  });
}

function verificaOperacao() {
  let valor = parseFloat(document.getElementById("valor").value);
  let idConta = parseInt(contas.value);
  let opcaoSelecionada = operacao.options[operacao.selectedIndex].text;
  if (opcaoSelecionada == "Sacar") {
    sacar(valor, idConta);
  } else {
    depositar(valor, idConta);
  }
}

function verificarSaldo(idConta) {
  let valor = 0;
  contasClientes.forEach((conta) => {
    if (conta.id == idConta) {
      valor = parseFloat(conta.saldo);
    }
  });

  return valor;
}

function atualizaSaldo(idConta, valor) {
  let saldoFinal = 0;
  let opcaoSelecionada = operacao.options[operacao.selectedIndex].text;
  contasClientes.forEach((conta) => {
    if (conta.id == idConta) {
      if (opcaoSelecionada == "Sacar") {
        conta.saldo = conta.saldo - valor;
      }
      if (opcaoSelecionada == "Depositar") {
        conta.saldo = conta.saldo + valor;
      }
      saldoFinal = conta.saldo;
    }
  });
  return saldoFinal;
}

function sacar(valor, id) {
  let saldo = verificarSaldo(id);

  if (valor <= 0) {
    return alert("Valor inválido, tente novamente");
  }
  if (valor > saldo) {
    return alert("Saldo insuficiente" + "" + "\nSeu saldo atual é: R$" + saldo);
  }
  if ((valor > 0) & (valor < saldo)) {
    return alert(
      "Saque realizado com sucesso" +
        "" +
        "\nSeu saldo atual é: " +
        atualizaSaldo(id, valor)
    );
  }
}

function depositar(valor, id) {
  let saldoFinal = atualizaSaldo(id, valor);
  return alert(
    "Depósito realizado com sucesso!" +
      "" +
      "\nSeu saldo atual é: R$" +
      saldoFinal
  );
}
