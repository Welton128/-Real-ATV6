let maioresDeIdade = 0;
for (let i = 0; i < 20; i++) {
  let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
  if (idade >= 18) {
    maioresDeIdade++;
  }
}
console.log("O número de pessoas maiores de idade é:", maioresDeIdade);
