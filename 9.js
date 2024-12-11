let nomeMaisNovo = "";
let idadeMaisNova = Infinity;
for (let i = 0; i < 10; i++) {
  let nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
  let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
  if (idade < idadeMaisNova) {
    idadeMaisNova = idade;
    nomeMaisNovo = nome;
  }
}
console.log("A pessoa mais nova é:", nomeMaisNovo);
