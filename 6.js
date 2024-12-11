let somaIdades = 0;
for (let i = 0; i < 20; i++) {
  let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
  somaIdades += idade;
}
console.log("A soma das idades é:", somaIdades);
