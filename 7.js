let somaIdades = 0;
for (let i = 0; i < 20; i++) {
  let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
  somaIdades += idade;
}
let media = somaIdades / 20;
console.log("A média das idades é:", media);
